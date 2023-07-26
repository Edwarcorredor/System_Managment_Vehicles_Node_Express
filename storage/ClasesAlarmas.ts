import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString} from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class ClasesAlarmas{
    /**
    ** Variables de entrada:
    ** nombre, descripcion, id_mantenimiento
    */
   @Expose({name: "NAME"})
   @IsString({message: ()=> "El NAME debe ser una cadena de texto" })
   @IsDefined({message: ()=>{ throw {status:422, message: "El parametro NAME es obligatorio"}}})
   nombre: string

   @Expose({name: "DESCRIPTION"})
   @IsString({message: ()=> "La DESCRIPTION debe ser una cadena de texto" })
   @IsDefined({message: ()=>{ throw {status:422, message: "El parametro DESCRIPTION es obligatorio"}}})
   descripcion: string

   @Expose({name: "MANTENIMIENTO_ID"})
   @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro MANTENIMIENTO_ID no es correcto"}}})
   id_mantenimiento: number

   constructor(p1:string ="", p2:string ="", p3:number = 1){
    this.nombre = p1;
    this.descripcion = p2;
    this.id_mantenimiento = p3;
    }

    set guardar(body:object){
      conexion.query(/*sql*/`INSERT INTO clase_alarma SET ?`,
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
          SELECT * FROM clase_alarma
          `);
          return rows;
        })();
    }
}