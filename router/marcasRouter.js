import { Router } from 'express'
import { middleMarcas } from '../middleware/middleMarcas.js'

const marcasRouter = Router();

marcasRouter.get('/', middleMarcas, async(req,res)=>{
  res.send(await req.body.allTabla);
})

marcasRouter.post('/', middleMarcas, (req,res)=>{
  req.body.guardar = JSON.parse(req.data);
  res.json({status: 201, message: "Datos guardados"});
});

marcasRouter.put('/:id', middleMarcas, (req,res)=>{
  req.body.actualizar(req.params.id, JSON.parse(req.data));
  res.json({status: 202, message: "Datos actualizados"});
});

marcasRouter.delete('/:id', middleMarcas, (req,res)=>{
  req.body.eliminar(req.params.id);
  res.json({status: 202, message: "Datos eliminados"});
});

export default marcasRouter;