import { Router } from 'express'
const router = Router()
import * as locationController from '../controllers/location.controller'
import * as locationMiddleware from '../middlewares/location.middleware'
router.get('/getAllLocations', locationController.getAllLocations)

router.post(
    '/createLocation',
    locationMiddleware.checkLocationIsExist,
    locationController.createLocation,
)

router.put(
    '/updateLocation',
    locationMiddleware.checkUpdatingLocation,
    locationController.updateLocation,
)

router.put('/controlWaterPumping', locationController.controlWaterPumping)
router.put('/controlLight', locationController.controlLight)

router.delete('/deleteLocation', locationController.deleteLocation)
export default router
