import express, { Application } from 'express';

import routes from './routes/employeeRoute';
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
        this.app.set('port', process.env.PORT || 2300);
        this.app.use(express.json());
    }

    startRoutes(): void {
        this.app.use("/api", routes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log("running serves " + this.app.get('port'))
        });
    }

}

const server = new Server();
server.start();