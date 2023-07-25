import { Router } from 'express'


const sucursalesProveedoresRouter = Router();

sucursalesProveedoresRouter.get('/', (req, res) => {
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