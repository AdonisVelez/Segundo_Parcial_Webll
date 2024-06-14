import { Router } from 'express';
import { RegistrosController } from './controller';
import { RegistroDatasourceImpl } from '../../infrastructure/datasource/registro.datasource.impl';
import { RegistroRepositoryImpl } from '../../infrastructure/repositories/registro.repository.impl';

export class RegistroRoutes {


    static get routes(): Router {
  
      const router = Router();
  
      const datasource = new RegistroDatasourceImpl();
      const registroRepository = new RegistroRepositoryImpl(datasource);
      const registroController = new RegistrosController(registroRepository);
  
      router.get('/', registroController.getRegistro);
      router.get('/:id', registroController.getRegistroById );
      
      router.post('/', registroController.createRegistro );
      router.put('/:id', registroController.updateRegistro );
      router.delete('/:id', registroController.deleteRegistro );
  
  
      return router;
    }
  
  
  }
  
