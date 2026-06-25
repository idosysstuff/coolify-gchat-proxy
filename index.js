const express = require('express');
const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
  const { message, event, url } = req.body;
  const text = `*[${event}]* ${message}\n${url ?? ''}`;

  await fetch(process.env.GOOGLE_CHAT_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });

  res.sendStatus(200);
});

app.listen(3000, () => console.log('Listening on 3000'));
