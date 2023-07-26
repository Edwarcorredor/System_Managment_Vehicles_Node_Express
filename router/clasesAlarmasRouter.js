import { Router } from 'express'
import { middleClasesAlarmas } from '../middleware/middleClasesAlarmas.js'

const clasesAlarmasRouter = Router();

clasesAlarmasRouter.get('/', middleClasesAlarmas, async(req,res)=>{
  res.send(await req.body.allTabla);
})


clasesAlarmasRouter.post('/', (req,res)=>{
  req.body.guardar = JSON.parse(req.data);
  res.json({status: 201, message: "Datos guardados"});
});

export default clasesAlarmasRouter;