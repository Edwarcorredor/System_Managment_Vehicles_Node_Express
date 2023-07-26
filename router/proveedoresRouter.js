import { Router } from 'express'
import { middleProveedores } from '../middleware/middleProveedores.js'

const proveedoreesRouter = Router();

proveedoreesRouter.get('/', middleProveedores, async(req,res)=>{
    res.send(await req.body.allTabla);
})

proveedoreesRouter.post('/', middleProveedores, (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
  });

proveedoreesRouter.put('/:id', middleProveedores, (req,res)=>{
  req.body.actualizar(req.params.id, JSON.parse(req.data));
  res.json({status: 202, message: "Datos actualizados"});
});
export default proveedoreesRouter;