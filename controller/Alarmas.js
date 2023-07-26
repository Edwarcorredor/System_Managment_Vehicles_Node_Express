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
export class Alarmas {
    constructor(p1 = 1, p2 = 1) {
        this.id_vehiculo = p1;
        this.id_clase_alarma = p2;
    }
    set guardar(body) {
        conexion.query(/*sql*/ `INSERT INTO alarma SET ?`, body, (err, data, fields) => {
            console.log(err);
            console.log(data);
            console.log(fields);
        });
    }
    get allTabla() {
        const cox = conexion.promise();
        return (() => __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield cox.execute(/*sql*/ `
          SELECT * FROM alarma
          `);
            return rows;
        }))();
    }
}
__decorate([
    Expose({ name: "VEHICULO_ID", }),
    Transform(({ value }) => {
        let data = /^[0-9]\d+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el VEHICULO_ID" };
        }
    }),
    IsDefined({ message: 'El parametro VEHICULO_ID es obligatorio.' }),
    __metadata("design:type", Number)
], Alarmas.prototype, "id_vehiculo", void 0);
__decorate([
    Expose({ name: "CLASE_ALARMA_ID" }),
    Transform(({ value }) => {
        let data = /^[0-9]\d+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el CLASE_ALARMA_ID" };
        }
    }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro CLASE_ALARMA_ID es obligatorio" }; } }),
    __metadata("design:type", Number)
], Alarmas.prototype, "id_clase_alarma", void 0);
