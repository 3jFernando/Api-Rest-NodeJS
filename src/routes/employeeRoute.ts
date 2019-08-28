import { Router } from 'express';
import EmployeeController from '../controllers/employeeController';

class RoutesAPI {

    public router: Router = Router();

    constructor() {
        this.configRoutes();
    }

    configRoutes(): void {
        this.router.get("/employee", EmployeeController.index);
        this.router.post("/employee", EmployeeController.store);
        this.router.get("/employee/:id", EmployeeController.show);
        this.router.delete("/employee/:id", EmployeeController.destroy);
    }

}

const api = new RoutesAPI();
export default api.router;