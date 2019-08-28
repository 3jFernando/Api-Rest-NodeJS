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
        Employee_1.default.find((error, employees) => {
            if (error)
                res.status(500).send("Error al cargar los empleados ");
            res.status(200).send(employees);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = req.params.id;
            yield Employee_1.default.find({ "_id": _id }, (error, employee) => {
                if (error)
                    res.status(500).send("Error al guardar " + error.message);
                res.status(200).send(employee);
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
                    res.status(500).send(err.message);
                res.status(200).send("empleado guardado");
            });
        });
    }
    destroy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            Employee_1.default.deleteOne({ "_id": id }, (err) => {
                if (err)
                    res.status(500).send("error al tratar de eliminar el empleado");
                res.status(200).send("eliminado");
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
                    res.status(500).send("Error");
                res.status(200).send(employee);
            });
        });
    }
}
const employeeController = new EmployeeController();
exports.default = employeeController;
