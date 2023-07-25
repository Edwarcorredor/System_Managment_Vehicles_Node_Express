import { Router } from 'express'
import { middleEmpresas } from '../middleware/middleEmpresas.js'

const empresasRouter = Router();

empresasRouter.get('/', middleEmpresas, (req, res) => {
    res.send(req.body.guardar);
})

empresasRouter.post('/', (req, res) => {
    const { NAME, ADDRESS, PHONE, EMAIL, SITE_WEB } = req.body;
    req.conexion.query(
        /*sql*/`INSERT INTO empresa (nombre, direccion, telefono, email, sitio_web) VALUES (?, ?, ?, ?, ?)`,
        [NAME, ADDRESS, PHONE, EMAIL, SITE_WEB],
        (error, results) => {
            if (error) {
              console.error(error);
              res.status(500).send(error);
            }
            res.status(200).send(results);
          }

    )
});

export default empresasRouter;