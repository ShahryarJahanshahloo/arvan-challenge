import FormSubmitButton from './FormSubmitButton'
import FormInput from './FormInput'
import ArticleFormTags from './ArticleFormTags'
import { useFormikContext } from 'formik'
import { FormValues } from './ArticleFormValidation'

const strings = {
  tags: 'Tags',
  tagPlaceholder: 'New Tag',
  submit: 'Submit',
  inputTitle: 'Title',
  inputDescription: 'Description',
  inputBody: 'Body',
}

const ArticleForm = () => {
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    isValid,
    isSubmitting,
    touched,
    handleBlur,
  } = useFormikContext<FormValues>()

  return (
    <form
      className='flex flex-col gap-4 px-4 py-5 mt-6 md:py-0 md:gap-0 md:px-0'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col gap-2 mb-4 md:flex-row md:gap-11'>
        <div className='flex flex-col flex-grow'>
          <FormInput
            id='title'
            type='text'
            label={strings.inputTitle}
            value={values.title}
            touched={touched.title}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.title}
            placeholder={strings.inputTitle}
            containerClassName='mb-6'
            errorClassName='mt-1'
            labelClassName='text-grey-6'
          />
          <FormInput
            id='description'
            type='text'
            label={strings.inputDescription}
            value={values.description}
            touched={touched.description}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.description}
            placeholder={strings.inputDescription}
            containerClassName='mb-6'
            errorClassName='mt-1'
            labelClassName='text-grey-6'
          />
          <FormInput
            id='body'
            label={strings.inputBody}
            value={values.body}
            touched={touched.body}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.body}
            textarea
            resize='none'
            errorClassName='mt-1'
            inputClassName='min-h-[208px] py-1 flex-grow'
            labelClassName='text-grey-6'
            containerClassName='flex-grow'
          />
        </div>
        <ArticleFormTags />
      </div>
      <FormSubmitButton
        label={strings.submit}
        disabled={isSubmitting || !isValid}
        loading={isSubmitting}
        inputClassName='w-[100px] py-[6px]'
      />
    </form>
  )
}

export default ArticleForm
