const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to db.');
    }
    console.log('Connected to db');

    db.collection('Users').find({name:'Ant'}).toArray().then((docs)=>{
        console.log("users:");
        console.log(JSON.stringify(docs,undefined,2));
    });

    db.close();
});