const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'docs')));

// Define routes for login, reset, and items pages

// Define routes for login, reset, and items pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
  app.get('/reset', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'reset.html'));
  });
  
  app.get('/items', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'items.html'));
  });


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
