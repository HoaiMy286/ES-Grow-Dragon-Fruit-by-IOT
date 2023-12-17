
import MiniNoti from './MiniNoti'
import Weather from './Weather'
import State from './State'
import GrownPlant from './Grownplant'
import Start from './Start'
import Notification from '../Notification'
import '../../scss/homepage.scss'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { memo, useEffect, useState } from 'react'
import '../../scss/homepage.scss'
import { adafruitAxios } from '../../api'
import adafruitService from '../../service/adafruitService'

const HomePage = () => {


    const [noti_led, setNotiled] = useState<String>()
    const [noti_pump, setNotipump] = useState<String>()
    const [temperature, setTemperature] = useState<String>()
    const [lightIntensity, setLightIntensity] = useState<String>()
    const [landMoisture, setLandMoisture] = useState<String>()
    const [humidity, sethumidity] = useState<String>()
    const [start, setStart] = useState<String>()

    useEffect(() => {

        adafruitService.noti_led(setNotiled)
        adafruitService.noti_pump(setNotipump)
        adafruitService.temperature(setTemperature)
        adafruitService.lightIntensity(setLightIntensity)
        adafruitService.landMoisture(setLandMoisture)
        adafruitService.humidity(sethumidity)
        adafruitService.start_state(setStart)

    }, [temperature, lightIntensity, landMoisture, humidity,start])

  




    return (
        <div className="container">
            {/* <div className='home-left' >
                
             
            </div> */}
            {/* <div className='home-right'>
               
                <GrownPlant />
                <Notification/>

            </div> */}
            <Weather />
               
            <MiniNoti />
        </div>
    )
}
export default HomePage