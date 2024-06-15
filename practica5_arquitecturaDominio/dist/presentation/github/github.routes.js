"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubRoutes = void 0;
const express_1 = require("express");
const github_controller_1 = require("../github/github.controller");
const github_datasource_1 = require("../../infrastructure/datasource/github.datasource");
const github_repository_1 = require("../../infrastructure/repositories/github.repository");
class GitHubRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const githubToken = process.env.GITHUB_TOKEN || '';
        const datasource = new github_datasource_1.GitHubDatasource(githubToken);
        const githubRepository = new github_repository_1.GitHubRepository(datasource);
        const githubController = new github_controller_1.GitHubController(githubRepository);
        router.get('/', githubController.getUserRepos);
        return router;
    }
}
exports.GitHubRoutes = GitHubRoutes;
