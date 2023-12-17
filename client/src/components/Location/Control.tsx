import React, { useState, useEffect } from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    IconButton,
    Switch,
} from '@mui/material'
import adafruitService from '../../service/adafruitService'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
    getCurrentLocation,
    selectLocation,
} from '../../features/Location/locationSlice'
const label = { inputProps: { 'aria-label': 'Switch demo' } }
const Control = ({ Icon, Name, Number }: any) => {
    const selectLoc = useAppSelector(selectLocation)
    const dispatch = useAppDispatch()
    const loc = selectLoc.location[0]
    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
        if (Name === 'Water Pumping') {
            adafruitService.getStatusOfWaterPumping(setChecked)
        } else {
            adafruitService.getStatusOfLed(setChecked)
        }
    }, [])

    const handleAction = (e: any) => {
        // e.preventDefault()
        setChecked(e.target.checked)
        if (Name === 'Water Pumping') {
            adafruitService.water_pumping(checked, loc?._id)
        } else {
            adafruitService.light(checked, loc?._id)
        }
    }
    return (
        <Card
            sx={{
                width: 300,
                height: 200,
                borderRadius: '5px',
                backgroundColor: '#EEFFF2',
            }}
            style={{
                margin: '1em 0',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
        >
            <CardContent>
                <IconButton>
                    <Icon style={{ fontSize: '3.5rem' }} />
                </IconButton>
                <div style={{ color: '#063E2A', textAlign: 'center' }}>
                    {Name}
                </div>
            </CardContent>
            <div>
                <CardActionArea>
                    <Switch
                        {...label}
                        onChange={handleAction}
                        checked={checked}
                    />
                </CardActionArea>
                <span style={{ color: '#063E2A' }}>{Number}</span>
            </div>
        </Card>
    )
}

export default Control
