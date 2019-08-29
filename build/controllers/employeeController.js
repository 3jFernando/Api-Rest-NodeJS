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
                res.status(500).send({ message: "Error" + err });
            res.status(200).send({
                message: "Exitoso",
                employees: employees
            });
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = req.params.id;
            yield Employee_1.default.find({ "_id": _id }, (err, employee) => {
                if (err)
                    res.status(500).send({ message: "Error" + err });
                res.status(200).send({
                    message: "Exitoso",
                    employee: employee
                });
            });
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //DATOS DEL EMPLEADO
            const data = {
                name: req.body.name,
                phone: req.body.phone,
                username: req.body.username,
                password: req.body.password,
                address: {
                    lat: req.body.lat,
                    lng: req.body.lng,
                }
            };
            Employee_1.default.create(data, (err) => {
                if (err)
                    res.status(500).send({ message: "Error" + err });
                res.status(200).send({
                    message: "Exitoso"
                });
            });
        });
    }
    destroy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            Employee_1.default.deleteOne({ "_id": id }, (err) => {
                if (err)
                    res.status(500).send({ message: "Error" + err });
                res.status(200).send({
                    message: "Exitoso"
                });
            });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const username = req.body.username;
            const password = req.body.password;
            yield Employee_1.default.find({
                'username': username,
                'password': password
            }, (err, employee) => {
                if (err)
                    res.status(500).send({ message: "Error" + err });
                res.status(200).send({
                    message: "Exitoso",
                    employee: employee
                });
            });
        });
    }
}
const employeeController = new EmployeeController();
exports.default = employeeController;
