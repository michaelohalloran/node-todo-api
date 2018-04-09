
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=> {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({completed:false}).toArray().then((docs)=> {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=> {
    //     console.log('Unable to fetch todos',err);
    // });


    // db.collection('Todos').find({
    //     _id: new ObjectID('5acb1471e73be005d82b287c')
    // }).toArray().then((docs)=> {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=> {
    //     console.log('Unable to fetch todos',err);
    // });

    // db.collection('Todos').find().count().then((count)=> {
    //     console.log(count);
    // }, (err)=> {
    //     console.log('Unable to fetch todos',err);
    // });

    db.collection('Users').find({name: "Bob"}).toArray().then((docs)=> {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=> {
        console.log('Unable to fetch todos',err);
    });

    // client.close();
});