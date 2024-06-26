import { Router } from 'express';

import { PersonaRoutes } from './personas/routes';
import { EncuestaRoutes } from './encuesta/routes';
import { RegistroRoutes } from './registro/routes';
import { GitHubRoutes } from './github/github.routes';



export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/personas', PersonaRoutes.routes );
    router.use('/api/encuestas', EncuestaRoutes.routes );
    router.use('/api/registros', RegistroRoutes.routes );
    router.use('/api/github', GitHubRoutes.routes);
    return router;
  }


}

