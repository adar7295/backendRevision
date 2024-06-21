const mongoose = require('mongoose');

const url ="mongodb+srv://adarsh7295:1234@cluster0.x3kbjni.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});