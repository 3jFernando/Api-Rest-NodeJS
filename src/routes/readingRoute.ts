import { Router } from 'express';
import readingController from '../controllers/readingController';

class ReadingRoute {

    public router: Router = Router();

    constructor() {
        this.routes();
    }

    routes(): void{
        this.router.get("/reading/:id", readingController.show);
        this.router.get("/reading/team/id", readingController.showByTeam);
        this.router.post("/reading/", readingController.store);
    }

}

const readingRoute = new ReadingRoute();
export default readingRoute.router;