import { useFormik } from 'formik'
import { useAppDispatch } from '../store/hooks'
import { useNavigate } from 'react-router-dom'
import FormSubmitButton from '../components/FormSubmitButton'
import FormInput from '../components/FormInput'
import { initialValues, validate } from './RegisterFormValidation'
import { Register } from '../services/user/user.thunks'

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
      //TODO: add schema validation
      dispatch(
        Register(values, navigate, () => {
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
        id='username'
        type='text'
        label={strings.user}
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.errors.username}
        onBlur={formik.handleBlur}
        touched={formik.touched.username}
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
      />
      <FormInput
        id='password'
        type='password'
        label={strings.password}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        autcomplete='new-password'
        onBlur={formik.handleBlur}
        touched={formik.touched.password}
      />
      <FormSubmitButton
        label={strings.submit}
        disabled={formik.isSubmitting || !formik.isValid}
      />
    </form>
  )
}

export default RegisterForm
