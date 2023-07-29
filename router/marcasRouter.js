import { Router } from 'express'
import { middlewareTablas } from '../middleware/middlewareTablas.js'

const marcasRouter = Router();

marcasRouter.get('/', middlewareTablas, async(req,res)=>{
  res.send(await req.body.allTabla);
})

marcasRouter.post('/', middlewareTablas, (req,res)=>{
  req.body.guardar = JSON.parse(req.data);
  res.json({status: 201, message: "Datos guardados"});
});

marcasRouter.put('/:id', middlewareTablas, (req,res)=>{
  req.body.actualizar(req.params.id, JSON.parse(req.data));
  res.json({status: 202, message: "Datos actualizados"});
});

marcasRouter.delete('/:id', middlewareTablas, (req,res)=>{
  req.body.eliminar(req.params.id);
  res.json({status: 202, message: "Datos eliminados"});
});

export default marcasRouter;