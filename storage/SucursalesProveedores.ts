import { Type, Transform, Expose } from "class-transformer";

export class SurcursalesProveedores{
    /**
    ** Variables de entradas:
    ** id_proveedor, nombre, direccion 
    */

    @Expose({name: "id_proveedor"})
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
    @Expose({name: "nombre"})
    NAME: string
    @Expose({name: "direccion"})
    ADDRESS: string
}