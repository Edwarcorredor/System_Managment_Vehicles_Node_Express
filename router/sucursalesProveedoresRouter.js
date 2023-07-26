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

export default sucursalesProveedoresRouter;