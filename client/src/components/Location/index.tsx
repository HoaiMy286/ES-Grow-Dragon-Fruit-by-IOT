import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Name from './Name'
import Parameter from './Parameter'
import Control from './Control'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import SanitizerIcon from '@mui/icons-material/Sanitizer'
import { Container } from '@mui/system'
import Dropdown from './Dropdown'
import { IDevice } from '../../pages/Map'
import { ILocation } from '../../pages/Map'
import locationService from '../../service/locationService'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
    getCurrentLocation,
    selectLocation,
} from '../../features/Location/locationSlice'

const Location = ({ name, device }: { name: string; device: IDevice }) => {
    const [locations, setLocations] = useState<ILocation[]>([])
    const dispatch = useAppDispatch()
    const getLocation = async () => {
        const response = await locationService.getAllLocation()
        // setLocations(response)

        const currentLocation = response.filter(
            (loc: { name: string }) => loc.name === name,
        )
      
        dispatch(getCurrentLocation(currentLocation))
    }

    return (
        <Container>
            <div>
                <Card sx={{ minWidth: '50%' }} style={{ margin: '2em' }}>
                    <div onClick={getLocation}>
                        <Dropdown />
                    </div>
                    <CardContent>
                        <Name name={name} />
                        <Parameter />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Control
                                Icon={LightbulbIcon}
                                Name={'Lights'}
                                Number={
                                    device.light
                                        ? `${device.light} devices`
                                        : `${device.light} device`
                                }
                            />
                            <Control
                                Icon={SanitizerIcon}
                                Name={'Water Pumping'}
                                Number={
                                    device.water_pumping
                                        ? `${device.water_pumping} devices`
                                        : `${device.water_pumping} device`
                                }
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Container>
    )
}

export default Location
