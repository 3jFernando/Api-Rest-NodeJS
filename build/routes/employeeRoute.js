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
        this.router.get("/employe", employeeController_1.default.index);
        this.router.get("/employe/store", employeeController_1.default.store);
        this.router.get("/employe/show/:id", employeeController_1.default.show);
    }
}
const api = new RoutesAPI();
exports.default = api.router;
