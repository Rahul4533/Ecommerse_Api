const Products=require('../Models/products')

module.exports.create=function(req,res){
const Product= req.body;
    Products.create(req.body);

    res.json({
        data: {
          Product
        }
    })

}