import { Router } from 'express'
import conexion_db from '../conexion_db/conexion_db.js';

const registrosMantenimientosRouter = Router();

registrosMantenimientosRouter.get('/', conexion_db, (req, res) => {
    req.conexion.query(
        /**
        ** Funcion para obtener todos los valores de la tabla registro_mantenimiento 
        */
        /*sql*/`SELECT * FROM registro_mantenimiento`,
        (error, data,fils) => {
        res.send(data);
    })
})

export default registrosMantenimientosRouter;