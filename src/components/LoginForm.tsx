import { useFormik } from 'formik'
import { useAppDispatch } from '../store/hooks'
import { useNavigate } from 'react-router-dom'
import FormSubmitButton from '../components/FormSubmitButton'
import FormInput from '../components/FormInput'
import { initialValues, validate } from './LoginFormValidation'
import { Login } from '../store/user/user.thunks'
import { LoginErrorToast } from './ErrorToast'

const strings = {
  submit: 'Login',
  email: 'Email',
  password: 'Password',
}

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: initialValues,
    validate: validate,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true)
      dispatch(Login(values, navigate, LoginErrorToast)).finally(() =>
        setSubmitting(false)
      )
    },
  })

  return (
    <form
      className='flex flex-col w-full mb-[14px]'
      onSubmit={formik.handleSubmit}
    >
      <FormInput
        id='email'
        type='email'
        label={strings.email}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
        onBlur={formik.handleBlur}
        touched={formik.touched.email}
        errorClassName='mt-2'
        containerClassName='mb-7'
      />
      <FormInput
        id='password'
        type='password'
        label={strings.password}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        onBlur={formik.handleBlur}
        touched={formik.touched.password}
        errorClassName='mt-2'
        containerClassName='mb-7'
      />
      <FormSubmitButton
        label={strings.submit}
        disabled={formik.isSubmitting || !formik.isValid}
        inputClassName='py-2'
      />
    </form>
  )
}

export default LoginForm
