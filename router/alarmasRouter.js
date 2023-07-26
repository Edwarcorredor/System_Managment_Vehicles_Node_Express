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

alarmasRouter.put('/:id', middleAlarmas, (req,res)=>{
  req.body.actualizar(req.params.id, JSON.parse(req.data));
  res.json({status: 202, message: "Datos actualizados"});
});

alarmasRouter.delete('/:id', middleAlarmas, (req,res)=>{
  req.body.eliminar(req.params.id);
  res.json({status: 202, message: "Datos eliminados"});
});

export default alarmasRouter;