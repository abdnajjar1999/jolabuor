const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // or any other port you prefer

// Serve static files from the root directory
app.use(express.static(__dirname));

// Define a route for the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server and listen on all network interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});
