const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function createTable(){
    await db.query(`
            create table if not exists users(
            id int auto_increment primary key,
            email varchar(255) not null,
            last_date DATE null
        ) ENGINE=INNODB;
    `);
    return {};
}

async function addUser(obj){
    const result = await db.query(
        `insert into users (email, last_date) values ('${obj.email}', '${new Date().toISOString().slice(0, 19).replace('T', ' ')}')`
    );

    let message = 'Error adding user';

    if (result.affectedRows) {
        message = 'Added successfully';
    }

    return {message};
}

async function getAll(){
    const result = await db.query(
        `select * from users;`
    );

    return {results : result};
}

module.exports = {
    createTable,
    addUser,
    getAll
}