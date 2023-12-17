import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api/'
const BASE_ADAFRUIT_URL = 'https://io.adafruit.com/api/v2/MTPQ/feeds/'
const AIO_KEY = ''

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

export const adafruitAxios = axios.create({
    baseURL: BASE_ADAFRUIT_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-AIO-Key': AIO_KEY,
    },
})
