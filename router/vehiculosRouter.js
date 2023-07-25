import { Router } from 'express'


const vehiculosRouter = Router();

vehiculosRouter.get('/', (req, res) => {
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