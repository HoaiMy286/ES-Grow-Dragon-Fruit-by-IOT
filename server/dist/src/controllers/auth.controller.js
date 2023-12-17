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
const http_status_codes_1 = require("http-status-codes");
const User_model_1 = __importDefault(require("../models/User.model"));
class AuthController {
    constructor() {
        // [POST] api/auth/signin
        this.signin = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_model_1.default.findOne({
                    email: req.body.email
                }).exec();
                if (!user) {
                    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send({ message: 'Email not found!' });
                    return;
                }
                if (user.password !== req.body.password) {
                    res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: 'Incorrect password!' });
                    return;
                }
                res.status(http_status_codes_1.StatusCodes.OK).send({
                    fullname: user.fullname,
                    email: user.email,
                });
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send(error);
            }
        });
        // [POST] api/auth/signup
        this.signup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_model_1.default.create(Object.assign({}, req.body));
                res.status(http_status_codes_1.StatusCodes.OK).send(user);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send(error);
            }
        });
    }
}
exports.default = new AuthController;
