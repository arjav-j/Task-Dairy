const express = require("express")
const ejs = require("ejs");
const { urlencoded } = require("express");
const mongoose = require('mongoose');
const taskRoutes = require("./routes/taskRoutes")


const app  = express();         // express

//MonogoDB
const uri = "mongodb+srv://root:ROOTpass321@atlascluster.ezakwsw.mongodb.net/Dairy?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
  .then( (result) => {
    console.log("connected to DB")
  })
  .catch((err) => {
    console.log(err) 
  })
;


// View Engine and Static Files
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(urlencoded({extended: true}));

// Listen
app.listen(3000, 'localhost', () => {
    console.log("app started");
});


// Middleware & Routing

app.use('/tasks', taskRoutes);

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/', (req, res) => {
    res.redirect('/tasks');
});