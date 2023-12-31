import { configureStore, ThunkAction, AnyAction } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import articlesSlice from './article/articleSlice'
import toastSlice from './toast/toastSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    articles: articlesSlice,
    toast: toastSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
    }),
})

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
