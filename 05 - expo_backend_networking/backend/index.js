import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/v1/hello-world', (_req, res) => {
  return res.json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
