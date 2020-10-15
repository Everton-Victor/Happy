// importar dependencia
const express = require("express");

// importar dependencia
const path = require("path");

// iniciando o express
const server = express();

// Criar uma rota
server.get("/", (request, response) => {
  return response.sendFile(path.join(__dirname, "views", "index.html"));
});

// Ligar o servidor
server.listen(5500);
