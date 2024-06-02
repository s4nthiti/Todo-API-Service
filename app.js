const express = require('express')
const todoRoutes = require('./routes/todo.routes');

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, world!')
});

app.use('/api/todos', todoRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000')
})