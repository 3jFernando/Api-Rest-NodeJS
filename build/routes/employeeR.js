"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeeController_1 = __importDefault(require("../controllers/employeeController"));
class RoutesAPI {
    constructor() {
        this.router = express_1.Router();
        this.configRoutes();
    }
    configRoutes() {
        this.router.get("/", employeeController_1.default.index);
    }
}
const api = new RoutesAPI();
exports.default = api.router;
