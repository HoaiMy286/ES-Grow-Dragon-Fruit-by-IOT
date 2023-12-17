import { createTheme } from '@mui/material/styles'

export const Colors: any = {
    primary: '#0E7738'
}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        }
    }
})

export default theme