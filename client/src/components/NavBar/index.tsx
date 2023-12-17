import style from './style.module.scss'
import { Typography, Box, Avatar, IconButton } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LogoutIcon from '@mui/icons-material/Logout'
import moment from 'moment'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logout, selectUser } from '../../features/User/userSlice'

const NavBar = () => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Box className={style.container}>
      <Box className={style.navbar}>
        <Typography variant='h6' className={style.text}>
          {
            moment().format('LT dddd, DD MMMM YYYY')
          }
        </Typography>
        <Box display='flex' alignItems='center'>
          <Box display='flex' marginRight={5}>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
            <Typography marginRight={2} variant='h6'>{user.fullname}</Typography>
            <Avatar alt="Remy Sharp" src={user.avt} />
          </Box>

          <IconButton size='large' onClick={handleLogout}>
            <LogoutIcon fontSize='large' />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar