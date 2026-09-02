const {knex} = require ('knex')({
client: 'pg',
connection: {
  host: 'ep-silent-forest-a5o50z9b.us-east-2.aws.neon.tech',
  user: 'neondb_owner',
  password: 'agRPuwVeZJ71',
  database: 'neondb',
  port: 5432,

  },
  });
//check connection
knex.raw('SELECT NOW()').then((result) => {
  console.log('Conexión establicida con knex.js');
  });
  
module.exports = knex
  