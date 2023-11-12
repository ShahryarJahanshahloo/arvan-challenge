import DashboardTitle from '../components/DashboardTitle'
import { useFormik } from 'formik'

const strings = {
  title: 'New Article',
  tags: 'Tags',
  tagPlaceholder: 'New Tag',
  submit: 'Submit',
  inputTitle: 'Title',
  inputDescription: 'Description',
  inputBody: 'Body',
}

interface FormValues {
  title: string
  description: string
  body: string
}

const initialValues: FormValues = {
  title: '',
  description: '',
  body: '',
}

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {}

  if (!values.title) {
    errors.title = 'Required field'
  }

  return errors
}

const DashboardNew = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validate: validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <DashboardTitle title={strings.title} />

      <div className='flex pt-5 gap-11'>
        <form
          className='flex flex-col flex-grow'
          onSubmit={formik.handleSubmit}
        >
          <div className='flex flex-col gap-2 mb-6'>
            <label className={`${formik.errors.title && 'text-red-1'}`}>
              {strings.inputTitle}
            </label>
            <input
              placeholder={strings.inputTitle}
              className={`h-10 px-3 border rounded outline-none border-grey-2 ${
                formik.errors.title && 'border-red-1'
              }`}
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {formik.errors.title ? (
              <div className='text-red-1'>{formik.errors.title}</div>
            ) : null}
          </div>
          <div className='flex flex-col gap-2 mb-6'>
            <label>{strings.inputDescription}</label>
            <input
              placeholder={strings.inputDescription}
              className='h-10 px-3 border rounded outline-none border-grey-2'
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </div>
          <div className='flex flex-col gap-2 mb-6'>
            <label>{strings.inputBody}</label>
            <textarea
              className='px-3 py-1 border rounded outline-none resize-none h-52 border-grey-2'
              value={formik.values.body}
              onChange={formik.handleChange}
            />
          </div>
          <input
            type='submit'
            value={strings.submit}
            className='h-[35px] w-[100px] bg-blue-1 text-white rounded'
          />
        </form>

        <div className='flex flex-col w-[252px] gap-2'>
          <span>{strings.tags}</span>
          <input
            className='h-10 px-3 border rounded border-grey-2'
            placeholder={strings.tagPlaceholder}
          />
          <div className='border rounded border-grey-2 pl-[17px] pt-[17px] h-96'></div>
        </div>
      </div>
    </>
  )
}

export default DashboardNew
