// importar dependencia
const express = require("express");

// importar dependencia
const path = require("path");

// iniciando o express
const server = express();

server
  // Utilizando os arquivos estaticos
  .use(express.static("public"))

  // Configurar template engine
  .set('views', path.join(__dirname, "view"))
  .set('view engine', 'hbs')

  // request -> pedido | response -> resposta do server
  // Criar uma rota
  .get("/", (request, response) => {
    return response.render('index')
  });

// Ligar o servidor
server.listen(5500);
