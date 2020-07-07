const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const { URI } = require('./keys');


mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.connection.on('connected', () => {
    console.log("Connected");
});
mongoose.connection.on('error', (err)=>{
    console.log(err);
});


require('./models/user');
require('./models/post');



app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.use(require('./routes/user'));



app.listen(PORT,() => {
    console.log("Server is running ",PORT);
});