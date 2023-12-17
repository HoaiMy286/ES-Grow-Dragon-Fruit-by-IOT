import React, { useState, useEffect } from 'react'
import Location from '../components/Location'
import '../scss/location.scss'
import Container from '@mui/material/Container'
import AddLocation from '../components/Location/AddLocation'
import axios from '../api'
import locationService from '../service/locationService'
import { selectStatus } from '../features/SnackbarState/snackbarSlice'
import { useAppSelector } from '../app/hooks'
export interface IDevice {
    light: Number
    water_pumping: Number
    light_sensor: Number
    land_moisture_sensor: Number
}
export interface ILocation {
    name: string
    device: IDevice
    _id: string
    water_pumping_status: boolean
    light_status: boolean
}
const Map = () => {
    const snackbar = useAppSelector(selectStatus)
    const [locations, setLocations] = useState<ILocation[]>([])
    useEffect(() => {
        const response = locationService.getAllLocation()
        response
            .then((res) => {
                // console.log(res)
                if (res) setLocations(res)
            })
            .catch((err) => console.log(err))
    }, [snackbar.message])
    return (
        <>
            <div style={{ margin: '2.5em' }}>
                <AddLocation />
            </div>
            <Container
                maxWidth="xl"
                style={{ display: 'flex', height: '100%' }}
            >
                {locations?.map((location) => (
                    <Location
                        key={location._id}
                        name={location.name}
                        device={location.device}
                    />
                ))}
            </Container>
        </>
    )
}

export default Map
