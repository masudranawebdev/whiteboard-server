import { Router } from 'express';
import { DrawingController } from './drawing.controller';

const router = Router();

router.get('/', DrawingController.getAllData);
router.get('/:id', DrawingController.getSingleData);
router.patch('/:id', DrawingController.updateById);
router.delete('/:id', DrawingController.deleteById);
router.post('/', DrawingController.insertIntoDB);

export const DrawsRoutes = router;
