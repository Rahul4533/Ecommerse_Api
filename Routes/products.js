const express=require('express')

const router= express.Router();
const Products_controller=require('../Controller/products_controller')


router.post('/create',Products_controller.create);

router.get('/',Products_controller.products);




module.exports=router;