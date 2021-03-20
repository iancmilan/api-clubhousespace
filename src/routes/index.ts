import { Router } from 'express';

import eventRouter from './event.routes';
import previewRouter from './preview.routes';

const routes = Router();

routes.use('/event', eventRouter);
routes.use('/preview', previewRouter);

export default routes;
