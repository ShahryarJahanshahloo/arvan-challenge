import { NavigateFunction } from 'react-router-dom'
import { AppThunk } from '../store'
import {
  apiCreateArticle,
  apiDeleteArticle,
  apiGetTags,
  apiUpdateArticle,
} from '../../services/article/article.api'
import { Toast } from '../toast/toast.thunks'
import { nanoid } from 'nanoid'

export const CreateArticle =
  (
    body: {
      title: string
      description: string
      body: string
      tagList?: string[]
    },
    navigate: NavigateFunction,
    toastComp: React.ReactElement
  ): AppThunk<Promise<void>> =>
  async dispatch => {
    try {
      await apiCreateArticle(body)
      navigate('/articles')
      dispatch(Toast(toastComp, 'top-20 right-[30px]'))
    } catch (error) {
      console.log(error)
    }
  }

export const UpdateArticle =
  (
    slug: string,
    body: {
      title: string
      description: string
      body: string
      tagList?: string[]
    },
    navigate: NavigateFunction,
    toastComp: React.ReactElement
  ): AppThunk<Promise<void>> =>
  async dispatch => {
    try {
      await apiUpdateArticle(slug, body)
      navigate('/articles')
      dispatch(Toast(toastComp, 'top-20 right-[30px]'))
    } catch (error) {
      console.log(error)
    }
  }

export const DeleteArticle =
  (
    slug: string,
    navigate: NavigateFunction,
    toastComp: React.ReactElement
  ): AppThunk =>
  async dispatch => {
    try {
      await apiDeleteArticle(slug)
      navigate('/articles')
      dispatch(Toast(toastComp, 'top-20 right-[30px]'))
    } catch (error) {
      console.log(error)
    }
  }

export const MergeTags =
  (
    prevTags?: { label: string; uid: string; checked: boolean }[]
  ): AppThunk<
    Promise<{ label: string; uid: string; checked: boolean }[] | undefined>
  > =>
  async () => {
    try {
      const tags = await apiGetTags()
      const normalizedTags = tags.map(tag => {
        return {
          label: tag,
          checked: false,
          uid: nanoid(),
        }
      })
      if (prevTags === undefined) return normalizedTags
      const newTags = [...prevTags]
      normalizedTags.forEach(item => {
        const found = newTags.find(tag => tag.label === item.label)
        if (!found) {
          newTags.push(item)
        }
      })
      return newTags
    } catch (error) {
      console.log(error)
    }
  }
