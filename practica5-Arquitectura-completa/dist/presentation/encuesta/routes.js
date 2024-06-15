"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuestaRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const encuesta_datasource_impl_1 = require("../../infrastructure/datasource/encuesta.datasource.impl");
const encuesta_repository_impl_1 = require("../../infrastructure/repositories/encuesta.repository.impl");
class EncuestaRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new encuesta_datasource_impl_1.EncuestaDatasourceImpl();
        const encuestaRepository = new encuesta_repository_impl_1.EncuestaRepositoryImpl(datasource);
        const encuestaController = new controller_1.EncuestasController(encuestaRepository);
        router.get('/', encuestaController.getEncuestas);
        router.get('/:id', encuestaController.getEncuestaById);
        router.post('/', encuestaController.createEncuesta);
        router.put('/:id', encuestaController.updateEncuesta);
        router.delete('/:id', encuestaController.deleteEncuesta);
        return router;
    }
}
exports.EncuestaRoutes = EncuestaRoutes;
