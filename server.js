const express = require('express');
const app = express();
const port = 3000;

const fs = require("fs");

fs.readFile("data.json", (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    let jsonData = JSON.parse(data);
    module.exports=jsonData
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.listen(port, () => {
    console.log("Server is running on port 3000");
});