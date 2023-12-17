import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import MiniControl from '../Home/MiniControl'
// import LightbulbIcon from '@mui/icons-material/Lightbulb'
// import SanitizerIcon from '@mui/icons-material/Sanitizer'

const MiniLocation = () => {
    return (
        <div className="settings">
            <div className='name'>
            <Typography sx={{ fontSize: 35 }} color="3E7E55">
          User Information
        </Typography>
            </div>

            <CardContent  style={{marginLeft: '40px', marginTop: '5px'}}>
                <Typography sx={{ fontSize: 25 }} color="3E7E55">
                <label>Username</label>
                <br/>
                <input className='form-text' type='text' name='username' placeholder='Từ Hoàng Phiếm'/>
                </Typography>       
            </CardContent>

            <CardContent  style={{marginLeft: '40px', marginTop: '5px'}}>
                <Typography sx={{ fontSize: 25 }} color="3E7E55">
                <label>Email</label>
                <br/>
                <input className='form-text' type='text' name='username' placeholder='phiemcute@gmail.com'/>
                </Typography>       
            </CardContent>

            {/* <CardContent>
                <h1>Change password</h1>
            </CardContent>

            <CardContent  style={{marginLeft: '40px', marginTop: '5px'}}>
                <Typography sx={{ fontSize: 25 }} color="3E7E55">
                <label>Current password</label>
                <br/>
                <input className='form-text' type='text' name='username' placeholder='••••••'/>
                </Typography>       
            </CardContent>

            <CardContent  style={{marginLeft: '40px', marginTop: '5px'}}>
                <Typography sx={{ fontSize: 25 }} color="3E7E55">
                <label>New password</label>
                <br/>
                <input className='form-text' type='text' name='username' placeholder='••••••'/>
                </Typography>       
            </CardContent>

            <CardContent  style={{marginLeft: '40px', marginTop: '5px'}}>
                <Typography sx={{ fontSize: 25 }} color="3E7E55">
                <label>Confirm Password</label>
                <br/>
                <input className='form-text' type='text' name='username' placeholder='••••••'/>
                </Typography>       
            </CardContent> */}
        </div>
    )
}
export default MiniLocation