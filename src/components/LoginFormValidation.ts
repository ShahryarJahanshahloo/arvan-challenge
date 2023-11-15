interface FormValues {
  email: string
  password: string
}

export const initialValues: FormValues = {
  email: '',
  password: '',
}

export const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {}
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

  if (!regex.test(values.email)) {
    errors.email = 'Invalid email'
  }

  if (!values.password) {
    errors.password = 'Required field'
  }

  return errors
}
