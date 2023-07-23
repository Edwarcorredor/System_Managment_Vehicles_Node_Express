import { Type, Transform, Expose } from "class-transformer";

export class RegistrosMantenimientos{

    /**
    ** Variables de entrada:
    ** id_alarma, costo 
    */

    @Expose({name: "id_alarma"})
    @Transform(({value}) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el id_alarma"};
        }    
    })
    ALARMA_ID: number
    @Expose({name: "costo"})
    @Transform(({value}) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el costo"};
        }    
    })
    COST: number
}