import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import adafruitService from '../../service/adafruitService'
const Parameter = () => {
    // const [temperature, setTemperature] = useState<String>()
    // const [lightIntensity, setLightIntensity] = useState<String>()
    // const [landMoisture, setLandMoisture] = useState<String>()

    // useEffect(() => {
    //     adafruitService.temperature(setTemperature)
    //     adafruitService.lightIntensity(setLightIntensity)
    //     adafruitService.landMoisture(setLandMoisture)
    // }, [temperature, lightIntensity, landMoisture])
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: '100%',
                    height: 128,
                },
            }}
        >
            <Paper
                style={{
                    backgroundColor: '#E2FCE8',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 2em',
                }}
                elevation={2}
            >
                <div className="Sensor-container">
                    <div
                        className="sensor-number"
                        style={{
                            fontSize: '32px',
                            textAlign: 'center',
                            marginBottom: '10px',
                            color: '#E64D4D',
                        }}
                    >
                        {localStorage.getItem('temperature')}
                        <sup>o</sup>
                    </div>
                    <div
                        className="sensor-name"
                        style={{ fontSize: '20px', color: '#0E7738' }}
                    >
                        Temperature
                    </div>
                </div>
                <div className="Sensor-container">
                    <div
                        className="sensor-number"
                        style={{
                            fontSize: '40px',
                            textAlign: 'center',
                            marginBottom: '10px',
                            color: '#152CFA',
                        }}
                    >
                        {localStorage.getItem('landMoisture')}
                        <span style={{ fontSize: '20px' }}>
                            <sub>
                                g/m<sub>3</sub>
                            </sub>
                        </span>
                    </div>
                    <div
                        className="sensor-name"
                        style={{ fontSize: '20px', color: '#0E7738' }}
                    >
                        Land Moisture
                    </div>
                </div>
                <div className="Sensor-container">
                    <div
                        className="sensor-number"
                        style={{
                            fontSize: '40px',
                            textAlign: 'center',
                            marginBottom: '10px',
                            color: '#C7B514',
                        }}
                    >
                        {localStorage.getItem('lightIntensity')}
                        <span style={{ fontSize: '20px' }}>
                            <sub>
                                W/m<sub>m2</sub>
                            </sub>
                        </span>
                    </div>
                    <div
                        className="sensor-name"
                        style={{ fontSize: '20px', color: '#0E7738' }}
                    >
                        Light intensity
                    </div>
                </div>
            </Paper>
        </Box>
    )
}

export default Parameter
