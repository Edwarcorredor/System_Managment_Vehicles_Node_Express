import { Router } from 'express'
import conexion_db from '../conexion_db/conexion_db.js';

const marcasRouter = Router();

marcasRouter.get('/', conexion_db, (req, res) => {
    req.conexion.query(
        /**
        ** Funcion para obtener todos los valores de la tabla marca 
        */
        /*sql*/`SELECT * FROM marca`,
        (error, data,fils) => {
        res.send(data);
    })
})

marcasRouter.post('/', conexion_db, (req, res) => {
    const { NAME, ORIGEN_PAIS, WEB_SITE } = req.body;
    req.conexion.query(
        /*sql*/`INSERT INTO marca (nombre, pais_origen, sitio_web) VALUES (?, ?, ?)`,
        [NAME, ORIGEN_PAIS, WEB_SITE],
        (error, results) => {
            if (error) {
              console.error(error);
              res.status(500).send(error);
            }
            res.status(200).send(results);
          }

    )
});

export default marcasRouter;