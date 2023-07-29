const Products = require("../Models/products");

//Insert The data Into database
module.exports.create = function (req, res) {
  const Product = req.body;
  Products.create(req.body);

  res.json({
    data: {
      Product
    },
  });
};

// get all the data from database
module.exports.products = async (req, res) => {
  const products = await Products.find({});

  res.json({
    data: {
      products,
    },
  });
};

//  delete the record by id

module.exports.delete = function(req, res) {

   
    console.log(req.params.productID);
 

Products.deleteOne( {_id: req.params.productID})


  res.json({
    data: {
      message: "product deleted",
    },
})
    
 
};



// update the qunatity


module.exports.update=async function(req,res){

  const ID= req.params.id;

  try {
    const result= await Products.findById(ID);

    //Now getting the number and add the to the exist quantity into new variable

    const newquantity= parseInt(result.quantity)+ parseInt(req.query.number)
   
    // Now Find the Document by id and Update the new value init

    const updatevalue= await Products.findByIdAndUpdate(Id.{
      quantity: newquantity
    })

    res.json({
      data:{
        updatevalue
      }
    })


  } catch (error) {
    
    res.json({
      message: "Error While Find The data "
      
    })
  }

}
