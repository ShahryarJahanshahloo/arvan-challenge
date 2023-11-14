import { NavigateFunction } from 'react-router-dom'
import { AppThunk } from '../../store/store'
import {
  apiCreateArticle,
  apiDeleteArticle,
  apiUpdateArticle,
} from './article.api'
import { Toast } from '../toast/toast.thunks'

export const CreateArticle =
  (
    body: {
      title: string
      description: string
      body: string
      tagList?: string[]
    },
    navigate: NavigateFunction,
    toastComp: React.ReactElement,
    cb?: () => void
  ): AppThunk =>
  async dispatch => {
    try {
      const res = await apiCreateArticle(body)
      navigate('/articles')
      dispatch(Toast(toastComp, 'top-20 right-[30px]'))
    } catch (error) {
      console.log(error)
    }
    if (cb) cb()
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
    toastComp: React.ReactElement,
    cb?: () => void
  ): AppThunk =>
  async dispatch => {
    try {
      const res = await apiUpdateArticle(slug, body)
      navigate('/articles')
      dispatch(Toast(toastComp, 'top-20 right-[30px]'))
    } catch (error) {
      console.log(error)
    }
    if (cb) cb()
  }

export const DeleteArticle =
  (
    slug: string,
    navigate: NavigateFunction,
    toastComp: React.ReactElement,
    cb?: () => void
  ): AppThunk =>
  async dispatch => {
    try {
      const res = await apiDeleteArticle(slug)
      navigate('/articles')
      dispatch(Toast(toastComp, 'top-20 right-[30px]'))
    } catch (error) {
      console.log(error)
    }
    if (cb) cb()
  }
