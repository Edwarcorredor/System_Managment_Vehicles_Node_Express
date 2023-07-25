import { Router } from 'express'


const modelosRouter = Router();

modelosRouter.get('/', (req, res) => {
    req.conexion.query(
        /**
        ** Funcion para obtener todos los valores de la tabla modelo 
        */
        /*sql*/`SELECT * FROM modelo`,
        (error, data,fils) => {
        res.send(data);
    })
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