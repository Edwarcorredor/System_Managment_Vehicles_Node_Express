import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Vehiculos{

    /**
    ** Variables de entrada:
    ** id_empresa, id_modelo, numero_serie, placa, estado 
    */

    @Expose({name: "EMPRESA_ID"})
    @Transform(({value}) => {
        let data = /^([1-9]\d*)$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el EMPRESA_ID"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro EMPRESA_ID es obligatorio"}}})
    id_empresa: number

    @Expose({name: "MODELO_ID"})
    @Transform(({value}) => {
        let data = /^([1-9]\d*)$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el MODELO_ID"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro MODELO_ID es obligatorio"}}})
    id_modelo: number

    @Expose({name: "SERIE_NUMERO"})
    @Transform(({value}) => {
        let data = /^([0-9]\d*)$/g.test(value);
        if (data){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el SERIE_NUMERO"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro SERIE_NUMERO es obligatorio"}}})
    numero_serie: string

    @Expose({name: "PLATE"})
    @Transform(({value}) => {
        let data = /^[a-zA-Z0-9 ]+$/g.test(value);
        if ( data && typeof value == "string"){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el PLATE"};
        }    
      })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro PLATE es obligatorio"}}})
    placa: string

    @Expose({name: "STATE"})
    @Transform(({value}) => {
        let data = /^[a-zA-Z ]+$/g.test(value);
        if ( data && typeof value == "string"){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el STATE"};
        }    
      })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro STATE es obligatorio"}}})
    estado: string

    constructor(p1:number = 1, p2:number =1 , p3:string ="1234", p4:string = "placa", p5:string = "estado"){
        this.id_empresa = p1;
        this.id_modelo = p2;
        this.numero_serie = p3;
        this.placa = p4;
        this.estado = p5;
    }

    set guardar(body:object){
        conexion.query(/*sql*/`INSERT INTO vehiculo SET ?`,
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
          SELECT * FROM vehiculo
          `);
          return rows;
        })();
    }

    actualizar(id:number, body:object){
        conexion.query(/*sql*/`UPDATE vehiculo SET ? WHERE id = ?`,
        [body, id],
        (err, data, fields)=>{
         console.log(err)
         console.log(data)
         console.log(fields)
        }); 
    }
}