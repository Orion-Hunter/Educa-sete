const { Router } = require('express');
const aprendizadoRouter = require('./aprendizado.routes');
const taxaRendimento = require('./taxaRendimento.routes');


const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ api: 'Api Educa 7' });
});

routes.use('/aprendizado', aprendizadoRouter);
routes.use('/taxa-rendimento', taxaRendimento);

module.exports = routes;