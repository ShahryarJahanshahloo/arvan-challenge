import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import articlesSlice from './articleSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    articles: articlesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
