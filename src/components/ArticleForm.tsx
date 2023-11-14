import { useFormik } from 'formik'
import { initialValues, validate } from './ArticleFormValidation'
import { useAppDispatch } from '../store/hooks'
import { useNavigate } from 'react-router-dom'
import FormSubmitButton from './FormSubmitButton'
import FormInput from './FormInput'
import { useEffect, useState } from 'react'
import { apiGetTags } from '../services/article/article.api'
import FormCheckbox from './FormCheckbox'
import { nanoid } from 'nanoid'
import {
  CreateArticle,
  UpdateArticle,
} from '../services/article/article.thunks'
import TagSkeleton from './TagSkeleton'
import { ArticleCreationToast, ArticleUpdateToast } from './SuccessToast'

const strings = {
  tags: 'Tags',
  tagPlaceholder: 'New Tag',
  submit: 'Submit',
  inputTitle: 'Title',
  inputDescription: 'Description',
  inputBody: 'Body',
}

type Props = {
  isEdit: boolean
  initialValuesToUpdate?: {
    title: string
    description: string
    body: string
    slug: string
    tagList?: string[]
  }
}

const ArticleForm: React.FC<Props> = ({ initialValuesToUpdate, isEdit }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: initialValues,
    validate: validate,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true)
      //TODO: add schema validation
      const checkedTags: string[] = []
      tags?.forEach(item => {
        if (item.checked === true) checkedTags.push(item.label)
      })
      if (isEdit) {
        if (initialValuesToUpdate === undefined) return
        dispatch(
          UpdateArticle(
            initialValuesToUpdate.slug,
            { ...values, tagList: checkedTags },
            navigate,
            ArticleUpdateToast,
            () => {
              setSubmitting(false)
            }
          )
        )
      } else {
        dispatch(
          CreateArticle(
            { ...values, tagList: checkedTags },
            navigate,
            ArticleCreationToast,
            () => {
              setSubmitting(false)
            }
          )
        )
      }
    },
  })
  const [newTag, setNewTag] = useState('')
  const [tags, setTags] =
    useState<{ label: string; checked: boolean; uid: string }[]>()

  useEffect(() => {
    const fetch = async () => {
      const tags = await apiGetTags()
      const normalizedTags = tags.map(tag => ({
        label: tag,
        checked: false,
        uid: nanoid(),
      }))
      setTags(normalizedTags)
    }
    fetch()
  }, [])

  useEffect(() => {
    if (initialValuesToUpdate === undefined) return
    formik.setValues({
      body: initialValuesToUpdate.body,
      description: initialValuesToUpdate.description,
      title: initialValuesToUpdate.title,
    })
    setTags(prevState => {
      if (prevState === undefined) return
      const newTags = [...prevState]
      initialValuesToUpdate.tagList?.forEach(item => {
        const found = tags?.find(elem => elem.label === item)
        if (found === undefined) {
          newTags.push({
            checked: true,
            label: item,
            uid: nanoid(),
          })
        }
      })
      return newTags.map(item => {
        if (initialValuesToUpdate.tagList?.includes(item.label)) {
          return { ...item, checked: true }
        } else {
          return item
        }
      })
    })
  }, [])

  const handleNewTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value)
  }

  const handleTagChange = (tag: {
    label: string
    checked: boolean
    uid?: string
  }) => {
    setTags(prevState => {
      if (prevState === undefined) return
      return prevState.map(item => {
        if (item.uid !== tag.uid) return item
        return { ...item, checked: !item.checked }
      })
    })
  }

  //TODO: separate hook
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if (newTag.trim() !== '') {
        setTags(prevState => {
          if (prevState === undefined) return
          const newTags = [...prevState]
          newTags.push({ checked: true, label: newTag, uid: nanoid() })
          return newTags
        })
        setNewTag('')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [newTag])

  return (
    <form className='flex pt-5 gap-11' onSubmit={formik.handleSubmit}>
      <div className='flex flex-col flex-grow'>
        <FormInput
          id='title'
          type='text'
          label={strings.inputTitle}
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.errors.title}
          placeholder={strings.inputTitle}
          containerClassName='gap-2 mb-6'
        />
        <FormInput
          id='description'
          type='text'
          label={strings.inputDescription}
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.errors.description}
          placeholder={strings.inputDescription}
          containerClassName='gap-2 mb-6'
        />
        <FormInput
          id='body'
          label={strings.inputBody}
          value={formik.values.body}
          onChange={formik.handleChange}
          error={formik.errors.description}
          textarea
          resize='none'
          containerClassName='gap-2 mb-6'
          inputClassName='h-52 py-1'
        />
        <FormSubmitButton
          label={strings.submit}
          disabled={formik.isSubmitting || !formik.isValid}
          inputClassName='h-[35px] w-[100px]'
        />
      </div>
      <div className='flex flex-col w-[252px] gap-2'>
        <FormInput
          label={strings.tags}
          value={newTag}
          onChange={handleNewTagChange}
          placeholder={strings.tagPlaceholder}
          containerClassName='gap-2 mb-6'
        />
        <div className='border rounded border-grey-2 px-4 pt-[17px] py-4 flex flex-col gap-3'>
          {tags ? (
            tags.map((tag, index) => {
              return (
                <FormCheckbox
                  checked={tag.checked}
                  label={tag.label}
                  onChange={handleTagChange}
                  key={index}
                  uid={tag.uid}
                />
              )
            })
          ) : (
            <div className='flex flex-col gap-5'>
              {Array.from({ length: 8 }, (v, i) => i + 1).map(index => {
                return <TagSkeleton key={index} />
              })}
            </div>
          )}
        </div>
      </div>
    </form>
  )
}

export default ArticleForm
