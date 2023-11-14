import request from '../../lib/axios'
import type { ArticleType } from './article.entities'

export const getAllArticles = async () => {
  const res = await request.get('/articles')
  return res.data.articles as ArticleType[]
}

export const getUserArticles = async (
  author: string,
  limit: number,
  offset: number
) => {
  const res = await request.get('/articles', {
    params: { author, limit, offset },
  })
  return res.data.articles as ArticleType[]
}

export const apiGetArticle = async (slug: string) => {
  const res = await request.get('/articles/' + slug)
  return res.data.article as ArticleType
}

export const apiCreateArticle = async (body: {
  title: string
  description: string
  body: string
  tagList?: string[]
}) => {
  const res = await request.post('/articles', { article: body })
  return res.data
}

export const apiDeleteArticle = async (slug: string) => {
  const res = await request.delete('/articles/' + slug)
  return res.data
}

export const apiUpdateArticle = async (
  slug: string,
  body: { title?: string; description?: string; body?: string }
) => {
  const res = await request.put('/articles/' + slug, { article: body })
  return res.data
}

export const apiGetTags = async () => {
  const res = await request.get('/tags')
  return res.data.tags as string[]
}
