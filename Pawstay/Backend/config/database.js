const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pawstay', 'jdpm', 'jdpmspatel', {
    host: 'localhost',
    dialect: 'mysql'
});



// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: ''
// });
module.exports = sequelize;
