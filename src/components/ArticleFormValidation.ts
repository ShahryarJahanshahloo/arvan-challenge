export interface FormValues {
  title: string
  description: string
  body: string
}

export const initialValues: FormValues = {
  title: '',
  description: '',
  body: '',
}

export const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {}

  if (!values.title) {
    errors.title = 'Required field'
  }

  if (!values.description) {
    errors.description = 'Required field'
  }

  if (!values.body) {
    errors.body = 'Required field'
  }

  return errors
}
