// index.js
/*
const express = require('express')

const app = express()
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳 AHHH ')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app*/
//console.log("AHH BABY");

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const currentDate = new Date();
  res.send('Current Date and Time: ' + currentDate);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

module.exports = app;
