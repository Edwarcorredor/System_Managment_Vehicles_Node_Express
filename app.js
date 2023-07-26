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
import appJWT from './router/JWT.js';
import {validateJWT} from "./middleware/middleJWT.js";


dotenv.config();
const app = express();
app.use(express.json());

app.use("/token", appJWT);
app.use('/empresas', validateJWT, empresasRouter);
app.use('/marcas', validateJWT, marcasRouter);                       
app.use('/modelos', validateJWT, modelosRouter);
app.use('/proveedores', validateJWT, proveedoreesRouter);
app.use('/surcursales_proveedores', validateJWT, sucursalesProveedoresRouter);
app.use('/mantenimientos', validateJWT, mantenimientosRouter);
app.use('/vehiculos', validateJWT, vehiculosRouter);
app.use('/clases_alarmas', validateJWT, clasesAlarmasRouter);
app.use('/alarmas',validateJWT, alarmasRouter);
app.use('/registros_mantenimientos', validateJWT, registrosMantenimientosRouter);



let config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, () => {
    console.log(`Server is running on http:${config.hostname}:${config.port}`);
});