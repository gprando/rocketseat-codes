import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export function hellow(req: Request, res: Response) {
  const user = createUser({ email: 'gabriel', password: '1234', techs: ['node', 'react'] });

  return res.json({ message: 'hellow world' });
}