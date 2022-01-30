// jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please check your data entry, no name specified'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: '',
  rating: 10,
  review: 'Yummy',
});

// fruit.save();
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model('Person', personSchema);
const person = new Person({
  name: 'John',
  age: 37,
});
// person.save();

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Succesfully saved all the fruits to fruitsDB');
//   }
// });

// READ - Find all Documents
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // nyalakan ini jika ingin mematikan server
    // mongoose.connection.close()

    // console.log(fruits);
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// Update document
// Fruit.updateOne(
//   { _id: '61f6452c900b02440ffc99c6' },
//   { name: 'Peach' },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Successfuly updated the document.');
//     }
//   }
// );

// Delete document
// Fruit.deleteOne({ name: 'Peach' }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfuly deleted the document');
//   }
// });

// Delete many document
Person.deleteMany({}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Succesfully deleted all the document');
  }
});
