import { Type, Transform, Expose } from "class-transformer";

export class Alarmas{
    /**
    ** Variables de entrada:
    ** id_vehiculo, id_clase_alarma
    */
    @Expose({name: "id_vehiculo",})
    @Transform(({value}) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el id_vehiculo"};
        }    
    })
    VEHICULO_ID: number
    @Expose({name: "id_clase_alarma"})
    @Transform(({value}) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el id_clase_alarma"};
        }    
    })
    CLASE_ALARMA_ID: number

    constructor(p1:number, p2:number){
        this.VEHICULO_ID = p1;
        this.CLASE_ALARMA_ID = p2;
    }
}