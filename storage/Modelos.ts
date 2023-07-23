import { Type, Transform, Expose } from "class-transformer";

export class Modelos{

    /**
    ** Variables de entrada:
    ** id_marca, nombre 
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
}