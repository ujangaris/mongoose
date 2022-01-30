// jshint esversion:6

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
// Getting error (node:8640) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option {useUnifiedTopology: true} to the MongoClient constructor.
// Even though the console told me exactly what to do I decided to look it up online -- https://df.tips/t/topic/973/2
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  // After adding documents this line of code gets added to client.connect
  // insertDocuments(db, function () {
  //   client.close();
  // });

  // client.close();

  // Adding code to find all the documents after they have been Inserted
  findDocuments(db, function () {
    client.close();
  });
});

// CREATE - new Documents
const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany(
    [
      {
        name: 'Apple',
        score: 8,
        review: 'Great fruit!',
      },
      {
        name: 'Orange',
        score: 6,
        review: 'Kind of sour.',
      },
      {
        name: 'Banana',
        score: 4,
        review: 'Very sandy',
      },
    ],
    function (err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log('Inserted 3 documents into the collection');
      callback(result);
    }
  );
};

// READ - Find all Documents
const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function (err, fruits) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(fruits);
    callback(fruits);
  });
};
