import { Router } from 'express';

import { CiudadanoRoutes } from './ciudadanos/routes';
import { PersonaRoutes } from './personas/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/ciudadanos', CiudadanoRoutes.routes );
    router.use('/api/personas', PersonaRoutes.routes );
    



    return router;
  }


}

