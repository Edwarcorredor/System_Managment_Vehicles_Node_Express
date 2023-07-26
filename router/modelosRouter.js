import { Router } from 'express'
import { middleModelos } from '../middleware/middleModelos.js'

const modelosRouter = Router();

modelosRouter.get('/', middleModelos, async(req,res)=>{
  res.send(await req.body.allTabla);
})

modelosRouter.post('/', middleModelos, (req,res)=>{
  req.body.guardar = JSON.parse(req.data);
  res.json({status: 201, message: "Datos guardados"});
});

modelosRouter.put('/:id', middleModelos, (req,res)=>{
  req.body.actualizar(req.params.id, JSON.parse(req.data));
  res.json({status: 202, message: "Datos actualizados"});
});

modelosRouter.delete('/:id', middleModelos, (req,res)=>{
  req.body.eliminar(req.params.id);
  res.json({status: 202, message: "Datos eliminados"});
});


export default modelosRouter;