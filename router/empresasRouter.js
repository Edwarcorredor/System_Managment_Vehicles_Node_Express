import { Router } from 'express'
import { middleEmpresas } from '../middleware/middleEmpresas.js'

const empresasRouter = Router();

empresasRouter.get('/', middleEmpresas, async(req,res)=>{
  res.send(await req.body.allTabla);
})

empresasRouter.post('/', middleEmpresas, (req,res)=>{
  req.body.guardar = JSON.parse(req.data);
  res.json({status: 201, message: "Datos guardados"});
});

empresasRouter.put('/:id', middleEmpresas, (req,res)=>{
  req.body.actualizar(req.params.id, JSON.parse(req.data));
  res.json({status: 202, message: "Datos actualizados"});
});

empresasRouter.delete('/:id', middleEmpresas, (req,res)=>{
  req.body.eliminar(req.params.id);
  res.json({status: 202, message: "Datos eliminados"});
});

export default empresasRouter;