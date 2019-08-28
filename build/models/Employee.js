"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const employee = new mongoose_1.default.Schema({
    name: String,
    phone: Number,
    username: String,
    password: String,
    address: {
        lat: String,
        lng: String
    },
});
const Employee = mongoose_1.default.model("Employee", employee);
exports.default = Employee;
