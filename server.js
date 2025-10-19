const express = require('express');
const app = express();

const port = process.env.PORT || 3007;

// Serve static files from the project root
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});