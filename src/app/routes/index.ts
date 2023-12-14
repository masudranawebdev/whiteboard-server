import { Router } from 'express';
import { DrawsRoutes } from '../modules/drawing/drawing.routes';
const router = Router();

const moduleRoutes = [
  {
    path: '/drawings',
    route: DrawsRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
