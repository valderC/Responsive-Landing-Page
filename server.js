const express = require('express');
const app = express();
const path = require('path'); 

const port = process.env.PORT || 3007; 

// app.get('/', function (req, res) {
//     res.render('public', {});
//   });

app.use(express.static('Public')); 

// app.use(express.static(path.join(__dirname, "Public", "build")))

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "Public", "index.html"));
// });

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
}); 