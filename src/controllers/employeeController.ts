import { Request, Response } from 'express';
import Employee from '../models/Employee';

class EmployeeController {
    
    public index(req: Request, res: Response) {

        Employee.find((err:any, employees) => {
            if(err) res.status(500).send({ message: "Error" + err }); 
            res.status(200).send({
                message: "Exitoso",
                employees: employees
            }); 
        });

    }

    public async show(req: Request, res: Response) {

        const _id = req.params.id;

        await Employee.find({"_id": _id}, (err:any, employee) => {
            if(err) res.status(500).send({ message: "Error" + err }); 
            res.status(200).send({
                message: "Exitoso",
                employee: employee
            }); 
        });

    }

    public async store(req: Request, res: Response) {

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
        }

        Employee.create(data, (err:any) => {
            if(err) res.status(500).send({ message: "Error" + err }); 
            res.status(200).send({
                message: "Exitoso"
            });
        }); 

    }

    public async destroy(req: Request, res: Response) {

        const id = req.params.id;

        Employee.deleteOne({"_id":id}, (err:any) => {
            if(err) res.status(500).send({ message: "Error" + err }); 
            res.status(200).send({
                message: "Exitoso"
            });
        });

    } 

    public async login(req: Request, res: Response) {

        const username = req.body.username;
        const password = req.body.password;

        await Employee.find({
            'username': username,
            'password': password
        }, (err: any, employee) => {
            if(err) res.status(500).send({ message: "Error" + err }); 
            res.status(200).send({
                message: "Exitoso",
                employee: employee
            });
        });

    }

}

const employeeController = new EmployeeController();
export default employeeController;