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

export default modelosRouter;