import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { AuthController, TouchController } from './controllers'

export const store = configureStore({
  reducer: {
    authController: AuthController.reducer,
    touchController: TouchController.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
  //getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})
