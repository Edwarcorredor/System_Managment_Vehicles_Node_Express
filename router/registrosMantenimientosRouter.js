import { Router } from 'express'
import { middleRegistrosMantenimientos } from '../middleware/middleRegistrosMantenimientos.js'

const registrosMantenimientosRouter = Router();

registrosMantenimientosRouter.get('/', middleRegistrosMantenimientos, (req, res) => {
    res.send(req.body.guardar);
})

export default registrosMantenimientosRouter;