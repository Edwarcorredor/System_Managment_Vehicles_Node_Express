import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString} from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class ClasesAlarmas{
  /**
  ** Variables de entrada:
  ** nombre, descripcion, id_mantenimiento
  */
  @Expose({name: "NAME"})
  @Transform(({value}) => {
    let data = /^[a-zA-Z]+/g.test(value);
    if ( data && typeof value == "string"){ 
        return String(value);
    } 
    else{
        throw {status:401, message:"Error en el NAME"};
    }    
  })
  @IsDefined({message: ()=>{ throw {status:422, message: "El parametro NAME es obligatorio"}}})
  nombre: string

  @Expose({name: "DESCRIPTION"})
  @Transform(({value}) => {
    let data = /^[a-zA-Z]+/g.test(value);
    if ( data && typeof value == "string"){ 
        return String(value);
    } 
    else{
        throw {status:401, message:"Error en el DESCRIPTION"};
    }    
  })
  @IsDefined({message: ()=>{ throw {status:422, message: "El parametro DESCRIPTION es obligatorio"}}})
  descripcion: string

  @Expose({name: "MANTENIMIENTO_ID"})
  @Transform(({value}) => {
  let data = /^[0-9]\d+$/g.test(value);
  if (data && typeof value == "number"){ 
      return Number(value);
  } 
  else{
      throw {status:401, message:"Error en el MANTENIMIENTO_ID"};
  }    
  })
  @IsDefined({message: ()=>{ throw {status:422, message: "El parametro MANTENIMIENTO_ID es obligatorio"}}})
  id_mantenimiento: number

  constructor(p1:string ="Nombre ", p2:string ="Descripcion ", p3:number = 1){
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