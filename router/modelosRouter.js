import { Router } from 'express'
import { middleModelos } from '../middleware/middleModelos.js'

const modelosRouter = Router();

modelosRouter.get('/', middleModelos, (req, res) => {
    res.send(req.body.guardar);
})

modelosRouter.post('/', (req, res) => {
    const { MARCA_ID, NAME, LANZAMIENTO } = req.body;
    req.conexion.query(
        /*sql*/`INSERT INTO marca (id_marca, nombre, anio_lanzamiento) VALUES (?, ?, ?)`,
        [MARCA_ID, NAME, LANZAMIENTO],
        (error, results) => {
            if (error) {
              console.error(error);
              res.status(500).send(error);
            }
            res.status(200).send(results);
          }

    )
});

export default modelosRouter;