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
export class Vehiculos {
    constructor(p1, p2, p3, p4, p5) {
        this.EMPRESA_ID = p1;
        this.MODELO_ID = p2;
        this.SERIE_NUMERO = p3;
        this.PLATE = p4;
        this.STATE = p5;
    }
}
__decorate([
    Expose({ name: "id_empresa" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el id_empresa" };
        }
    }),
    __metadata("design:type", Number)
], Vehiculos.prototype, "EMPRESA_ID", void 0);
__decorate([
    Expose({ name: "id_modelo" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el id_modelo" };
        }
    }),
    __metadata("design:type", Number)
], Vehiculos.prototype, "MODELO_ID", void 0);
__decorate([
    Expose({ name: "numero_serie" }),
    __metadata("design:type", String)
], Vehiculos.prototype, "SERIE_NUMERO", void 0);
__decorate([
    Expose({ name: "placa" }),
    __metadata("design:type", String)
], Vehiculos.prototype, "PLATE", void 0);
__decorate([
    Expose({ name: "estado" }),
    __metadata("design:type", String)
], Vehiculos.prototype, "STATE", void 0);
