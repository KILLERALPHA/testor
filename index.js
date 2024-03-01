const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.get('/Crackwar', (req, res) => {
  // Handle specific functionality for '/Crackwar' route
  res.send('Hello from Crackwar!');
});

// For all other routes
app.use((req, res) => {
  res.status(404).json({ status: 'banned', reason: 'The page was not found' });
});

// Export the Express app
module.exports = app;
