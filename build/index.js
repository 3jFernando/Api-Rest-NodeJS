"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const employeeRoute_1 = __importDefault(require("./routes/employeeRoute"));
const clientRoute_1 = __importDefault(require("./routes/clientRoute"));
const clientRoute_2 = __importDefault(require("./routes/clientRoute"));
const teamRoute_1 = __importDefault(require("./routes/teamRoute"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        database_1.default.conection();
        this.startRoutes();
    }
    config() {
        this.app.set('port', process.env.PORT || 1200);
        this.app.use(express_1.default.json());
    }
    startRoutes() {
        this.app.use("/api", employeeRoute_1.default);
        this.app.use("/api", clientRoute_1.default);
        this.app.use("/api", teamRoute_1.default);
        this.app.use("/api", clientRoute_2.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("running serve s" + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
