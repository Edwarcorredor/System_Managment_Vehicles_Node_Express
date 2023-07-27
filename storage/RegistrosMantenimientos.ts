import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class RegistrosMantenimientos{

    /**
    ** Variables de entrada:
    ** id_alarma, costo 
    */

    @Expose({name: "ALARMA_ID"})
    @Transform(({value}) => {
        let data = /^([1-9]\d*)$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el ALARMA_ID"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro ALARMA_ID es obligatorio"}}})
    id_alarma: number

    @Expose({name: "COST"})
    @Transform(({value}) => {
        let data = /^[+]?\d*\.?\d+$/g.test(value);
        if (data){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el COST"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro COST es obligatorio"}}})
    costo: number

    constructor(p1:number = 1, p2:number = 1 ){
        this.id_alarma = p1;
        this.costo = p2;
    }

    set guardar(body:object){
        conexion.query(/*sql*/`INSERT INTO registro_mantenimiento SET ?`,
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
          SELECT * FROM registro_mantenimiento
          `);
          return rows;
        })();
    }

    actualizar(id:number, body:object){
        conexion.query(/*sql*/`UPDATE registro_mantenimiento SET ? WHERE id = ?`,
        [body, id],
        (err, data, fields)=>{
         console.log(err)
         console.log(data)
         console.log(fields)
        }); 
    }

    eliminar(id:number){
        conexion.query(/*sql*/`DELETE FROM registro_mantenimiento WHERE id = ?`,
        [id],
        (err, data, fields)=>{
         console.log(err)
         console.log(data)
         console.log(fields)
        }); 
    }
}