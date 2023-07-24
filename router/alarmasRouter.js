import { Router } from 'express'
import conexion_db from '../conexion_db/conexion_db.js';

const alarmasRouter = Router();

alarmasRouter.get('/', conexion_db, (req, res) => {
    req.conexion.query(
        /**
        ** Funcion para obtener todos los valores de la tabla alarma 
        */
        /*sql*/`SELECT * FROM alarma`,
        (error, data,fils) => {
        res.send(data);
    })
});

alarmasRouter.post('/', conexion_db, (req, res) => {
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