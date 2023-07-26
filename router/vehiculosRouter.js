import { Router } from 'express'
import { middleVehiculos } from '../middleware/middleVehiculos.js'

const vehiculosRouter = Router();

vehiculosRouter.get('/', middleVehiculos, async(req,res)=>{
    res.send(await req.body.allTabla);
})

vehiculosRouter.post('/', (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
  });

export default vehiculosRouter;