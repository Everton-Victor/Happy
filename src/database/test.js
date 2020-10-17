const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage.js");

Database.then(async (db) => {
  // Inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-23.6631287",
    lng: "-46.459217",


    name: "Lar das meninos",

    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",

    whatsapp: "(11) 986517163",

    images: [
      "https://images.unsplash.com/photo-1595009552535-be753447727e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1601564921698-0166194c51ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),

    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",

    opening_hours: "Horário de visitas Das 18h até 8h",

    open_on_weekends: "1",
  });
   //Consultar dados na tabela
      const selected = await db.all('SELECT * FROM orphanages')
      console.log(selected);

  // Consultar somente 1 orfanato pelo id
  const orphanageSelected = await db.all('SELECT * FROM orphanages WHERE id="1"');
  console.log(orphanageSelected);

  // Deletar um dado da tabela
  //console.log(await db.run('DELETE FROM orphanages'));*/
});
