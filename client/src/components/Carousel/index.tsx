import { Paper } from '@mui/material'
import MuiCar from 'react-material-ui-carousel'
import { images } from '../../constants'
import RemoveIcon from '@mui/icons-material/Remove'

const Carousel = () => {
    const items = [
        {
            src: images.login
        },
        {
            src: images.login
        },
        {
            src: images.login
        }
    ]
    return (
        <MuiCar
            height='100vh'
            navButtonsAlwaysInvisible
            indicators
            animation='slide'
            IndicatorIcon={<RemoveIcon />}
            indicatorContainerProps={{
                style: {
                    position: 'absolute',
                    zIndex: '10000',
                    marginTop: '-50px',
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    color: '#ddd'
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: '#fff'
                }
            }}
        >
            {
                items.map((item, i) => (
                    <Paper
                        key={`login-carousel-${i}`}
                        style={{
                            background: `center / cover no-repeat url("${item.src}")`,
                            height: '100%',
                            width: '100%'
                        }}
                    />
                ))
            }
        </MuiCar>
    )
}

export default Carousel