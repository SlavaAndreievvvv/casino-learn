import { configureStore, Store } from '@reduxjs/toolkit'
import userSlice from '../../entities/user/slices/userSlice'
import { userApi } from '../../entities/user/api/userApi'


export const store: Store = configureStore({
  reducer: {
    user: userSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch