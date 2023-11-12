import request from '../../lib/axios'
import type { ArticleType } from './article.entities'

export const getAllArticles = async () => {
  const res = await request.get('/articles')
  return res.data.articles as ArticleType[]
}
