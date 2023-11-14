import { NavigateFunction } from 'react-router-dom'
import { AppThunk } from '../../store/store'
import { apiCreateArticle } from './article.api'

export const CreateArticle =
  (
    body: {
      title: string
      description: string
      body: string
      tagList?: string[]
    },
    navigate: NavigateFunction,
    cb?: () => void
  ): AppThunk =>
  async () => {
    try {
      const res = await apiCreateArticle(body)
      console.log(res)
      navigate('/articles')
    } catch (error) {
      console.log(error)
    }
    if (cb) cb()
  }
