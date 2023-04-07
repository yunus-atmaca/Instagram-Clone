import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '@src/types/types'
import { mainUser } from '@src/data/currentUser'

const name = 'appHeader'

export type State = {
  user?: IUser
}

const defState: State = {
  user: undefined,
}

const initialState = defState

const {
  actions: { setUser },
  reducer,
} = createSlice({
  name,
  initialState: initialState,
  reducers: {
    setUser: (_, action: PayloadAction<string>) => {
      return { user: mainUser }
    },
  },
})

export { reducer, setUser }
