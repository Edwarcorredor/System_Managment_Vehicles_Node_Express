import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Modelos{

    /**
    ** Variables de entrada:
    ** id_marca, nombre, anio_lanzamiento
    */

    @Expose({name: "MARCA_ID"})
    @Transform(({value}) => {
        let data = /^([1-9]\d*)$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el MARCA_ID"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro MARCA_ID es obligatorio"}}})
    id_marca: number

    @Expose({name: "NAME"})
    @Transform(({value}) => {
        let data = /^(?=.*[a-zA-Z])[a-zA-Z0-9 ]+$/g.test(value);
        if ( data && typeof value == "string"){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el NAME"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro NAME es obligatorio"}}})
    nombre: string

    @Expose({name: "LANZAMIENTO_ANIO"})
    @Transform(({value}) => {
        let data = /^(?:[1-9]\d*|undefined)$/g.test(value);
        if (data){ 
            return value;
        } 
        else{
            throw {status:401, message:"Error en el LANZAMIENTO_ANIO"};
        }    
    })
    anio_lanzamiento: number

    constructor(p1:number = 1, p2:string = "hola", p3:number){
        this.id_marca = p1;
        this.nombre = p2;
        this.anio_lanzamiento = p3;
    }

    set guardar(body:object){
        conexion.query(/*sql*/`INSERT INTO modelo SET ?`,
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
          SELECT * FROM modelo
          `);
          return rows;
        })();
    }

    actualizar(id:number, body:object){
        conexion.query(/*sql*/`UPDATE modelo SET ? WHERE id = ?`,
        [body, id],
        (err, data, fields)=>{
         console.log(err)
         console.log(data)
         console.log(fields)
        }); 
    }

    eliminar(id:number){
        conexion.query(/*sql*/`DELETE FROM modelo WHERE id = ?`,
        [id],
        (err, data, fields)=>{
         console.log(err)
         console.log(data)
         console.log(fields)
        }); 
    }
}