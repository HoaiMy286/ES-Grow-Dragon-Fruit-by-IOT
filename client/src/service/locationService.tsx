import axios from '../api'
import { setMessage } from '../features/SnackbarState/snackbarSlice'
const addLocation = async (name: String, device: Object, dispatch: any) => {
    try {
        const res = await axios.post('location/createLocation', {
            name,
            device,
        })
        const message = {
            msg: 'New location was added successfully',
            statusMessage: 'success',
        }
        dispatch(setMessage(message))
        console.log(res)
    } catch (error) {
        console.log(error)
        const message = {
            msg: "this location's name already existed",
            statusMessage: 'error',
        }
        dispatch(setMessage(message))
    }
}



const getAllLocation = async () => {
    try {
        const res = await axios.get('location/getAllLocations')
        return res.data.data.locations
    } catch (error) {
        console.log(error)
    }
}

const updateLocation = async (
    name: String,
    device: Object,
    id: String,
    dispatch: any,
) => {
    try {
        const res = await axios.put('location/updateLocation', {
            name,
            device,
            id,
        })
        const message = {
            msg: 'New location was update successfully',
            statusMessage: 'success',
        }
        dispatch(setMessage(message))
        console.log(res)
    } catch (error) {
        console.log(error)
        const message = {
            msg: "this location's name already existed",
            statusMessage: 'error',
        }
        dispatch(setMessage(message))
    }
}
const removeLocation = async (id: String, dispatch: any) => {
    try {
        const params = { _id: id }
        const res = await axios.delete('location/deleteLocation', {
            data: params,
        })
        const message = {
            msg: 'New location was update successfully',
            statusMessage: 'success',
        }
        dispatch(setMessage(message))
        console.log(res)
    } catch (error) {
        console.log(error)
        const message = {
            msg: "this location's name already existed",
            statusMessage: 'error',
        }
        dispatch(setMessage(message))
    }
}

const locationService = {
    addLocation,
    getAllLocation,
    updateLocation,
    removeLocation,
}
export default locationService
