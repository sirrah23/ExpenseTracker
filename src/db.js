const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./mydb.sqlite"
    }
});

module.exports = {

    initialize(){
        knex.schema.createTableIfNotExists('expense', (table) => {
            table.increments('id');
            table.string('name');
            table.integer('cents');
        })
        .then()
        .catch(e => console.log(e));
    },

    insertExpense(name, cents){
        return knex('expense').insert({name, cents});
    },

    getAllExpense(){
        return knex('expense').orderBy('name', 'asc');
    }

}

module.exports.initialize();