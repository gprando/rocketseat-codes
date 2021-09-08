import express from 'express';

import { hellow } from './routes';

const app = express();

app.get('/', hellow);

app.listen(3333);