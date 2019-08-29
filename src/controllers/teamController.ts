import { Request, Response } from 'express';
import Team from '../models/Team';

class TeamController {

    public async showByClient(req: Request, res: Response) {

        const idClient = req.body.id;
        
        Team.find({'id_client': idClient}, (err, teams) => {
            if(err) res.status(500).send({ message: "Error " + err }); 
            res.status(200).send({
                message: "Exitoso",
                teams: teams
            }); 
        });

    }

    public async store(req: Request, res: Response) {

        const data = {
            id_client: req.body.id_client,
            name: req.body.name,
            number: req.body.number,
            address: req.body.address
        };

        Team.create(data, (err: any) => {
            if(err) res.status(500).send({ message: "Error " + err }); 
            res.status(200).send({
                message: "Exitoso"
            });
        });

    }

}

const teamController = new TeamController();
export default teamController;