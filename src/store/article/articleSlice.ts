import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { ArticleType } from '../../services/article/article.entities'

interface ArticlesState {
  data?: ArticleType[]
}

const initialState: ArticlesState = {
  data: undefined,
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<ArticleType[]>) => {
      state.data = action.payload
    },
  },
})

export const { setArticles } = articlesSlice.actions

export const selectArticles = (state: RootState) => state.articles.data

export default articlesSlice.reducer
