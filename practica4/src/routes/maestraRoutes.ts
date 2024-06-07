import { Router} from 'express';
import {getAllTablas} from '../controllers/maestraController';

const router = Router();

router.get('/', getAllTablas);


export default router;