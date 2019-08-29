import express, { Application } from 'express';

import db from './database';

import employeesRoutes from './routes/employeeRoute';
import clientsRoutes from './routes/clientRoute';
import readingRoutes from './routes/clientRoute';
import teamRouter from './routes/teamRoute';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        db.conection();
        this.startRoutes();
    }    

    config(): void {
        this.app.set('port', process.env.PORT || 1200);
        this.app.use(express.json());
    }

    startRoutes(): void {
        this.app.use("/api", employeesRoutes);
        this.app.use("/api", clientsRoutes);
        this.app.use("/api", teamRouter);
        this.app.use("/api", readingRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log("running serve s" + this.app.get('port'))
        });
    }

}

const server = new Server();
server.start();