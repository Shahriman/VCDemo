const express = require('express');
const app = express();
const port = 5000;

// Define a route 'for the API
app.get('', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});