import { Router } from 'express'
import { middleMantenimientos } from '../middleware/middleMantenimientos.js'

const mantenimientosRouter = Router();

mantenimientosRouter.get('/', middleMantenimientos, async(req,res)=>{
  res.send(await req.body.allTabla);
})

mantenimientosRouter.post('/', middleMantenimientos, (req,res)=>{
  req.body.guardar = JSON.parse(req.data);
  res.json({status: 201, message: "Datos guardados"});
});

mantenimientosRouter.put('/:id', middleMantenimientos, (req,res)=>{
  req.body.actualizar(req.params.id, JSON.parse(req.data));
  res.json({status: 202, message: "Datos actualizados"});
});

mantenimientosRouter.delete('/:id', mantenimientosRouter, (req,res)=>{
  req.body.eliminar(req.params.id);
  res.json({status: 202, message: "Datos eliminados"});
});


export default mantenimientosRouter;