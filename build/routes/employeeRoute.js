"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeeController_1 = __importDefault(require("../controllers/employeeController"));
class EmployeeAPI {
    constructor() {
        this.router = express_1.Router();
        this.configRoutes();
    }
    configRoutes() {
        this.router.get("/employee", employeeController_1.default.index);
        this.router.post("/employee", employeeController_1.default.store);
        this.router.get("/employee/:id", employeeController_1.default.show);
        this.router.delete("/employee/:id", employeeController_1.default.destroy);
        this.router.post("/employee/login", employeeController_1.default.login);
    }
}
const employeeRoute = new EmployeeAPI();
exports.default = employeeRoute.router;
