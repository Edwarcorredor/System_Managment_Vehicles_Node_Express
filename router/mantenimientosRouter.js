import { Router } from 'express'
import conexion_db from '../conexion_db/conexion_db.js';

const mantenimientosRouter = Router();

mantenimientosRouter.get('/', conexion_db, (req, res) => {
    req.conexion.query(
        /**
        ** Funcion para obtener todos los valores de la tabla mantenimiento 
        */
        /*sql*/`SELECT * FROM mantenimiento`,
        (error, data,fils) => {
        res.send(data);
    })
})

mantenimientosRouter.post('/', conexion_db, (req, res) => {
    const { SUCURSAL_ID, DESCRIPTION } = req.body;
    req.conexion.query(
        /*sql*/`INSERT INTO mantenimiento (id_sucursal_proveedor, descripcion) VALUES (?, ?)`,
        [SUCURSAL_ID, DESCRIPTION],
        (error, results) => {
            if (error) {
              console.error(error);
              res.status(500).send(error);
            }
            res.status(200).send(results);
          }

    )
});



export default mantenimientosRouter;