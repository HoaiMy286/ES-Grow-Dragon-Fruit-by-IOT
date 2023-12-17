
import { Router } from 'express';
import { celebrate } from 'celebrate'
import authDto from '../models/DTO/auth.dto'
import AuthController from '../controllers/auth.controller'

const router = Router();

router.post(
    '/signin',
    [celebrate(authDto.signInDTO)],
    AuthController.signin,
)

router.post(
    '/signup',
    [celebrate(authDto.signUpDTO)],
    AuthController.signup,
)

export default router;
