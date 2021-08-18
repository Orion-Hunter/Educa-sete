const { Router } = require('express');
const aprendizadoRouter = require('./aprendizado.routes');


const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ api: 'Api Educa 7' });
});

routes.use('/aprendizado', aprendizadoRouter);

module.exports = routes;