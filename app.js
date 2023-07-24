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
import middleAlarmas from './middleware/middleAlarmas.js';
import middleClasesAlarmas from './middleware/middleClasesAlarmas.js';
import middleEmpresas from './middleware/middleEmpresas.js';
import middleMantenimientos from './middleware/middleMantenimientos.js';
import middleMarcas from './middleware/middleMarcas.js';
import middleModelos from './middleware/middleModelos.js';
import middleProveedores from './middleware/middleProveedores.js';
import middleRegistrosMantenimientos from './middleware/middleRegistrosMantenimientos.js';
import middleSucursalesProveedores from './middleware/middleSucursalesProveedores.js';
import middleVehiculos from './middleware/middleVehiculos.js';



dotenv.config();
const app = express();
app.use(express.json());


app.use('/empresas', middleEmpresas, empresasRouter);
app.use('/marcas', middleMarcas, marcasRouter);                       
app.use('/modelos', middleModelos, modelosRouter);
app.use('/proveedorees', middleProveedores, proveedoreesRouter);
app.use('/surcursales_proveedores', middleSucursalesProveedores, sucursalesProveedoresRouter);
app.use('/mantenimientos', middleMantenimientos, mantenimientosRouter);
app.use('/vehiculos', middleVehiculos, vehiculosRouter);
app.use('/clases_alarmas', middleClasesAlarmas, clasesAlarmasRouter);
app.use('/alarmas', middleAlarmas, alarmasRouter);
app.use('/registros_mantenimientos', middleRegistrosMantenimientos, registrosMantenimientosRouter);



let config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, () => {
    console.log(`Server is running on http:${config.hostname}:${config.port}`);
});