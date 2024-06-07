"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTablas = void 0;
const index_1 = require("../services/index");
// URL del servicio REST de tu compañero
const externalServiceURL = 'http://10.42.0.1:3011/api/control';
// Controlador para obtener los datos desde el servicio REST de tu compañero
const getAllTablas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield index_1.httpClient.get(externalServiceURL);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error al obtener datos del servicio externo:', error);
        res.status(500).json({ message: 'Error al obtener datos del servicio externo' });
    }
});
exports.getAllTablas = getAllTablas;
