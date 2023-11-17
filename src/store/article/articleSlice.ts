import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { ArticleType } from '../../services/article/article.entities'

interface ArticlesState {
  data?: ArticleType[]
  loading: boolean
}

const initialState: ArticlesState = {
  data: undefined,
  loading: false,
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<ArticleType[]>) => {
      state.data = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { setArticles, setLoading } = articlesSlice.actions

export const selectArticles = (state: RootState) => state.articles.data
export const selectArticlesLoading = (state: RootState) =>
  state.articles.loading

export default articlesSlice.reducer
