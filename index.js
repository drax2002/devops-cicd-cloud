const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // serve HTML/JS

let todos = []; // in-memory storage for demo

// API endpoints
app.get('/api/todos', (req, res) => res.json(todos));
app.post('/api/todos', (req, res) => {
  const { task } = req.body;
  if (task) todos.push({ task, done: false });
  res.json(todos);
});
app.put('/api/todos/:index', (req, res) => {
  const i = req.params.index;
  if (todos[i]) todos[i].done = !todos[i].done;
  res.json(todos);
});
app.delete('/api/todos/:index', (req, res) => {
  const i = req.params.index;
  if (todos[i]) todos.splice(i, 1);
  res.json(todos);
});

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
