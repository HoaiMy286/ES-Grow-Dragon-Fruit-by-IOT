"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLocation = exports.updateLocation = exports.controlLight = exports.controlWaterPumping = exports.createLocation = exports.getAllLocations = void 0;
const http_status_codes_1 = require("http-status-codes");
const location_model_1 = __importDefault(require("../models/location.model"));
const catchAsync_1 = require("../utils/catchAsync");
// [GET] /api/location/getAllLocations
exports.getAllLocations = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const locations = yield location_model_1.default.find({});
    res.status(http_status_codes_1.StatusCodes.OK).json({
        status: 'success',
        data: {
            locations,
        },
    });
}));
// [POST] /api/location/createLocation
exports.createLocation = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, device } = req.body;
    const location = location_model_1.default.create({ name, device });
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        status: 'success',
        data: {
            location,
        },
    });
}));
// [PUT] /api/location/controlWaterPumping
exports.controlWaterPumping = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const control = yield location_model_1.default.findOneAndUpdate({ _id: req.body.id }, { water_pumping_status: req.body.water_pumping_status }, {
        new: true,
        runValidators: true,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({
        status: 'success',
        data: {
            control,
        },
    });
}));
// [PUT] /api/location/controlLight
exports.controlLight = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const control = yield location_model_1.default.findOneAndUpdate({ _id: req.body.id }, { light_status: req.body.light_status }, {
        new: true,
        runValidators: true,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({
        status: 'success',
        data: {
            control,
        },
    });
}));
// [PUT] /api/location/updateLocation
exports.updateLocation = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, device, id } = req.body;
    const updateLocation = yield location_model_1.default.findOneAndUpdate({ _id: id }, { name, device }, {
        new: true,
        runValidators: true,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({
        status: 'success',
        data: {
            updateLocation,
        },
    });
}));
//[DELETE] /api/location/deleteLocation
exports.deleteLocation = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body._id;
    const deleteLocation = yield location_model_1.default.findOneAndRemove({ _id: id });
    res.status(http_status_codes_1.StatusCodes.OK).json({
        status: 'success',
        data: {
            deleteLocation,
        },
    });
}));
