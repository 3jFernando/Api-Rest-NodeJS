import { Router, Request, Response } from 'express';
import EmployeeController from '../controllers/employeeController';

class RoutesAPI {

    public router: Router = Router();

    constructor() {
        this.configRoutes();
    }

    configRoutes(): void {
        this.router.get("/employe", EmployeeController.index);
        this.router.get("/employe/store", EmployeeController.store);
        this.router.get("/employe/show/:id", EmployeeController.show);
    }

}

const api = new RoutesAPI();
export default api.router;