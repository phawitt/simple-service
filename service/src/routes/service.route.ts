import { Router } from 'express';
import { logger } from '../utils/logger.utils';

const serviceRouter = Router();

serviceRouter.post('/', async (req, res) => {
  logger.info(JSON.stringify(req.body));
  res.status(200);
  res.send('This is a simple service after updated');
});

export default serviceRouter;
