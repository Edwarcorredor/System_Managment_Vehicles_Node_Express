import { Router } from 'express'
import { middleClasesAlarmas } from '../middleware/middleClasesAlarmas.js'

const clasesAlarmasRouter = Router();

clasesAlarmasRouter.get('/', middleClasesAlarmas, (req, res) => {
    res.send(req.body.guardar);

})


clasesAlarmasRouter.post('/', (req, res) => {
    const { NAME, DESCRIPTION, MANTENIMIENTO_ID } = req.body;
    req.conexion.query(
        /*sql*/`INSERT INTO clase_alarma (nombre, descripcion, id_mantenimiento) VALUES (?, ?, ?)`,
        [NAME, DESCRIPTION, MANTENIMIENTO_ID],
        (error, results) => {
            if (error) {
              console.error(error);
              res.status(500).send(error);
            }
            res.status(200).send(results);
          }

    )
});

export default clasesAlarmasRouter;