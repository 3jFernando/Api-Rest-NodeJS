import { Router } from 'express';
import EmployeeController from '../controllers/employeeController';

class EmployeeAPI {

    public router: Router = Router();

    constructor() {
        this.configRoutes();
    }

    configRoutes(): void {
        this.router.get("/employee", EmployeeController.index);
        this.router.post("/employee", EmployeeController.store);
        this.router.get("/employee/:id", EmployeeController.show);
        this.router.delete("/employee/:id", EmployeeController.destroy);
        this.router.post("/employee/login", EmployeeController.login);
    }

}

const employeeRoute = new EmployeeAPI();
export default employeeRoute.router;