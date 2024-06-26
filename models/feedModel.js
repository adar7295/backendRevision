const { Schema, model } = require('../connection');
 
const mySchema = new Schema({
    name:String,
    title:String,
    image:String,
    createdAt : {type: Date, default:Date.now}
})

module.exports=model( 'feed' , mySchema );