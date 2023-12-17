import {

  Typography,


} from '@mui/material'
import {
  Card,
  CardActionArea,
  CardContent,
  IconButton,

} from '@mui/material'
import {
  getCurrentLocation,
  selectLocation,
} from '../../features/Location/locationSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import '../../scss/homepage.scss'
import React, { memo, useEffect, useState } from 'react'
import axios from '../../api'
import '../../scss/homepage.scss'
import { adafruitAxios } from '../../api'
import adafruitService from '../../service/adafruitService'
import { styled } from '@mui/material/styles';
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const Start = () => {

  const selectLoc = useAppSelector(selectLocation)
  const dispatch = useAppDispatch()
  const loc = selectLoc.location[0]
  // const status =
  //     Name === 'Water Pumping' ? loc?.water_pumping_status : loc?.light_status
  const [checked, setChecked] = useState<boolean>(JSON.parse(localStorage.getItem('start') || "[]"))
  const handleAction = (e: any) => {
    e.preventDefault()
    setChecked(e.target.checked)

    adafruitService.start(checked, loc?._id)

  }

  return (
    <div className='Start'>


      <CardContent>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked={JSON.parse(localStorage.getItem('start') || "[]")} />}
          label=" Start Harvest"
          onChange={handleAction}
          checked={checked}
        />
      </CardContent>


    </div>
  )
}
export default Start