import { Router } from 'express'
import { middleMarcas } from '../middleware/middleMarcas.js'

const marcasRouter = Router();

marcasRouter.get('/', middleMarcas, async(req,res)=>{
  res.send(await req.body.allTabla);
})

marcasRouter.post('/', (req,res)=>{
  req.body.guardar = JSON.parse(req.data);
  res.json({status: 201, message: "Datos guardados"});
});

export default marcasRouter;