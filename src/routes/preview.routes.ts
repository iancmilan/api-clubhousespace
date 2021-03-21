import { Router } from 'express';
import CreatePreviewImageService from '../services/CreatePreviewImageService';

const previewRouter = Router();

previewRouter.get('/:eventId.png', async (request, response) => {
  const { eventId } = request.params;
  const getImgPreview = new CreatePreviewImageService();

  const preview = await getImgPreview.execute(eventId);

  response.set({ 'Content-Type': 'image/png' });
  response.send(preview);
});

export default previewRouter;
