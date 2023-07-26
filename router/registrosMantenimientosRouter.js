import { Router } from 'express'
import { middleRegistrosMantenimientos } from '../middleware/middleRegistrosMantenimientos.js'

const registrosMantenimientosRouter = Router();

registrosMantenimientosRouter.get('/', middleRegistrosMantenimientos, async(req,res)=>{
    res.send(await req.body.allTabla);
})

registrosMantenimientosRouter.post('/', middleRegistrosMantenimientos, (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
  });
export default registrosMantenimientosRouter;