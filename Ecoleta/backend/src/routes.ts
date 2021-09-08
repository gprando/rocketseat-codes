import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import ItemsController from './controllers/ItemsController';
import PointController from './controllers/PointController';

const routes = Router();
const upload = multer(multerConfig);

routes.get('/items', ItemsController.index);

routes.get('/points/:id', PointController.show);
routes.get('/points', PointController.index);


routes.post(
  '/points',
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required(),
    })
  }),
  PointController.store
);

export default routes;