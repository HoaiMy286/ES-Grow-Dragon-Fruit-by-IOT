import { Typography } from '@mui/material'

const Name = ({ name }: { name: string }) => {
    return (
        <Typography
            align="center"
            variant="h5"
            component="div"
            style={{ color: '#3E7E55', marginBottom: '10px' }}
        >
            {name}
        </Typography>
    )
}

export default Name
