
import React, { memo, useEffect, useState } from 'react'
import ListNotifications from './ListNotifications'
import axios from '../../api'
import '../../scss/homepage.scss'
import { adafruitAxios } from '../../api'
import adafruitService from '../../service/adafruitService'
const Notification = ({notification}: any)  => {
  
 




  let noti_led=JSON.parse(localStorage.getItem("notiLed") || "[]")
  let noti_pump=JSON.parse(localStorage.getItem("notiPump") || "[]")
  

  return (

    <>


      <div className='Notification'>
        <div className='led'>
          <div className='table-name'>
            <h4>Light</h4>
          </div>
          <div className='table'>
            <ListNotifications notifications={noti_led} />
          </div>
        </div>
        <div className='led'>
          <div className='table-name'>
            <h4>Water Pumping</h4>
          </div>
          <div className='table'>
            <ListNotifications notifications={noti_pump} />
          </div>
        </div>








      </div>
    </>
  )
}

export default memo(Notification)