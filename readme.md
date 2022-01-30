## Section 27: Mongoose | create data

    Documentation: https://docs.mongodb.com/drivers/node/current/quick-start/

    touch app.js
    npm init -y
    npm install mongodb@3.5.9
    npm install mongoose

### 336. Introduction to mongoose | create data

    buka terminal baru:

        mongo
        use fruitsDB
        switched to db fruitsDB
        > db.fruits.find()
        { "_id" : ObjectId("61f6325ff8ac5f5912835671"), "name" : "Apple", "rating" : 7, "review" : "Pretty solid as a fruit.", "__v" : 0 }

### 336. Introduction to mongoose | InsertMany

    buka terminal baru:

        mongo
        use fruitsDB
        > show collections
        fruits
        people
        > db.people.find()
        { "_id" : ObjectId("61f6340d183fcb9a84591f6d"), "name" : "John", "age" : 37, "__v" : 0 }
        > db.fruits.find()
        { "_id" : ObjectId("61f6325ff8ac5f5912835671"), "name" : "Apple", "rating" : 7, "review" : "Pretty solid as a fruit.", "__v" : 0 }
        { "_id" : ObjectId("61f635b0f0cb60939c593f4e"), "name" : "Kiwi", "review" : "The best fruit!", "__v" : 0 }
        { "_id" : ObjectId("61f635b0f0cb60939c593f4f"), "name" : "Orange", "review" : "Too sour for me", "__v" : 0 }
        { "_id" : ObjectId("61f635b0f0cb60939c593f50"), "name" : "Banana", "review" : "Weird texture", "__v" : 0 }
        { "_id" : ObjectId("61f635f12068ba64f70b51c2"), "name" : "Kiwi", "review" : "The best fruit!", "__v" : 0 }
        { "_id" : ObjectId("61f635f12068ba64f70b51c3"), "name" : "Orange", "review" : "Too sour for me", "__v" : 0 }
        { "_id" : ObjectId("61f635f12068ba64f70b51c4"), "name" : "Banana", "review" : "Weird texture", "__v" : 0 }
