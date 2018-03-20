const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to db.');
    }
    console.log('Connected to db');

    // db.collection('Todos').deleteMany({text:'Something to do'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text:'Something to do'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
    //     console.log(result);
    // });

    //db.collection('Users').findOneAndDelete({_id: new ObjectID("5ab0892996727ff4a3fadcc9")});
});