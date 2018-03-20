const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to db.');
    }
    console.log('Connected to db');

//     db.collection('Todos').findOneAndUpdate(
//         {_id: new ObjectID("5ab148603af3691854b5d78e")},
//     {$set:{
//         completed:true
//     }},
// {
//     returnOriginal:false
// }).then((result)=>{
//     console.log(result);
// });

db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID("5ab06dbd81b95e3548b619bb")},
{$inc:{
    age:2
}},
{
returnOriginal:false
}).then((result)=>{
console.log(result);
});
});