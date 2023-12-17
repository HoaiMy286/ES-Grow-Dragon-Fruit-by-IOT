
import {

    Typography,
    CardContent,
    Button,
    Card
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import adafruitService from '../../service/adafruitService'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const MiniNoti = () => {
    // const [temperature, setTemperature] = useState<String>()
    // const [lightIntensity, setLightIntensity] = useState<String>()
    // const [landMoisture, setLandMoisture] = useState<String>()
    // const [humidity, sethumidity] = useState<String>()

    // useEffect(() => {
    //     adafruitService.temperature(setTemperature)
    //     adafruitService.lightIntensity(setLightIntensity)
    //     adafruitService.landMoisture(setLandMoisture)
    //     adafruitService.humidity(sethumidity)

    // }, [temperature, lightIntensity, landMoisture, humidity])
    return (
        <div className='Home-Noti'>
            <CardContent>
            <Typography sx={{ fontSize: 30 }} className = "home-noti-fix">
                Enviroment Information
            </Typography>
            </CardContent>
            <div className='infor-noti'>
                <Card
                    sx={{
                        width: 300,
                        height: 200,
                        borderRadius: '30px',
                        backgroundColor: '#EEFFF2',
                    }}
                    style={{
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <CardContent>


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
                                {localStorage.getItem('temperature')}
                                <span style={{ fontSize: '20px', color: '#152CFA', }}>
                                    <sub>
                                        <sup>oC</sup>
                                    </sub>
                                </span>
                            </div>
                            <div
                                className="sensor-name"
                                style={{ fontSize: '20px', color: '#0E7738' }}
                            >
                                Temperature
                            </div>
                        </div>

                    </CardContent>


                </Card>
                <Card
                    sx={{
                        width: 300,
                        height: 200,
                        borderRadius: '30px',
                        backgroundColor: '#EEFFF2',
                    }}
                    style={{
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <CardContent>


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
                                LandMoisture
                            </div>
                        </div>

                    </CardContent>


                </Card>

                <Card
                    sx={{
                        width: 300,
                        height: 200,
                        borderRadius: '30px',
                        backgroundColor: '#EEFFF2',
                    }}
                    style={{
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <CardContent>


                        <div className="Sensor-container">
                            <div
                                className="sensor-number"
                                style={{
                                    fontSize: '40px',
                                    textAlign: 'center',
                                    marginBottom: '10px',
                                    color: '#E64D4D',
                                }}
                            >
                                {localStorage.getItem('humidity')}
                                <span style={{ fontSize: '20px', color: '#E64D4D', }}>
                                    <sub>
                                        g/m<sub>3</sub>
                                    </sub>
                                </span>
                            </div>
                            <div
                                className="sensor-name"
                                style={{ fontSize: '20px', color: '#0E7738' }}
                            >
                                Humidity
                            </div>
                        </div>

                    </CardContent>


                </Card>
            </div>

        </div >
    )
}
export default MiniNoti