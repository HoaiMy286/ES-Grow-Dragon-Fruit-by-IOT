import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { images } from '../constants'

const NotFound = () => {
    return (
        <Box width='100%' height='100%'>
            <img alt='URL not found!' style={{ display: 'block', margin: 'auto', height: '100%' }} src={images.page404} />
            <Box position='absolute' bottom='0' width='100%' padding='36px 18px' bgcolor='white'>
                <Box>
                    <Link to='/' >
                        <Typography textAlign='center' variant='h6'>Return to home page</Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default NotFound