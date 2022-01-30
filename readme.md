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

### 337. Reading from Your Database with Mongoose

    pada terminal matikan dan nyalana server saja : nodemon app.js

### 338. Data Validation with Mongoose

    Documentation: https://mongoosejs.com/docs/validation.html

    pada terminal matikan dan nyalana server saja : nodemon app.js
    maka akan terjadi error dan notif akan muncul sesuai yang kita buat pada require name.

### 339. Updatingend Deleting Data Using Mongoose

    Documentation: https://mongoosejs.com/docs/queries.html
    pada terminal matikan dan nyalana server saja : nodemon app.js
    pada terminal baru coba masuk ke:
        mongo
        use fruitsDB
        show collections
        db.people.find()
         maka data sudah terhapus.

### 340. Establishing Relationships and Embededing Documents Using Mongoose part 1

    pada terminal baru :
        use fruitsDB
        switched to db fruitsDB
        db.people.find()
        { "_id" : ObjectId("61f65c3e9c74f1f4a099c5d1"), "name" : "Amy", "age" : 12, "favouriteFruit" : { "name" : "Pineapple", "review" : "Great fruit.", "_id" : ObjectId("61f65c3e9c74f1f4a099c5d0") }, "__v" : 0 }

        dapat dilihat data person terhubung dengan fruit

### 340. Establishing Relationships and Embededing Documents Using Mongoose part 2

    pada terminal baru :
        use fruitsDB
        switched to db fruitsDB
        db.people.find().pretty()
        {
                "_id" : ObjectId("61f65deca510331dc0e849ee"),
                "name" : "John",
                "age" : 34,
                "__v" : 0,
                "favouriteFruit" : {
                        "name" : "Mango",
                        "review" : "Best fruit.",
                        "_id" : ObjectId("61f65ee2f721c7297af1d316")
                }
        }
        {
                "_id" : ObjectId("61f65e3d1f409a45e072f900"),
                "name" : "Amy",
                "age" : 34,
                "favouriteFruit" : {
                        "name" : "Pineapple",
                        "review" : "Decent fruit.",
                        "_id" : ObjectId("61f65e3d1f409a45e072f8ff")
                },
                "__v" : 0
        }
