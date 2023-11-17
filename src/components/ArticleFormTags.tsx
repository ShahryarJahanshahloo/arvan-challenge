import { useEffect, useMemo, useState } from 'react'
import FormCheckbox from './FormCheckbox'
import FormInput from './FormInput'
import TagSkeleton from './TagSkeleton'
import { nanoid } from 'nanoid'
import { useFormikContext } from 'formik'
import { FormValues } from './ArticleFormValidation'
import useKeyDown from '../hooks/useKeyDown'
import { useAppDispatch } from '../store/hooks'
import { MergeTags } from '../store/article/article.thunks'
import { sortTags } from '../helpers/tags'

const strings = {
  tags: 'Tags',
  tagPlaceholder: 'New Tag',
}

const ArticleFormTags = () => {
  const dispatch = useAppDispatch()
  const [newTag, setNewTag] = useState('')
  const { values, setFieldValue } = useFormikContext<FormValues>()
  useKeyDown('Enter', () => {
    if (newTag.trim() === '') return
    if (values.tags === undefined) return
    const newTags = [...values.tags]
    newTags.push({ checked: true, label: newTag, uid: nanoid() })
    setFieldValue('tags', newTags)
    setNewTag('')
  })

  useEffect(() => {
    dispatch(MergeTags(values.tags))
      .then(newTags => {
        setFieldValue('tags', newTags)
      })
      .catch(() => {})
  }, [])

  const sortedTags = useMemo(() => {
    return sortTags(values.tags)
  }, [values.tags])

  const handleNewTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value)
  }

  const handleTagChange = (tag: {
    label: string
    checked: boolean
    uid?: string
  }) => {
    if (values.tags === undefined) return
    const newTags = values.tags.map(item => {
      if (item.uid !== tag.uid) return item
      return { ...item, checked: !item.checked }
    })
    setFieldValue('tags', newTags)
  }

  return (
    <div className='flex flex-col w-[252px]'>
      <FormInput
        label={strings.tags}
        value={newTag}
        onChange={handleNewTagChange}
        placeholder={strings.tagPlaceholder}
        containerClassName='mb-6'
      />
      <div className='flex flex-col gap-3 px-4 py-4 border rounded border-grey-2'>
        {sortedTags ? (
          sortedTags.map(tag => {
            if (tag === undefined) return
            return (
              <FormCheckbox
                checked={tag.checked}
                label={tag.label}
                onChange={handleTagChange}
                key={tag.uid}
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
  )
}

export default ArticleFormTags
