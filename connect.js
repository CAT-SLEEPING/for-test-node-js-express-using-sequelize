
const{Sequelize}= require('sequelize');

const db = 'eve_wont_to_buy';
const user = 'root';
const pass = '1234';
const host = '127.0.0.1';
const port = '3306';

const db_type = 'mysql';
const sequelize = new sequelize(db,user,pass,{
    host,
    port,
    dialect:db_type
});



module.exports = sequelize;