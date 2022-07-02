import { App } from '@tinyhttp/app';
import { cors } from '@tinyhttp/cors';

const PORT = 3000;
const app = new App();

app.use(cors());

app.get('/hello', (req, res) => {
  res.json({
    hello: 'world',
  });
});

app.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});
