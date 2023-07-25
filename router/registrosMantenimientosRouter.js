import { Router } from 'express'


const registrosMantenimientosRouter = Router();

registrosMantenimientosRouter.get('/', (req, res) => {
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