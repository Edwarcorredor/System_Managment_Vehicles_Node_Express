import { Type, Transform, Expose } from "class-transformer";

export class Modelos{

    /**
    ** Variables de entrada:
    ** id_marca, nombre, anio_lanzamiento
    */

    @Expose({name: "id_marca"})
    @Transform(({value}) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el id_marca"};
        }    
    })
    MARCA_ID: number
    @Expose({name: "nombre"})
    NAME: string
    @Expose({name: "anio_lanzamiento"})
    @Transform(({value}) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el anio_lanzamiento"};
        }    
    })
    LANZAMIENTO: number

    constructor(p1:number, p2:string, p3:number){
        this.MARCA_ID = p1;
        this.NAME = p2;
        this.LANZAMIENTO = p3;
    }
}