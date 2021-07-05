const express = require('express');
const app = express();

const port = process.env.PORT || 3007; 


app.listen(port, () => {
    console.log(`Connected to port ${port}`);
}); 

app.use(express.static('public')); 