import {
    Card,
    CardActionArea,
    CardContent,
    IconButton,
    Switch,
} from '@mui/material'
import adafruitService from '../../service/adafruitService'
import React, { useState } from 'react'
const label = { inputProps: { 'aria-label': 'Switch demo' } }
const MiniControl = ({ Icon, Name}: any) => {
    const [checked, setChecked] = useState<boolean>(true)
    const handleAction = (e: any) => {
        e.preventDefault()
        setChecked(e.target.checked)
        // if (Name === 'Water Pumping') {
        //     adafruitService.water_pumping(checked)
        // } else {
        //     adafruitService.light(checked)
        // }
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
         
        </div>
    </Card>
    )
}

export default MiniControl
