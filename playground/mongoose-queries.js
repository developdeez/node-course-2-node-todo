const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id='5ab42d4458faa2c43c5723c4';

if(!ObjectID.isValid(id)){
    console.log('Id not valid');
}

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     if(!todos){
//         return console.log('Id not found');
//     }
//     console.log('Todos', todos);
// }).catch((e)=>console.log(e));

// Todo.findOne({
//     _id:id
// }).then((todos)=>{
//     if(!todos){
//         return console.log('Id not found');
//     }
//     console.log('Todos', todos);
// }).catch((e)=>console.log(e));

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo', todo);
}).catch((e)=>console.log(e));

User.findById("5ab176fa69a4ba7805e47f0d").then((user)=>
{
    if(!user){
        return console.log('user not found');
    }
    console.log(JSON.stringify(user,undefined,2));
},(e)=>{console.log(e);
});