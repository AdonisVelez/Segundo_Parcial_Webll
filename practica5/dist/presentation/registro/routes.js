"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const registro_datasource_impl_1 = require("../../infrastructure/datasource/registro.datasource.impl");
const registro_repository_impl_1 = require("../../infrastructure/repositories/registro.repository.impl");
class RegistroRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new registro_datasource_impl_1.RegistroDatasourceImpl();
        const registroRepository = new registro_repository_impl_1.RegistroRepositoryImpl(datasource);
        const registroController = new controller_1.RegistrosController(registroRepository);
        router.get('/', registroController.getRegistro);
        router.get('/:id', registroController.getRegistroById);
        router.post('/', registroController.createRegistro);
        router.put('/:id', registroController.updateRegistro);
        router.delete('/:id', registroController.deleteRegistro);
        return router;
    }
}
exports.RegistroRoutes = RegistroRoutes;
