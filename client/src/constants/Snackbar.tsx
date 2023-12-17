import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
    selectStatus,
    setStatus,
} from '../features/SnackbarState/snackbarSlice'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function CustomizedSnackbars() {
    const snackbar = useAppSelector(selectStatus)
    const dispatch = useAppDispatch()

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return
        } else {
            dispatch(setStatus(false))
        }
    }

    return (
        <Snackbar
            open={snackbar.status}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={snackbar.message.statusMessage}
                sx={{ width: '100%' }}
            >
                {snackbar.message.msg}
            </Alert>
        </Snackbar>
    )
}
