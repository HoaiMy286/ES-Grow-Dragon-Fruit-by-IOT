import React from 'react'
import Button from '@mui/material/Button'
import Dialog from './Dialog'

const AddLocation = () => {
    const [openDialog, setOpenDialog] = React.useState(false)
    const handleOpen = () => {
        setOpenDialog(true)
    }
    return (
        <>
            <Button
                variant="contained"
                color="success"
                size="large"
                style={{ float: 'right' }}
                onClick={handleOpen}
            >
                + Add Location
            </Button>
            <Dialog
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                action={'Add'}
            />
        </>
    )
}

export default AddLocation
