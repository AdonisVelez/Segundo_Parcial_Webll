import { Router } from 'express';
import { PersonasController } from './controller';
import { PersonaDatasourceImpl } from '../../infrastructure/datasource/persona.datasource.impl';
import { PersonaRepositoryImpl } from '../../infrastructure/repositories/personas.repository.impl';

export class PersonaRoutes {


    static get routes(): Router {
  
      const router = Router();
  
      const datasource = new PersonaDatasourceImpl();
      const personaRepository = new PersonaRepositoryImpl(datasource);
      const personaController = new PersonasController(personaRepository);
  
      router.get('/', personaController.getPersonas);
      router.get('/:id', personaController.getPersonaById );
      
      router.post('/', personaController.createPersona );
      router.put('/:id', personaController.updatePersona );
      router.delete('/:id', personaController.deletePersona );
  
  
      return router;
    }
  
  
  }
  
