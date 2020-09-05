import express from 'express';
import controller from '../controllers/grade.js';
import cors from 'cors';

const app = express();

app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://claudiaheindrick-grades-app.herokuapp.com'
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

app.post('/grade', controller.create);
app.get('/grade', controller.findAll);
app.get('/grade/:id', controller.findOne);
app.put('/grade/:id', controller.update);
app.delete('/grade/:id', controller.remove);
app.delete('/grade', controller.removeAll);

export { app as gradeRouter };
