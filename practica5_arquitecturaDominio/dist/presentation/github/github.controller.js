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
exports.GitHubController = void 0;
class GitHubController {
    constructor(githubRepository) {
        this.githubRepository = githubRepository;
        this.getUserRepos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const repos = yield this.githubRepository.getUserRepos();
                return res.status(200).json(repos);
            }
            catch (error) {
                console.error('Error in getUserRepos:', error);
                res.status(500).json({ message: 'Error al obtener los repositorios', error: error.message });
            }
        });
    }
}
exports.GitHubController = GitHubController;
