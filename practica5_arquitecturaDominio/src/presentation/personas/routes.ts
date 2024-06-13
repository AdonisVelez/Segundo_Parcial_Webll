import { Router } from 'express';
import { PersonasController } from './personasController';


export class PersonaRoutes {


    static get routes(): Router {
  
      const router = Router();
  
      const personaController = new PersonasController();
  
      router.get('/', personaController.getPersonaById );
      router.get('/:id', personaController.getPersonaById );
      
      router.post('/', personaController.createPersona );
      router.put('/:id', personaController.updatePersona );
      router.delete('/:id', personaController.deletePersona );
  
  
      return router;
    }
  
  
  }
  
