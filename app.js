  //import express
const express = require('express');
// import mangoose
const mongoose = require('mongoose');
// import the feed routes
const feedRoutes = require('./routes/feed');
// create the express app
const app = express();
// to parse incoming json
app.use(express.json());
// forward any incoming request that starts with '/feed' to feedRoutes
app.use('/feed', feedRoutes);
// setup a database connection using mongoose
// past the connection string given from your atlas server
mongoose
  .connect(
    'mongodb+srv://kaymor2882:K%40g3m0lo@cluster0.cty7l.mongodb.net/drinkchoice?retryWrites=true&w=majority'
  )
  .then(result => {
    // listen to incoming requests on port 8080
    app.listen(3000);
  })
  .catch(err => console.log('err', err))