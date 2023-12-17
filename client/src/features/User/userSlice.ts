import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { images } from '../../constants'

export interface IUser {
    fullname: string,
    email: string,
    avt?: any,
    isLogged?: boolean
}

const initialState: IUser = {
    fullname: 'Unknown',
    email: 'unknown',
    avt: images.avt,
    isLogged: false
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IUser>) => {
            state.email = action.payload.email
            state.fullname = action.payload.fullname
            state.isLogged = true

            if (action.payload?.avt) {
                state.avt = images.avt
            }
        },

        logout: state => {
            state.isLogged = false
        }
    },
})

export const selectUser = (state: RootState) => state.user

export const { login, logout } = UserSlice.actions
export default UserSlice.reducer
