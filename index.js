import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(req.someTestKey ? 'Yo' : 'Optional chaining');
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

