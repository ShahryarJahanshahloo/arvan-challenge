import FormSubmitButton from './FormSubmitButton'
import FormInput from './FormInput'
import { useEffect } from 'react'
import { apiGetTags } from '../services/article/article.api'
import { nanoid } from 'nanoid'
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
    setFieldValue,
    touched,
    handleBlur,
  } = useFormikContext<FormValues>()

  useEffect(() => {
    const fetch = async () => {
      const tags = await apiGetTags()
      const normalizedTags = tags.map(tag => {
        return {
          label: tag,
          checked: false,
          uid: nanoid(),
        }
      })
      if (values.tags === undefined) {
        setFieldValue('tags', normalizedTags)
      } else {
        const newTags = [...values.tags]
        normalizedTags.forEach(item => {
          const found = newTags.find(tag => tag.label === item.label)
          if (!found) {
            newTags.push(item)
          }
        })
        setFieldValue('tags', newTags)
      }
    }
    fetch()
  }, [])

  return (
    <form className='flex pt-5 gap-11' onSubmit={handleSubmit}>
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
          containerClassName='gap-2 mb-6'
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
          containerClassName='gap-2 mb-6'
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
          containerClassName='gap-2 mb-6'
          inputClassName='h-52 py-1'
        />
        <FormSubmitButton
          label={strings.submit}
          disabled={isSubmitting || !isValid}
          loading={isSubmitting}
          inputClassName='h-[35px] w-[100px]'
        />
      </div>
      <ArticleFormTags />
    </form>
  )
}

export default ArticleForm
