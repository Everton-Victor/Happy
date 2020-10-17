// importar dependencia
const express = require("express");

// importar dependencia
const path = require("path");

const pages = require('./pages.js');

// iniciando o express
const server = express();



server

  // Utilizando o body do req
  .use(express.urlencoded({extended: true}))

  // Utilizando os arquivos estaticos
  .use(express.static("public"))

  // Configurar template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  // request -> req -> pedido | response -> res -> resposta do server
  // rotas da aplicação
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage);

// Ligar o servidor
server.listen(5500);
