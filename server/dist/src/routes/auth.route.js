"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const auth_dto_1 = __importDefault(require("../models/DTO/auth.dto"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const router = (0, express_1.Router)();
router.post('/signin', [(0, celebrate_1.celebrate)(auth_dto_1.default.signInDTO)], auth_controller_1.default.signin);
router.post('/signup', [(0, celebrate_1.celebrate)(auth_dto_1.default.signUpDTO)], auth_controller_1.default.signup);
exports.default = router;
