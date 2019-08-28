import { Request, Response } from 'express';
import Employee from '../models/Employee';

class EmployeeController {
    
    public index(req: Request, res: Response) {
        Employee.find(̣(err, employees) => {
            if (err) res.status(500).send(err.message);
            res.status(200).send(employees);
        });
    }

    public async show(req: Request, res: Response) {
        await Employee.find({"_id": req.params.id}, ̣(err, employe) => {
            if (err) res.status(500).send(err.message);
            res.status(200).send(employe);
        });
    }

    public async store(req: Request, res: Response) {
        Employee.create({ name: "Empleado 3", phone: 123445 }, (err:any) => {
            if (err) res.status(500).send(err.message);
            res.status(200).send("empleado guardadi");
        }); 
    }

}

const employeeController = new EmployeeController();
export default employeeController;