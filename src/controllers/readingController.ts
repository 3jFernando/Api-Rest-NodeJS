import { Request, Response } from 'express';
import Reading from '../models/Reading';

class ReadingController {

    public async show(req: Request, res: Response) {

        const _id = req.body.id;

        Reading.findById(_id, (err: any, reading) => {
            if(err) res.status(500).send({ message: "Error " + err });
            res.status(200).send({
                message: "Lectura encontrada",
                reading: reading
            });
        });

    }

    public async showByTeam(req: Request, res: Response) {

        const idTeam = req.body.id;

        Reading.find({'id_team': idTeam}, (err: any, readings) => {
            if(err) res.status(500).send({ message: "Error " + err });
            res.status(200).send({
                message: "Lecturas encontradas",
                reading: readings
            });
        });

    }

    public async store(req: Request, res: Response) {

        const data = {
            id_employee: req.body.id_employee,
            id_team: req.body.id_team,
            readed: req.body.readed,
            state: req.body.state,
            date: new Date()
        };

        Reading.create(data, (err: any) => {
            if(err) res.status(500).send({ message: "Error " + err });
            res.status(200).send({
                message: "lectura guardada."
            });
        });

    }

}

const readingController = new ReadingController();
export default readingController;