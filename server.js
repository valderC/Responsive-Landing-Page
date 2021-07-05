const express = require('express');
const app = express();

const port = process.env.PORT || 3007; 

app.use(express.static('Public')); 


app.listen(port, () => {
    console.log(`Connected to port ${port}`);
}); 