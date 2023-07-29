import { Router } from 'express'
import { middlewareTablas } from '../middleware/middlewareTablas.js'

const sucursalesProveedoresRouter = Router();

sucursalesProveedoresRouter.get('/', middlewareTablas, async(req,res)=>{
    res.send(await req.body.allTabla);
})

sucursalesProveedoresRouter.post('/', middlewareTablas, (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
});

sucursalesProveedoresRouter.put('/:id', middlewareTablas, (req,res)=>{
    req.body.actualizar(req.params.id, JSON.parse(req.data));
    res.json({status: 202, message: "Datos actualizados"});
});

sucursalesProveedoresRouter.delete('/:id', middlewareTablas, (req,res)=>{
    req.body.eliminar(req.params.id);
    res.json({status: 202, message: "Datos eliminados"});
});


  

export default sucursalesProveedoresRouter;