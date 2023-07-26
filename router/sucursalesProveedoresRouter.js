import { Router } from 'express'
import { middleSucursalesProveedores } from '../middleware/middleSucursalesProveedores.js'

const sucursalesProveedoresRouter = Router();

sucursalesProveedoresRouter.get('/', middleSucursalesProveedores, async(req,res)=>{
    res.send(await req.body.allTabla);
})

sucursalesProveedoresRouter.post('/', middleSucursalesProveedores, (req,res)=>{
    req.body.guardar = JSON.parse(req.data);
    res.json({status: 201, message: "Datos guardados"});
});

sucursalesProveedoresRouter.put('/:id', middleSucursalesProveedores, (req,res)=>{
    req.body.actualizar(req.params.id, JSON.parse(req.data));
    res.json({status: 202, message: "Datos actualizados"});
  });

export default sucursalesProveedoresRouter;