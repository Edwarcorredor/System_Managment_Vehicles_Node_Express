import { Router } from 'express'
import { middleMantenimientos } from '../middleware/middleMantenimientos.js'

const mantenimientosRouter = Router();

mantenimientosRouter.get('/', middleMantenimientos, async(req,res)=>{
  res.send(await req.body.allTabla);
})

mantenimientosRouter.post('/', (req,res)=>{
  req.body.guardar = JSON.parse(req.data);
  res.json({status: 201, message: "Datos guardados"});
});



export default mantenimientosRouter;