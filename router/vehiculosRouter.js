import { Router } from 'express'
import { middleVehiculos } from '../middleware/middleVehiculos.js'

const vehiculosRouter = Router();

vehiculosRouter.get('/', middleVehiculos, async(req,res)=>{
    res.send(await req.body.allTabla);
})

vehiculosRouter.post('/', middleVehiculos, (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
  });


vehiculosRouter.put('/:id', middleVehiculos, (req,res)=>{
  req.body.actualizar(req.params.id, JSON.parse(req.data));
  res.json({status: 202, message: "Datos actualizados"});
});

vehiculosRouter.delete('/:id', middleVehiculos, (req,res)=>{
  req.body.eliminar(req.params.id);
  res.json({status: 202, message: "Datos eliminados"});
});

export default vehiculosRouter;