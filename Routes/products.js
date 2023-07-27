const express=require('express')

const router= express.Router();
const Products_controller=require('../Controller/products_controller')


router.post('/create',Products_controller.create);






module.exports=router;