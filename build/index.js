"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeRoute_1 = __importDefault(require("./routes/employeeRoute"));
const database_1 = __importDefault(require("./database"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        database_1.default.conection();
        this.startRoutes();
    }
    config() {
        this.app.set('port', process.env.PORT || 2300);
        this.app.use(express_1.default.json());
    }
    startRoutes() {
        this.app.use("/api", employeeRoute_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("running serves " + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
