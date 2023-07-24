import { Router } from 'express'
import conexion_db from '../conexion_db/conexion_db.js';

const vehiculosRouter = Router();

vehiculosRouter.get('/', conexion_db, (req, res) => {
    req.conexion.query(
        /**
        ** Funcion para obtener todos los valores de la tabla vehiculo 
        */
        /*sql*/`SELECT * FROM vehiculo`,
        (error, data,fils) => {
        res.send(data);
    })
})

export default vehiculosRouter;