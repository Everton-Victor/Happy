// importar dependencia
const express = require('express');

// iniciando o express
const server = express();

// Criar uma rota
server.get('/', () => {
    console.log('Oi');
});

// Ligar o servidor
server.listen(5500);