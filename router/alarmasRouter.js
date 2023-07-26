import { Router } from 'express'
import { middleAlarmas } from '../middleware/middleAlarmas.js'

const alarmasRouter = Router();

alarmasRouter.get('/', middleAlarmas, async(req,res)=>{
  res.send(await req.body.allTabla);
});

alarmasRouter.post('/', middleAlarmas, (req,res)=>{
  req.body.guardar = JSON.parse(req.data);
  res.json({status: 201, message: "Datos guardados"});
});

export default alarmasRouter;