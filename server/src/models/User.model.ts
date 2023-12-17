import { Schema, model } from 'mongoose'

export interface IUser {
    fullname: string,
    password: string,
    email: string
}

const userSchema = new Schema<IUser>(
    {
        fullname: {
            type: String,
            required: [true, 'fullname is required!'],
        },
        password: {
            type: String,
            required: [true, 'password is required!'],
        },
        email: {
            type: String,
            required: [true, 'email is required!'],
            unique: true,
        },
    },
    {
        timestamps: true
    }
)

const User = model<IUser>('User', userSchema)
export default User
