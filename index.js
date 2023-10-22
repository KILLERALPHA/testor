const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const currentDate = new Date();
  const port = process.env.PORT;
  res.send('Current Date and Time: ' + currentDate + ' PORT : '+port);
});

module.exports = app;
