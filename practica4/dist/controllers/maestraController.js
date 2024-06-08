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
const httpClient_1 = require("../utils/httpClient");
// URL del servicio REST de tu compañero
const externalServiceURL = 'https://7fba-102-177-174-88.ngrok-free.app/cocineros';
// Controlador para obtener los datos desde el servicio REST de tu compañero
const getAllTablas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Recibida solicitud para obtener todas las tablas');
    try {
        // Realizar solicitudes simultáneas a través de axios y fetch
        const [axiosData, fetchData] = yield Promise.all([
            httpClient_1.axiosClient.get(externalServiceURL),
            httpClient_1.fetchClient.get(externalServiceURL)
        ]);
        console.log('Datos recibidos del servicio externo con axios:', axiosData);
        console.log('Datos recibidos del servicio externo con fetch:', fetchData);
        // Combinar las respuestas
        const combinedData = {
            axiosData,
            fetchData
        };
        res.status(200).json(combinedData);
    }
    catch (error) {
        console.error('Error al obtener datos del servicio externo:', error);
        res.status(500).json({ message: 'Error al obtener datos del servicio externo' });
    }
});
exports.getAllTablas = getAllTablas;
