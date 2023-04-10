import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TouchEventType } from '@src/types/store'
import { IMedia } from '@src/types/types'

const name = 'appHeader'

export type State = {
  event: TouchEventType
  data: IMedia[] | null
}

const initialState: State = {
  event: 'out',
  data: null,
}

const {
  actions: { setTouch, setData },
  reducer,
} = createSlice({
  name,
  initialState: initialState,
  reducers: {
    setTouch: (state, action: PayloadAction<TouchEventType>) => {
      return { ...state, event: action.payload }
    },
    setData: (state, action: PayloadAction<IMedia[]>) => {
      return { ...state, data: action.payload }
    },
  },
})

export { reducer, setTouch, setData }
