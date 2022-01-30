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
