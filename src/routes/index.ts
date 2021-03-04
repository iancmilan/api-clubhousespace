import { Router } from 'express';

import eventRouter from './event.routes';

const routes = Router();

routes.use('/event', eventRouter);

export default routes;
