var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Transform, Expose } from "class-transformer";
import { IsDefined } from 'class-validator';
import { conexion } from '../db/conexion_db.js';
export class RegistrosMantenimientos {
    constructor(p1 = 1, p2 = 1) {
        this.id_alarma = p1;
        this.costo = p2;
    }
    set guardar(body) {
        conexion.query(/*sql*/ `INSERT INTO registro_mantenimiento SET ?`, body, (err, data, fields) => {
            console.log(err);
            console.log(data);
            console.log(fields);
        });
    }
    get allTabla() {
        const cox = conexion.promise();
        return (() => __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield cox.execute(/*sql*/ `
          SELECT * FROM registro_mantenimiento
          `);
            return rows;
        }))();
    }
}
__decorate([
    Expose({ name: "ALARMA_ID" }),
    Transform(({ value }) => {
        let data = /^([1-9]\d*)$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el ALARMA_ID" };
        }
    }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro ALARMA_ID es obligatorio" }; } }),
    __metadata("design:type", Number)
], RegistrosMantenimientos.prototype, "id_alarma", void 0);
__decorate([
    Expose({ name: "COST" }),
    Transform(({ value }) => {
        let data = /^[+]?\d*\.?\d+$/g.test(value);
        if (data) {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el COST" };
        }
    }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro COST es obligatorio" }; } }),
    __metadata("design:type", Number)
], RegistrosMantenimientos.prototype, "costo", void 0);
