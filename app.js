import express from 'express';
import dotenv from 'dotenv';
import empresasRouter from './router/empresasRouter.js';
import alarmasRouter from "./router/alarmasRouter.js";
import clasesAlarmasRouter from "./router/clasesAlarmasRouter.js";
import mantenimientosRouter from "./router/mantenimientosRouter.js";
import marcasRouter from "./router/marcasRouter.js";
import modelosRouter from "./router/modelosRouter.js";
import proveedoreesRouter from "./router/proveedoresRouter.js";
import registrosMantenimientosRouter from "./router/registrosMantenimientosRouter.js";
import sucursalesProveedoresRouter from "./router/sucursalesProveedoresRouter.js";
import vehiculosRouter from "./router/vehiculosRouter.js";




dotenv.config();
const app = express();
app.use(express.json());


app.use('/empresas', empresasRouter);
app.use('/marcas', marcasRouter);                       
app.use('/modelos', modelosRouter);
app.use('/proveedorees', proveedoreesRouter);
app.use('/surcursales_proveedores', sucursalesProveedoresRouter);
app.use('/mantenimientos', mantenimientosRouter);
app.use('/vehiculos', vehiculosRouter);
app.use('/clases_alarmas', clasesAlarmasRouter);
app.use('/alarmas', alarmasRouter);
app.use('/registros_mantenimientos', registrosMantenimientosRouter);



let config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, () => {
    console.log(`Server is running on http:${config.hostname}:${config.port}`);
});