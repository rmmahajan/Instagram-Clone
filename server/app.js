const express = require('express');
const app = express();
const PORT = 5000;

app.get('/',(req,res) => {

    res.send("Hejg");

});

app.listen(PORT,() => {
    console.log("Server is running ",PORT);
});