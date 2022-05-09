import express from 'express';
import { categoriesRouters } from './routes/Categories.routes';

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouters)


app.listen(3333, () => console.log('Server listening on'));