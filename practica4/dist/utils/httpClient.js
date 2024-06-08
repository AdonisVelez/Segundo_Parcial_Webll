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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchClient = exports.axiosClient = void 0;
const axios_1 = __importDefault(require("axios"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const axiosClient = {
    get: (url) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`Haciendo solicitud a ${url} con axios`);
        try {
            const response = yield axios_1.default.get(url);
            console.log('Respuesta recibida con axios:', response.data);
            return response.data;
        }
        catch (error) {
            console.error('Error al obtener datos del servicio externo con axios:', error);
            throw new Error('Error al obtener datos del servicio externo con axios');
        }
    })
};
exports.axiosClient = axiosClient;
const fetchClient = {
    get: (url) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`Haciendo solicitud a ${url} con fetch`);
        try {
            const response = yield (0, node_fetch_1.default)(url);
            if (!response.ok) {
                throw new Error('Error al obtener datos del servicio externo con fetch');
            }
            const data = yield response.json();
            console.log('Respuesta recibida con fetch:', data);
            return data;
        }
        catch (error) {
            console.error('Error al obtener datos del servicio externo con fetch:', error);
            throw new Error('Error al obtener datos del servicio externo con fetch');
        }
    })
};
exports.fetchClient = fetchClient;
