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
export class SurcursalesProveedores {
    constructor(p1, p2, p3, p4, p5) {
        this.PROVEEDOR_ID = p1;
        this.NAME = p2;
        this.ADDRESS = p3;
        this.PHONE = p4;
        this.EMAIL = p5;
    }
}
__decorate([
    Expose({ name: "id_proveedor" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el id_proveedor" };
        }
    }),
    __metadata("design:type", Number)
], SurcursalesProveedores.prototype, "PROVEEDOR_ID", void 0);
__decorate([
    Expose({ name: "nombre" }),
    __metadata("design:type", String)
], SurcursalesProveedores.prototype, "NAME", void 0);
__decorate([
    Expose({ name: "direccion" }),
    __metadata("design:type", String)
], SurcursalesProveedores.prototype, "ADDRESS", void 0);
__decorate([
    Expose({ name: "telefono" }),
    __metadata("design:type", String)
], SurcursalesProveedores.prototype, "PHONE", void 0);
__decorate([
    Expose({ name: "email" }),
    __metadata("design:type", String)
], SurcursalesProveedores.prototype, "EMAIL", void 0);
