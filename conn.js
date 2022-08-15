// HARDCODED in app.js

const mongoose = require('mongoose');
const uri = "mongodb+srv://root:ROOTpass321@atlascluster.ezakwsw.mongodb.net/Dairy?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  .then( (result) => {
    console.log("connected to DB")
  })
  .catch((err) => {
    console.log(err) 
  })
;

/*
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/