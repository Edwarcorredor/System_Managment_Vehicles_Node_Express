import { Type, Transform, Expose } from "class-transformer";

export class Vehiculos{

    /**
    ** Variables de entrada:
    ** id_empresa, id_modelo, numero_serie, placa, estado 
    */

    @Expose({name: "id_empresa"})
    @Transform(({value}) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el id_empresa"};
        }    
    })
    EMPRESA_ID: number
    @Expose({name: "id_modelo"})
    @Transform(({value}) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el id_modelo"};
        }    
    })
    MODELO_ID: number
    @Expose({name: "numero_serie"})
    SERIE_NUMERO: string
    @Expose({name: "placa"})
    PLATE: string
    @Expose({name: "estado"})
    STATE: string
}