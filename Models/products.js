const mongoose=require('mongoose')

const productsSchema=new mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type: String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const products=mongoose.model('products',productsSchema);


module.exports=products;