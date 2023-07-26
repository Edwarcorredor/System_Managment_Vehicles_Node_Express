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

registrosMantenimientosRouter.put('/:id', middleRegistrosMantenimientos, (req,res)=>{
  req.body.actualizar(req.params.id, JSON.parse(req.data));
  res.json({status: 202, message: "Datos actualizados"});
});

registrosMantenimientosRouter.delete('/:id', middleRegistrosMantenimientos, (req,res)=>{
  req.body.eliminar(req.params.id);
  res.json({status: 202, message: "Datos eliminados"});
});

export default registrosMantenimientosRouter;