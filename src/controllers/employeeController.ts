import { Request, Response } from 'express';
import Employee from '../models/Employee';

class EmployeeController {
    
    public index(req: Request, res: Response) {

        Employee.find((error:any, employees) => {
            if(error) res.status(500).send("Error al cargar los empleados "); 
            res.status(200).send(employees); 
        });

    }

    public async show(req: Request, res: Response) {

        const _id = req.params.id;

        await Employee.find({"_id": _id}, (error:any, employee) => {
            if(error) res.status(500).send("Error al guardar " + error.message);
            res.status(200).send(employee); 
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
            if (err) res.status(500).send(err.message);
            res.status(200).send("empleado guardado");
        }); 

    }

    public async destroy(req: Request, res: Response) {

        const id = req.params.id;

        Employee.deleteOne({"_id":id}, (err:any) => {
            if(err) res.status(500).send("error al tratar de eliminar el empleado");        
            res.status(200).send("eliminado");
        });

    } 

    public async login(req: Request, res: Response) {

        const username = req.body.username;
        const password = req.body.password;

        await Employee.find({
            'username': username,
            'password': password
        }, (err: any, employee) => {

            if(err) res.status(500).send("Error");

            res.status(200).send(employee);

        });

    }

}

const employeeController = new EmployeeController();
export default employeeController;