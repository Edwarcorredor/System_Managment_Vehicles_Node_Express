import { Router } from 'express'
import { middleMantenimientos } from '../middleware/middleMantenimientos.js'

const mantenimientosRouter = Router();

mantenimientosRouter.get('/', middleMantenimientos, (req, res) => {
    res.send(req.body.guardar);
})

mantenimientosRouter.post('/', (req, res) => {
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