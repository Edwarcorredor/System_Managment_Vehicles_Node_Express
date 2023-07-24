import { Router } from 'express'
import conexion_db from '../conexion_db/conexion_db.js';

const empresasRouter = Router();

empresasRouter.get('/', conexion_db, (req, res) => {
    req.conexion.query(
        /**
        ** Funcion para obtener todos los valores de la tabla empresa 
        */
        /*sql*/`SELECT * FROM empresa`,
        (error, data,fils) => {
        res.send(data);
    })
})

empresasRouter.post('/', conexion_db, (req, res) => {
    const { NAME, ADDRESS, PHONE, EMAIL, SITE_WEB } = req.body;
    req.conexion.query(
        /*sql*/`INSERT INTO empresa (nombre, direccion, telefono, email, sitio_web) VALUES (?, ?, ?, ?, ?)`,
        [NAME, ADDRESS, PHONE, EMAIL, SITE_WEB],
        (error, results) => {
            if (error) {
              console.error(error);
              res.status(500).send(error);
            }
            res.status(200).send(results);
          }

    )
});

export default empresasRouter;