import { Router } from 'express'
import { middleEmpresas } from '../middleware/middleEmpresas.js'

const empresasRouter = Router();

empresasRouter.get('/', middleEmpresas, async(req,res)=>{
  res.send(await req.body.allTabla);
})

empresasRouter.post('/', (req,res)=>{
  req.body.guardar = JSON.parse(req.data);
  res.json({status: 201, message: "Datos guardados"});
});

export default empresasRouter;