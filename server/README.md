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
const express = require('express');
const cors = require('cors');
const todosRoute = require('../routes/todos');

const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// todos routes
app.post('/todos', todosRoute);

//test
app.get('/', (req, res) => {
res.send("What's up brooo ?!");
});

app.listen(process.env.PORT, () => {
console.log('Server run');
});

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
