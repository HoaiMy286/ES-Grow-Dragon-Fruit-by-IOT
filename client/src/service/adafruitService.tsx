import axios, { adafruitAxios } from '../api'
const start = (checked: boolean, id: String) => {
    adafruitAxios
        .post('start/data', { id, value: checked ? 6 : 7 })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}
const start_state = (setStart: any) => {
    adafruitAxios
        .get('start/data')
        .then((res) => {
            if (res.data[0].value==7) res.data[0].value= true
            else res.data[0].value=false
            setStart(res.data[0].value)
            localStorage.setItem('start', res.data[0].value)
        })
        .catch((err) => {
            console.log(err)
        })
}
const water_pumping = (checked: boolean, id: String) => {
    adafruitAxios
        .post('pump1/data', { id, value: checked ? 0 : 1 })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}



const getStatusOfLed = async (setChecked: any) => {
    try {
        const res = await adafruitAxios.get('/led/data')

        if (res.data[0].value === '4') {
            setChecked(false)
        } else {
            setChecked(true)
        }
    } catch (err) {
        console.log(err)
    }
}

const getStatusOfWaterPumping = async (setChecked: any) => {
    try {
        const res = await adafruitAxios.get('/pump1/data')

        if (res.data[0].value === '0') {
            setChecked(false)
        } else {
            setChecked(true)
        }
    } catch (err) {
        console.log(err)
    }
}

const light = (checked: boolean, id: String) => {
    adafruitAxios
        .post('led/data', { value: checked ? 4 : 5 })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

    // axios
    //     .put('location/controlLight', {
    //         id,
    //         light_status: checked,
    //     })
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err))
}

const temperature = (setTemperature: any) => {
    adafruitAxios
        .get('temperature/data')
        .then((res) => {
            setTemperature(res.data[0].value)
            localStorage.setItem('temperature', res.data[0].value)
        })
        .catch((err) => {
            console.log(err)
        })
}

const lightIntensity = (setLightIntensity: any) => {
    adafruitAxios
        .get('light/data')
        .then((res) => {
            setLightIntensity(res.data[0].value)
            localStorage.setItem('lightIntensity', res.data[0].value)
        })
        .catch((err) => {
            console.log(err)
        })
}
const landMoisture = (setLandMoisture: any) => {
    adafruitAxios
        .get('soil-moisture/data')
        .then((res) => {
            setLandMoisture(res.data[0].value)
            localStorage.setItem('landMoisture', res.data[0].value)
        })
        .catch((err) => {
            console.log(err)
        })
}
const humidity = (setHumidity: any) => {
    adafruitAxios
        .get('humidity/data')
        .then((res) => {
            setHumidity(res.data[0].value)
            localStorage.setItem('humidity', res.data[0].value)
        })
        .catch((err) => {
            console.log(err)
        })
}
const noti_led = (setNotiled: any) => {
    adafruitAxios
        .get('led/data')
        .then((res) => {
            setNotiled(res.data)
            console.log(res.data)
            res.data.map((m:any)=>{
                if (m.value === '5') m.value = "The led was turned on."
                if (m.value === '4') m.value = "The led was turned off."

            })
            localStorage.setItem('notiLed', JSON.stringify(res.data))
        })
        .catch((err) => {
            console.log(err)
        })
}
const noti_pump = (setNotipump: any) => {
    adafruitAxios
        .get('pump1/data')
        .then((res) => {
            setNotipump(res.data)
            console.log(res.data)
            res.data.map((m:any)=>{
                if (m.value === '1') m.value = "Pumper water was turned on."
                if (m.value === '0') m.value = "Pumper water was turned off."

            })
            localStorage.setItem('notiPump', JSON.stringify(res.data))
        })
        .catch((err) => {
            console.log(err)
        })
}


const adafruitService = {
    water_pumping,
    light,
    temperature,
    lightIntensity,
    landMoisture,
    getStatusOfWaterPumping,
    getStatusOfLed,
    humidity,
    noti_led,
    noti_pump,
    start,
    start_state
}

export default adafruitService
