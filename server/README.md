## Getting Started

## step by step back-end express / postgres

create folder
run the commands:

- `npm init y`
- `npm install express cors dotenv knex nodemon pg helmet jsonwebtoken bcryptjs`

create "src" folder, store index.js & server.js in it.
(modify the script path for nodemon)

### basic index.js syntax :

////////////////////////////////////////////////////
const { startServer } = require('./server');
const dotenv = require('dotenv');
const server = startServer();

dotenv.config();

server.listen(process.env.BACK_PORT, () => {
console.log('Server run, port :${BACK_PORT}');
});
///////////////////////////////////////////

### basic server.js syntax :

/////////////////////////////////////////////
const express = require('express');
const cors = require('express');

const app = express();
const usersRoute = require('../routes/users');

app.use(express.json());
app.use(cors());

const startServer = () => {
app.use('/users', usersRoute);
app.get('/', (req, res) => {
res.send("What's up brooo ?!");
});

return app;
};

module.exports = { startServer };
///////////////////////////////////////////////////

create controllers / db / routes folder in the root

create knexfile.js using : `npx knex init`
setup database name, user, port, etc
store them into a .env file

Run `knex migrate:make migration_name` to create a new migration file in the migrations directory.
Run `knex migrate:latest` to apply the migrations and create the database tables.

Run the seed script by running `npm run seed`
Generate a seed script with Knex CLI: `knex seed:make 002-products`

run "psql" in the terminal
`CREATE DATABASE name_of_the_database;`
verify that the database exists: - `psql -d name_of_the_database`

create script from migrate to make news tables / or modif
