const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from devops-cloud-ci-cd sample app!',
    uptime: process.uptime().toFixed(0),
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
