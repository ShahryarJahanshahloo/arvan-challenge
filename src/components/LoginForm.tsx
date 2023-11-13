import { useFormik } from 'formik'
import { useAppDispatch } from '../store/hooks'
import { useNavigate } from 'react-router-dom'
import FormSubmitButton from '../components/FormSubmitButton'
import FormInput from '../components/FormInput'
import { initialValues, validate } from './LoginFormValidation'
import { Login } from '../services/user/user.thunks'
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
      //TODO: add schema validation
      dispatch(
        Login(values, navigate, LoginErrorToast, () => {
          setSubmitting(false)
        })
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
      />
      <FormInput
        id='password'
        type='password'
        label={strings.password}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <FormSubmitButton
        label={strings.submit}
        disabled={formik.isSubmitting || !formik.isValid}
      />
    </form>
  )
}

export default LoginForm
