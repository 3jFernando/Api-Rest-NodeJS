import { Router } from 'express';
import teamController from '../controllers/teamController';

class TeamRouter {

    public router: Router = Router();

    constructor() {
        this.routes();
    }

    routes(): void{
        this.router.get("/team", teamController.showByClient);
        this.router.post("/team", teamController.store);
    }

}

const teamRouter = new TeamRouter();
export default teamRouter.router;