import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import SideBarItem from '../SideBarItem'
import style from './style.module.scss'
import { SvgIconTypeMap } from '@mui/material/SvgIcon'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import HomeIcon from '@mui/icons-material/Home'
import DashboardIcon from '@mui/icons-material/Dashboard'
import MessageIcon from '@mui/icons-material/Message'
import MapIcon from '@mui/icons-material/Map'
import SettingsIcon from '@mui/icons-material/Settings'
import { useLocation } from 'react-router-dom'

export interface navItem {
    Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string },
    label: string,
    path: string,
    isLink?: boolean,
    active?: boolean
}

const items: { [k: string]: navItem } = {
    logo: {
        label: 'iot farm',
        Icon: HomeIcon,
        path: 'logo'
    },
    dashboard: {
        label: 'home',
        Icon: DashboardIcon,
        isLink: true,
        path: ''
    },
    notifications: {
        label: 'notifications',
        Icon: MessageIcon,
        isLink: true,
        path: 'notifications'
    },
    map: {
        label: 'map',
        Icon: MapIcon,
        isLink: true,
        path: 'map'
    },
    settings: {
        label: 'settings',
        Icon: SettingsIcon,
        isLink: true,
        path: 'settings'
    },
}

const SideBar = () => {
    const location = useLocation()
    const [navItems, setItems] = useState(() => items)

    useEffect(() => {
        const pathName: string = location.pathname.split('/')[1]

        Object.keys(navItems).forEach(name => {
            if (navItems[name].path === pathName) {
                navItems[name].active = true
            } else {
                navItems[name].active = false
            }
            setItems({ ...navItems })
        })
    }, [location])

    return (
        <Box className={style.container}>
            <Box className={style.sidebar}>
                <SideBarItem {...navItems.logo} />
                <Box width='100%'>
                    <SideBarItem {...navItems.dashboard} />
                    <SideBarItem {...navItems.notifications} />
                    <SideBarItem {...navItems.map} />
                </Box>
                <Box width='100%'>
                    <SideBarItem {...navItems.settings} />
                </Box>
            </Box>
        </Box>
    )
}

export default SideBar