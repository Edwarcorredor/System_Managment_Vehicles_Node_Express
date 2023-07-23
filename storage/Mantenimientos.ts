import { Type, Transform, Expose } from "class-transformer";

export class Mantenimientos{

    /**
    ** Variables de entrada:
    ** id_proveedor, descripcion 
    */

    @Expose({ name: "id_proveedor"})
    @Transform(({value}) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el id_proveedor"};
        }    
    })
    PROVEEDOR_ID: number
    @Expose({ name: "descripcion"})
    DESCRIPTION: string
}