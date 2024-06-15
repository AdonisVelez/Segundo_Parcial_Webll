import { Router } from 'express';
import { EncuestasController } from './controller';
import { EncuestaDatasourceImpl } from '../../infrastructure/datasource/encuesta.datasource.impl';
import { EncuestaRepositoryImpl } from '../../infrastructure/repositories/encuesta.repository.impl';

export class EncuestaRoutes {


    static get routes(): Router {
  
      const router = Router();
  
      const datasource = new EncuestaDatasourceImpl();
      const encuestaRepository = new EncuestaRepositoryImpl(datasource);
      const encuestaController = new EncuestasController(encuestaRepository);
  
      router.get('/', encuestaController.getEncuestas);
      router.get('/:id', encuestaController.getEncuestaById );
      
      router.post('/', encuestaController.createEncuesta );
      router.put('/:id', encuestaController.updateEncuesta );
      router.delete('/:id', encuestaController.deleteEncuesta );
  
  
      return router;
    }
  
  
  }
  
