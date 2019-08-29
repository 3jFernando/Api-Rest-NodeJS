import { Router } from "express";
import clientController from "../controllers/clientController";

class ClientRoute {

    public router : Router = Router();

    constructor() {
        this.routes();
    }

    routes(): void{
        this.router.get("/client", clientController.index);
    }

}

const clientRoute = new ClientRoute();
export default clientRoute.router;