// const {MongoClient, Collection} = require("mongodb")
// const assert  = require('assert');
// const url = 'mongodb://localhost:27017/';
// const dbName = 'myProject';
// const client = new MongoClient(url);
// client.connect((err)=>{
//     assert.equal(null,err);
//     console.log("Connected successfully to server");
//     const db = client.db(dbName);
//     insertDocuments(db);
//     client.close();
// }
// )

// const insertDocuments = function(db){
//     const collection = db.collection('documents');
//     collection.insertMany([{a:1},{b:2},{c:3}])
//     .then(result=>console.log)
//     .catch(err=>console.log)
// }

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", function () {
  console.log("Cannot establish connection");
});
db.once("open", function () {
  console.log("Connection successful");
});

const schema = new mongoose.Schema({});
const model = mongoose.model("teacher", schema);
model.find({}).then((res) => {
  console.log(res.__v);
});
