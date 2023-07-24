import { Router } from 'express'
import conexion_db from '../conexion_db/conexion_db.js';

const proveedoreesRouter = Router();

proveedoreesRouter.get('/', conexion_db, (req, res) => {
    req.conexion.query(
        /**
        ** Funcion para obtener todos los valores de la tabla proveedor 
        */
        /*sql*/`SELECT * FROM proveedor`,
        (error, data,fils) => {
        res.send(data);
    })
})

export default proveedoreesRouter;