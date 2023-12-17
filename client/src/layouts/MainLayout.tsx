import Box from '@mui/material/Box'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
import style from './main-layout.module.scss'

const MainLayout = () => {
  return (
    <Box className={style.wrapper}>
      <SideBar />
      <NavBar />
      <Box className={style.container}>
        <Box className={style.main}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default MainLayout