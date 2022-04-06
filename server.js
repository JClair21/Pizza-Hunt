//importing mongoose
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

//tells mongoose which database to connect to-MONGODB_URI IS ENVIRONMENT USED WHEN DEPLOYED TO HEROKU
mongoose.connect(process.env.MONGODB_URI || 'mongodb: localhost: 27017/pizza-hunt' , {
    userNewUrlParser: true,
    useUifiedTopology: true
});

//Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => {
    console.log(`🌍 Connected on localhost:${PORT}`);
});

