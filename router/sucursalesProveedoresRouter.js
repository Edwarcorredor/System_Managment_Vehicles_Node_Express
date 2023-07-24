import { Router } from 'express'
import conexion_db from '../conexion_db/conexion_db.js';

const sucursalesProveedoresRouter = Router();

sucursalesProveedoresRouter.get('/', conexion_db, (req, res) => {
    req.conexion.query(
        /**
        ** Funcion para obtener todos los valores de la tabla sucursal_proveedor 
        */
        /*sql*/`SELECT * FROM sucursal_proveedor`,
        (error, data,fils) => {
        res.send(data);
    })
})

export default sucursalesProveedoresRouter;