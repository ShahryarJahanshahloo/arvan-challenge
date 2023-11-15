interface FormValues {
  username: string
  email: string
  password: string
}

export const initialValues: FormValues = {
  username: '',
  email: '',
  password: '',
}

export const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {}
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

  if (!values.username) {
    errors.username = 'Required field'
  }

  if (!values.email) {
    errors.email = 'Required field'
  } else if (!regex.test(values.email)) {
    errors.email = 'Invalid email'
  }

  if (!values.password) {
    errors.password = 'Required field'
  }

  return errors
}
