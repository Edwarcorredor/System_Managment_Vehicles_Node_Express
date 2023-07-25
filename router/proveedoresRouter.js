import { Router } from 'express'


const proveedoreesRouter = Router();

proveedoreesRouter.get('/', (req, res) => {
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