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
export class Modelos {
    constructor(p1, p2, p3) {
        this.MARCA_ID = p1;
        this.NAME = p2;
        this.LANZAMIENTO = p3;
    }
}
__decorate([
    Expose({ name: "id_marca" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el id_marca" };
        }
    }),
    __metadata("design:type", Number)
], Modelos.prototype, "MARCA_ID", void 0);
__decorate([
    Expose({ name: "nombre" }),
    __metadata("design:type", String)
], Modelos.prototype, "NAME", void 0);
__decorate([
    Expose({ name: "anio_lanzamiento" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el anio_lanzamiento" };
        }
    }),
    __metadata("design:type", Number)
], Modelos.prototype, "LANZAMIENTO", void 0);
