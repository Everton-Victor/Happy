// Importar o SQLite
const Database = require('sqlite-async');

// Colocar uma arquivo chamado database.sqlite na pasta Database
Database.open(__dirname + '/database.sqlite').then(execute);

function execute(db){
    db.exec(`
    
        CREATE TABLE IF NOT EXISTS orphanages ();
    
    `)
}

