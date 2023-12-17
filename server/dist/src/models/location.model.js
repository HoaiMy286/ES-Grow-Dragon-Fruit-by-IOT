"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const locationSchema = new mongoose_1.Schema({
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
});
locationSchema.pre('findOneAndUpdate', function (next) {
    this.set({ updatedAt: new Date(Date.now()) });
    next();
});
const Location = (0, mongoose_1.model)('location', locationSchema);
exports.default = Location;
