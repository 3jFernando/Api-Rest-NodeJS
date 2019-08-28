import express, { Application } from 'express';

import routesEmployees from './routes/employeeRoute';
import routesClients from './routes/clientRoute';
import db from './database';

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
        this.app.use("/api", routesEmployees);
        this.app.use("/api", routesClients);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log("running serve s" + this.app.get('port'))
        });
    }

}

const server = new Server();
server.start();