"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const persona_datasource_impl_1 = require("../../infrastructure/datasource/persona.datasource.impl");
const personas_repository_impl_1 = require("../../infrastructure/repositories/personas.repository.impl");
class PersonaRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new persona_datasource_impl_1.PersonaDatasourceImpl();
        const personaRepository = new personas_repository_impl_1.PersonaRepositoryImpl(datasource);
        const personaController = new controller_1.PersonasController(personaRepository);
        router.get('/', personaController.getPersonas);
        router.get('/:id', personaController.getPersonaById);
        router.post('/', personaController.createPersona);
        router.put('/:id', personaController.updatePersona);
        router.delete('/:id', personaController.deletePersona);
        return router;
    }
}
exports.PersonaRoutes = PersonaRoutes;
