"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./personas/routes");
const routes_2 = require("./encuesta/routes");
const routes_3 = require("./registro/routes");
const github_routes_1 = require("./github/github.routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/personas', routes_1.PersonaRoutes.routes);
        router.use('/api/encuestas', routes_2.EncuestaRoutes.routes);
        router.use('/api/registros', routes_3.RegistroRoutes.routes);
        router.use('/api/github', github_routes_1.GitHubRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
