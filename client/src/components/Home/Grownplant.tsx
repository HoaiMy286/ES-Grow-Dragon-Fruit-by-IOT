import {
  
    Typography,
    CardContent,
  
} from '@mui/material'
import '../../scss/homepage.scss'
const GrownPlant = () => {
    return (
        <div className='grown-plant'>
<CardContent>
           <Typography sx={{ fontSize: 30 }} color="3E7E55">
            Grown Plant Activity
           </Typography>
            <div className='plant-img'>
            <img width='500px' height='200px' src="https://static.vecteezy.com/system/resources/previews/001/838/167/original/plant-growth-stages-design-illustration-free-vector.jpg" alt=""  />
            </div>
           </CardContent>
        </div>
    )
}
export default GrownPlant