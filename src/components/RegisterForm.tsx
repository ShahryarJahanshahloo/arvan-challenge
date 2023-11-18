import { useFormik } from 'formik'
import { useAppDispatch } from '../store/hooks'
import { useNavigate } from 'react-router-dom'
import FormSubmitButton from '../components/FormSubmitButton'
import FormInput from '../components/FormInput'
import { initialValues, validate } from './RegisterFormValidation'
import { Register } from '../store/user/user.thunks'

const strings = {
  submit: 'Register',
  user: 'User',
  email: 'Email',
  password: 'Password',
}

const RegisterForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: initialValues,
    validate: validate,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true)
      dispatch(Register(values, navigate)).finally(() => setSubmitting(false))
    },
  })

  return (
    <form
      className='flex flex-col w-full mb-[14px]'
      onSubmit={formik.handleSubmit}
    >
      <FormInput
        id='username'
        type='text'
        label={strings.user}
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.errors.username}
        onBlur={formik.handleBlur}
        touched={formik.touched.username}
        containerClassName='mb-7'
      />
      <FormInput
        id='email'
        type='email'
        label={strings.email}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
        onBlur={formik.handleBlur}
        touched={formik.touched.email}
        containerClassName='mb-7'
      />
      <FormInput
        id='password'
        type='password'
        label={strings.password}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        autocomplete='new-password'
        onBlur={formik.handleBlur}
        touched={formik.touched.password}
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

export default RegisterForm
