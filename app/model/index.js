const { Sequelize } = require('sequelize');
const User = require('../model/user');

const sequelize = new Sequelize( process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
})

sequelize.authenticate().then(() => {
    console.log('connected db')
}).catch(err => {
    console.error(`Error: ${err.message}`);
})

// Initialize each model in the database
// This must be done before associations are made
let models = [ User ];
models.forEach(model => model.initialize(sequelize))

// synchronizes tables to the database
// force => true (if the table already exists, delete it and then recreate it.)
sequelize.sync({ force: false }).then(() => {
    console.log('Database synchronized successfully');
}).catch(err => {
    console.error(`Error synchronizing database: ${err.message}`);
});

module.exports = {
    sequelize,
    User
};