import { Router } from 'express'
import conexion_db from '../conexion_db/conexion_db.js';

const clasesAlarmasRouter = Router();

clasesAlarmasRouter.get('/', conexion_db, (req, res) => {
    req.conexion.query(
        /**
        ** Funcion para obtener todos los valores de la tabla clase_alarma 
        */
        /*sql*/`SELECT * FROM clase_alarma`,
        (error, data,fils) => {
        res.send(data);
    })
})


clasesAlarmasRouter.post('/', conexion_db, (req, res) => {
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