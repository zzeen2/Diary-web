const Sequalize = require("sequelize");
const Users = require('./user');

const sequelize = new Sequalize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host : process.env.DATABASE_HOST,
        dialect : "mysql"
    }
)

const users = Users.init(sequelize);

const db = {Users, users};



sequelize.sync( { force : false } ).then(() => {
    console.log("database on~")
}).catch((err) => {
    console.log(err);
})

module.exports = db;

