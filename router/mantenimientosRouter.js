import { Router } from 'express'
import { middlewareTablas } from '../middleware/middlewareTablas.js'

const mantenimientosRouter = Router();

mantenimientosRouter.get('/', middlewareTablas, async(req,res)=>{
  res.send(await req.body.allTabla);
})

mantenimientosRouter.post('/', middlewareTablas, (req,res)=>{
  req.body.guardar = JSON.parse(req.data);
  res.json({status: 201, message: "Datos guardados"});
});

mantenimientosRouter.put('/:id', middlewareTablas, (req,res)=>{
  req.body.actualizar(req.params.id, JSON.parse(req.data));
  res.json({status: 202, message: "Datos actualizados"});
});

mantenimientosRouter.delete('/:id', middlewareTablas, (req,res)=>{
  req.body.eliminar(req.params.id);
  res.json({status: 202, message: "Datos eliminados"});
});


export default mantenimientosRouter;