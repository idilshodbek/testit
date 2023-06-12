const express = require('express');
const app = express();
const port = 3000;

// Endpoint for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Endpoint for a sample API route
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'Stranger';
  res.json({ message: `Hello, ${name}!` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
