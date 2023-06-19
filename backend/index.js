import express from 'express';
import cors from 'cors';
import route from './routes/routes.js';

const host = 'localhost';
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

app.use(express.urlencoded({ extended: true }));
app.use('/entregador', route);

app.listen(port, host, () => { port, console.log(`listen on http://${host}:${port}`) });
