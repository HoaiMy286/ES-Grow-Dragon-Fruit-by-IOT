import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface message {
    msg: string
    statusMessage: any
}

export interface snackbarState {
    status: boolean
    message: message
}

const initialState: snackbarState = {
    status: false,
    message: {
        msg: 'Add a new location succesfully',
        statusMessage: 'success',
    },
}

export const snackbarStateSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        setStatus: (state, action: PayloadAction<boolean>) => {
            state.status = action.payload
        },
        setMessage: (state, action: PayloadAction<message>) => {
            state.message = action.payload
        },
    },
})

export const selectStatus = (state: RootState) => state.snackbar

export const { setStatus, setMessage } = snackbarStateSlice.actions
export default snackbarStateSlice.reducer
