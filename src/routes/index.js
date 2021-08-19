const { Router } = require('express');
const aprendizadoRouter = require('./aprendizado.routes');
const alunosquintoRoute = require('./alunos_quinto.routes');
const alunosNonoRoute = require('./alunos_nono.routes');
const alunosTerceiroRoute = require('./alunos_terceiro.routes');
const taxaRendimento = require('./taxaRendimento.routes');


const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ api: 'Api Educa 7' });
});

routes.use('/aprendizado', aprendizadoRouter);
routes.use('/alunos/5',alunosquintoRoute);
routes.use('/alunos/9', alunosNonoRoute);
routes.use('/alunos/3', alunosTerceiroRoute);
routes.use('/taxa-rendimento', taxaRendimento);

module.exports = routes;