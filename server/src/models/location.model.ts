import mongoose, { Schema, model, ObjectId } from 'mongoose'

export interface Ilocation {
    name: string
    device: object
    light_status: boolean
    water_pumping_status: boolean
    createAt: Date
    updateAt: Date
    // locationId:ObjectId;
}

const locationSchema = new Schema<Ilocation>({
    name: {
        type: String,
        required: [true, 'Please tell me your location name'],
    },
    device: {
        light_sensor: { type: Number, default: 0 },
        land_moisture_sensor: { type: Number, default: 0 },
        light: { type: Number, default: 0 },
        water_pumping: { type: Number, default: 0 },
    },

    light_status: { type: Boolean, default: false },
    water_pumping_status: { type: Boolean, default: false },
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
})

locationSchema.pre('findOneAndUpdate', function (next) {
    this.set({ updatedAt: new Date(Date.now()) })
    next()
})

const Location = model<Ilocation>('location', locationSchema)
export default Location
