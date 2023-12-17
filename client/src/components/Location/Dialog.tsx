import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import { Stack, TextField, Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListSubheader from '@mui/material/ListSubheader'
import ListItemText from '@mui/material/ListItemText'
import locationService from '../../service/locationService'
import CustomizedSnackbars from '../../constants/Snackbar'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setStatus } from '../../features/SnackbarState/snackbarSlice'
import {
    getCurrentLocation,
    selectLocation,
} from '../../features/Location/locationSlice'
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}
const Dialog = ({ openDialog, setOpenDialog, action = 'Update' }: any) => {
    const selectLoc = useAppSelector(selectLocation)
    const loc = selectLoc.location[0]
    const [name, setName] = useState('')
    const [lightSensor, setLightSensor] = useState('')
    const [landMoistureSensor, setlandMoistureSensor] = useState('')
    const [light, setLight] = useState('')
    const [waterPumping, setWaterPumping] = useState('')
    const [displayError, setdisplayError] = useState(false)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (action !== 'Add') {
            setName(loc?.name ? loc.name : '')
            setLightSensor(
                loc?.device ? loc.device.light_sensor.toString() : '',
            )
            setlandMoistureSensor(
                loc?.device ? loc.device.land_moisture_sensor.toString() : '',
            )
            setLight(loc?.device ? loc.device.light.toString() : '')
            setWaterPumping(
                loc?.device ? loc.device.water_pumping.toString() : '',
            )
        }
    }, [selectLoc])
    const handleCloseDialog = () => {
        setOpenDialog(false)
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (name === '') {
            setdisplayError(true)
        } else {
            const device = {
                lightSensor: Number(lightSensor),
                landMoistureSensor: Number(landMoistureSensor),
                light: Number(light),
                water_pumping: Number(waterPumping),
            }
            if (action === 'Add') {
                // dispatch(getCurrentLocation([]))
                // dispatch(setStatus(true))
                locationService.addLocation(name, device, dispatch)
                setName('')
                setLightSensor('')
                setlandMoistureSensor('')
                setLight('')
                setWaterPumping('')
            } else {
                locationService.updateLocation(name, device, loc?._id, dispatch)
            }
            dispatch(setStatus(true))
            setOpenDialog(false)
        }
    }
    return (
        <Stack>
            <Modal
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 500 }}>
                    <Typography
                        align="center"
                        variant="h5"
                        component="div"
                        style={{ color: '#3E7E55', marginBottom: '1em' }}
                    >
                        New Location
                    </Typography>
                    <FormControl sx={{ width: '100%' }}>
                        <TextField
                            style={{ marginBottom: '1.5em' }}
                            id="name"
                            label="Name of location"
                            value={name}
                            required
                            error={displayError}
                            helperText={
                                displayError
                                    ? "Please input the location's name"
                                    : ''
                            }
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(event.target.value)
                            }}
                        />
                        <List
                            sx={{
                                width: '100%',
                                bgcolor: 'background.paper',
                                color: '#413E3E',
                            }}
                            subheader={
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <ListSubheader
                                        style={{
                                            color: '#3E7E55',
                                        }}
                                    >
                                        DEVICES
                                    </ListSubheader>
                                    <ListSubheader
                                        style={{
                                            color: '#3E7E55',
                                        }}
                                    >
                                        NUMBER
                                    </ListSubheader>
                                </div>
                            }
                        >
                            <ListItem>
                                <ListItemText
                                    id="light-sensor"
                                    primary="Light sensor"
                                />
                                <TextField
                                    id=""
                                    inputProps={{
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*',
                                    }}
                                    value={lightSensor}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        setLightSensor(event.target.value)
                                    }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    id="land-moisture-sensor"
                                    primary="Land moisture sensor"
                                />
                                <TextField
                                    id=""
                                    inputProps={{
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*',
                                    }}
                                    value={landMoistureSensor}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        setlandMoistureSensor(
                                            event.target.value,
                                        )
                                    }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText id="light" primary="Light" />
                                <TextField
                                    id=""
                                    inputProps={{
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*',
                                    }}
                                    value={light}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        setLight(event.target.value)
                                    }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    id="water-pumping"
                                    primary="Water pumping"
                                />
                                <TextField
                                    id=""
                                    inputProps={{
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*',
                                    }}
                                    value={waterPumping}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        setWaterPumping(event.target.value)
                                    }}
                                />
                            </ListItem>
                        </List>
                        <Button
                            variant="contained"
                            size="large"
                            style={{
                                backgroundColor: '#063E2A',
                                marginTop: '1em',
                            }}
                            onClick={handleSubmit}
                        >
                            Add new Location
                        </Button>
                    </FormControl>
                </Box>
            </Modal>
            <CustomizedSnackbars />
        </Stack>
    )
}

export default Dialog
