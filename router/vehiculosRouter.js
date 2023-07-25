import { Router } from 'express'
import { middleVehiculos } from '../middleware/middleVehiculos.js'

const vehiculosRouter = Router();

vehiculosRouter.get('/', middleVehiculos, (req, res) => {
    res.send(req.body.guardar);
})

export default vehiculosRouter;