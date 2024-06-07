import express from 'express';
import personaRoutes from './personaRoutes';
import encuestaRoutes from './encuestaRoutes';
import registroRoutes from './registroRoutes';
import maestraRoutes from './maestraRoutes';

const router = express.Router();

router.use('/personas', personaRoutes);
router.use('/encuestas', encuestaRoutes);
router.use('/registros', registroRoutes);
router.use('/maestra', maestraRoutes);


export default router;
