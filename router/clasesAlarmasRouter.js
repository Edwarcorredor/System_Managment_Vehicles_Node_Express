import { Router } from 'express'
import { middleClasesAlarmas } from '../middleware/middleClasesAlarmas.js'

const clasesAlarmasRouter = Router();

clasesAlarmasRouter.get('/', middleClasesAlarmas, async(req,res)=>{
  res.send(await req.body.allTabla);
})


clasesAlarmasRouter.post('/',middleClasesAlarmas, (req,res)=>{
  req.body.guardar = JSON.parse(req.data);
  res.json({status: 201, message: "Datos guardados"});
});

clasesAlarmasRouter.put('/:id', middleClasesAlarmas, (req,res)=>{
  req.body.actualizar(req.params.id, JSON.parse(req.data));
  res.json({status: 202, message: "Datos actualizados"});
});

export default clasesAlarmasRouter;