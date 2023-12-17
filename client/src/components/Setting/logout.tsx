import {
   
   
    CardContent,
  
} from '@mui/material'

// import style from './style.module.scss'
import { Typography, Box, Avatar, IconButton } from '@mui/material'
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logout, selectUser } from '../../features/User/userSlice'

const GrownPlant = () => {
    const user = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const handleLogout = () => {
      dispatch(logout())
    }

    return (
        <div className='logoutcenter'>
        <CardContent>
      
        <Button onClick={handleLogout} variant="contained" size="large">LOG OUT</Button>
       
        </CardContent>
   </div>
        // <div className='buttonscl'>
           /* <div className='savecenter'>
                <CardContent>
                <Typography sx={{ fontSize: 30 }} color="3E7E55">
                        <button className='save'>SAVE</button>
                </Typography>
                </CardContent>
           </div>

           <div className='cancelcenter'>
                <CardContent>
                <Typography sx={{ fontSize: 30 }} color="3E7E55">
                        <button className='cancel'>CANCEL</button>
                </Typography>
                </CardContent>
           </div> */

         

        // </div>
    )
}
export default GrownPlant