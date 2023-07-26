import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsInt, ValidateNested, IsPositive} from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Alarmas{
    /**
    ** Variables de entrada:
    ** id_vehiculo, id_clase_alarma
    */
    @Expose({name: "VEHICULO_ID",})
    @Transform(({value}) => {
      let data = /^[0-9]\d+$/g.test(value);
      if (data && typeof value == "number"){ 
          return Number(value);
      } 
      else{
          throw {status:401, message:"Error en el VEHICULO_ID"};
      }    
    })
    @IsDefined({ message: 'El parametro VEHICULO_ID es obligatorio.' })
    id_vehiculo: number

    @Expose({name: "CLASE_ALARMA_ID"})
    @Transform(({value}) => {
      let data = /^[0-9]\d+$/g.test(value);
      if (data && typeof value == "number"){ 
          return Number(value);
      } 
      else{
          throw {status:401, message:"Error en el CLASE_ALARMA_ID"};
      }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro CLASE_ALARMA_ID es obligatorio"}}})
    id_clase_alarma: number

    constructor(p1:number = 1, p2:number = 1){
        this.id_vehiculo = p1;
        this.id_clase_alarma = p2;
    }

    set guardar(body:object){
        conexion.query(/*sql*/`INSERT INTO alarma SET ?`,
        body,
        (err, data, fields)=>{
         console.log(err)
         console.log(data)
         console.log(fields)
        });
    }

    get allTabla(){
        const cox = conexion.promise();
        return (async()=>{
          const [rows, fields] = await cox.execute(/*sql*/`
          SELECT * FROM alarma
          `);
          return rows;
        })();
    }
}