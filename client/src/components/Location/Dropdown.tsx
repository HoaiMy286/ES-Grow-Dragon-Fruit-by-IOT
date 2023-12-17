import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'
import Dialog from './Dialog'
import { selectLocation } from '../../features/Location/locationSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import locationService from '../../service/locationService'

const Dropdown = () => {
    const selectLoc = useAppSelector(selectLocation)
    const loc = selectLoc.location[0]
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const [openDialog, setOpenDialog] = React.useState(false)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleDelete = () => {
        setAnchorEl(null)
        locationService.removeLocation(loc?._id, dispatch)
    }
    const handleOpenDialog = () => {
        setOpenDialog(true)
    }

    return (
        <div style={{ float: 'right' }}>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <ArrowDropDownIcon style={{ fontSize: '30px' }} />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleOpenDialog}>
                    <EditIcon />
                    <span style={{ marginLeft: '8px' }}>Edit</span>
                </MenuItem>
                <MenuItem onClick={handleDelete}>
                    <DeleteIcon />
                    <span style={{ marginLeft: '8px' }}>Delete</span>
                </MenuItem>
            </Menu>
            <Dialog
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                action="update"
            />
        </div>
    )
}

export default Dropdown
