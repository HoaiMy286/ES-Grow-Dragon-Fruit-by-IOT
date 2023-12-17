import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import User, { IUser } from '../models/User.model'
import { AppError } from '../utils/appError'
import { catchAsync } from '../utils/catchAsync'

class AuthController {

    // [POST] api/auth/signin
    signin = async (req: Request, res: Response) => {
        try {
            const user = await User.findOne({
                email: req.body.email
            }).exec()

            if (!user) {
                res.status(StatusCodes.NOT_FOUND).send({ message: 'Email not found!' })
                return
            }
            if (user.password !== req.body.password) {
                res.status(StatusCodes.BAD_REQUEST).send({ message: 'Incorrect password!' })
                return
            }

            res.status(StatusCodes.OK).send({
                fullname: user.fullname,
                email: user.email,
            })
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
        }
    }


    // [POST] api/auth/signup
    signup = async (req: Request, res: Response) => {
        try {
            const user = await User.create({
                ...req.body
            })

            res.status(StatusCodes.OK).send(user)
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
        }
    }
}

export default new AuthController