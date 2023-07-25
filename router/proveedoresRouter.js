import { Router } from 'express'
import { middleProveedores } from '../middleware/middleProveedores.js'

const proveedoreesRouter = Router();

proveedoreesRouter.get('/', middleProveedores, (req, res) => {
    res.send(req.body.guardar);
})

export default proveedoreesRouter;