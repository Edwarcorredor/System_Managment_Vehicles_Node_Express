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
        let data = /^\d+$/g.test(value);
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
        let data = /^\d+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el EMPRESA_ID"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro MODELO_ID es obligatorio"}}})
    id_modelo: number

    @Expose({name: "SERIE_NUMERO"})
    @Transform(({ value }) => { if(/^[0-9]+$/.test(value)) return value ; else throw {status: 400, message: "El parametro SERIE_NUMERO  no cumple con el formato solicitado"};}, { toClassOnly: true })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro SERIE_NUMERO es obligatorio"}}})
    numero_serie: string

    @Expose({name: "PLATE"})
    @IsString({message: ()=> "La placa debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro PLATE es obligatorio"}}})
    placa: string

    @Expose({name: "STATE"})
    @IsString({message: ()=> "El STATE debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro STATE es obligatorio"}}})
    estado: string

    constructor(p1:number, p2:number, p3:string, p4:string, p5:string){
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
}