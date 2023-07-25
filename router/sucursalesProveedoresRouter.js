import { Router } from 'express'
import { middleSucursalesProveedores } from '../middleware/middleSucursalesProveedores.js'

const sucursalesProveedoresRouter = Router();

sucursalesProveedoresRouter.get('/', middleSucursalesProveedores, (req, res) => {
    res.send(req.body.guardar);
})

export default sucursalesProveedoresRouter;