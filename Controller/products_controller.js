const Products=require('../Models/products')


//Insert The data Into database
module.exports.create=function(req,res){
const Product= req.body;
    Products.create(req.body);

    res.json({
        data: {
          Product
        }
    })

}

// get all the data from database
module.exports.products= async (req,res)=>{

  const products= await Products.find({});

  res.json({
    data:{
      products
    }
  })

}
