import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { ILocation } from '../../pages/Map'

export interface ILoc {
    location: Array<ILocation>
}

const initialState: ILoc = {
    location: [],
}

export const LocationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        getCurrentLocation: (
            state,
            action: PayloadAction<Array<ILocation>>,
        ) => {
            state.location = action.payload
        },
    },
})

export const selectLocation = (state: RootState) => state.location

export const { getCurrentLocation } = LocationSlice.actions
export default LocationSlice.reducer
