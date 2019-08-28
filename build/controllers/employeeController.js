"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("../models/Employee"));
class EmployeeController {
    index(req, res) {
        Employee_1.default.find((err, employees) => {
            if (err)
                res.status(500).send(err.message);
            res.status(200).send(employees);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Employee_1.default.find({ "_id": req.params.id }, (err, employe) => {
                if (err)
                    res.status(500).send(err.message);
                res.status(200).send(employe);
            });
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            Employee_1.default.create({ name: "Empleado 3", phone: 123445 }, (err) => {
                if (err)
                    res.status(500).send(err.message);
                res.status(200).send("empleado guardadi");
            });
        });
    }
}
const employeeController = new EmployeeController();
exports.default = employeeController;
