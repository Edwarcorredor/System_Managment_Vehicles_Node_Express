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

export default proveedoreesRouter;