import { Router } from 'express'
import { middleAlarmas } from '../middleware/middleAlarmas.js'

const alarmasRouter = Router();

alarmasRouter.get('/', middleAlarmas, (req, res) => {
  res.send(req.body.guardar);
});

alarmasRouter.post('/', (req, res) => {
    const { VEHICULO_ID, CLASE_ALARMA_ID} = req.body;
    req.conexion.query(
        /*sql*/`INSERT INTO alarma (id_vehiculo, id_clase_alarma) VALUES (?, ?)`,
        [VEHICULO_ID, CLASE_ALARMA_ID],
        (error, results) => {
            if (error) {
              console.error(error);
              res.status(500).send(error);
            }
            res.status(200).send(results);
          }

    )
});

export default alarmasRouter;