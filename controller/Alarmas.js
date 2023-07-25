var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined, IsNumber } from 'class-validator';
import { conexion } from '../db/conexion_db.js';
export class Alarmas {
    constructor(p1, p2) {
        this.VEHICULO_ID = p1;
        this.CLASE_ALARMA_ID = p2;
    }
    get guardar() {
        conexion.query(/*sql*/ `SELECT * FROM alarma`, (err, data, fields) => {
            console.log(data);
        });
        return "";
    }
}
__decorate([
    Expose({ name: "id_vehiculo", }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro id_vehiculo no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id_vehiculo es obligatorio" }; } }),
    __metadata("design:type", Number)
], Alarmas.prototype, "VEHICULO_ID", void 0);
__decorate([
    Expose({ name: "id_clase_alarma" }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro id_clase_alarma no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id_clase_alarma es obligatorio" }; } }),
    __metadata("design:type", Number)
], Alarmas.prototype, "CLASE_ALARMA_ID", void 0);
