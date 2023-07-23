var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from "class-transformer";
export class Alarmas {
    constructor(p1, p2) {
        this.VEHICULO_ID = p1;
        this.CLASE_ALARMA_ID = p2;
    }
}
__decorate([
    Expose({ name: "id_vehiculo", }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el id_vehiculo" };
        }
    }),
    __metadata("design:type", Number)
], Alarmas.prototype, "VEHICULO_ID", void 0);
__decorate([
    Expose({ name: "id_clase_alarma" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el id_clase_alarma" };
        }
    }),
    __metadata("design:type", Number)
], Alarmas.prototype, "CLASE_ALARMA_ID", void 0);
