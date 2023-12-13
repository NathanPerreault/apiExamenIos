import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorHandler } from './middelwares/errorHandler.js';
import { sequelize } from './config/config.js';
import { config } from 'dotenv';
import compteRouter from './routes/compte.route.js';


config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/',compteRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
});


