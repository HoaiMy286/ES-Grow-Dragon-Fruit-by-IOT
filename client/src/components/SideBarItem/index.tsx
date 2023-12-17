import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import clsx from 'clsx'
import style from './style.module.scss'
import { navItem } from '../SideBar'
import { Link } from 'react-router-dom'
import { memo } from 'react'

const SideBarItem = ({ Icon, label, path, isLink = false, active = false }: navItem) => {
    const content = () => (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            color='white'
            className={clsx('nav', isLink ? style.button : style.logo, active && style.active)}
        >
            <Icon fontSize='large' sx={{ marginBottom: 1.75, fontSize: 50 }} />
            <Typography marginTop={0.5} fontSize={18} textTransform='capitalize'>{label}</Typography>
        </Box>
    )

    return (
        isLink ?
            <Link to={`/${path}`}>
                {content()}
            </Link>
            : content()
    )
}

export default memo(SideBarItem)