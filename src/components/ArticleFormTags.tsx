import { useEffect, useMemo, useState } from 'react'
import FormCheckbox from './FormCheckbox'
import FormInput from './FormInput'
import TagSkeleton from './TagSkeleton'
import { nanoid } from 'nanoid'
import { useFormikContext } from 'formik'
import { FormValues } from './ArticleFormValidation'
import { apiGetTags } from '../services/article/article.api'
import useKeyDown from '../hooks/useKeyDown'

const strings = {
  tags: 'Tags',
  tagPlaceholder: 'New Tag',
}

const ArticleFormTags = () => {
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

  const sortedTags = useMemo(() => {
    return values.tags?.sort((a, b) => {
      const textA = a.label.toUpperCase()
      const textB = b.label.toUpperCase()
      return textA < textB ? -1 : textA > textB ? 1 : 0
    })
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
