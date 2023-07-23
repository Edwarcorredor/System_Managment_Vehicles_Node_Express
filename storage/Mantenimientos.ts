import { Type, Transform, Expose } from "class-transformer";

export class Mantenimientos{

    /**
    ** Variables de entrada:
    ** id_sucursal_proveedor, descripcion 
    */

    @Expose({ name: "id_sucursal_proveedor"})
    @Transform(({value}) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el id_sucursal_proveedor"};
        }    
    })
    SUCURSAL_ID: number
    @Expose({ name: "descripcion"})
    DESCRIPTION: string

    constructor(p1:number, p2:string){
        this.SUCURSAL_ID = p1;
        this.DESCRIPTION = p2;
    }
}