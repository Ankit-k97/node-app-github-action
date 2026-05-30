import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the root route!');
});

app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

app.get('/api/products', (req, res) => {
  res.json([{ id: 101, name: 'Laptop' }, { id: 102, name: 'Mouse' }]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
