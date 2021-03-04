import { Router } from 'express';
import GetEventService from '../services/GetEventService';

const eventRouter = Router();

eventRouter.get('/:eventId', async (request, response) => {
  const { eventId } = request.params;
  const getEvent = new GetEventService();

  const event = await getEvent.execute(eventId);

  return response.json(event);
});

export default eventRouter;
