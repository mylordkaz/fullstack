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
app.get('/todos', todosRoute);
app.get('/todos/:id', todosRoute);
app.put('/todos/:id', todosRoute);
app.delete('/todos/:id', todosRoute);

//test
app.get('/', (req, res) => {
  res.send("What's up brooo ?!");
});

app.listen(process.env.BACK_PORT, () => {
  console.log('Server run, port :${BACK_PORT}');
});
