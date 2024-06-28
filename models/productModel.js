const{Schema,model}= require('../connection');

const mySchema = new Schema({
    name : String,
    price : Number,
    category : String,
    image : String,
    createdAt : {type: Date, default: Date.now}
})

module.exports = model('product',mySchema);