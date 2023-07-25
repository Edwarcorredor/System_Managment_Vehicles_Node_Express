import { Router } from 'express'
import { middleMarcas } from '../middleware/middleMarcas.js'

const marcasRouter = Router();

marcasRouter.get('/', middleMarcas, (req, res) => {
    res.send(req.body.guardar);
})

marcasRouter.post('/', (req, res) => {
    const { NAME, ORIGEN_PAIS, WEB_SITE } = req.body;
    req.conexion.query(
        /*sql*/`INSERT INTO marca (nombre, pais_origen, sitio_web) VALUES (?, ?, ?)`,
        [NAME, ORIGEN_PAIS, WEB_SITE],
        (error, results) => {
            if (error) {
              console.error(error);
              res.status(500).send(error);
            }
            res.status(200).send(results);
          }

    )
});

export default marcasRouter;