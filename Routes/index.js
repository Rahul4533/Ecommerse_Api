const  express=require('express')

const router=express.Router();

const home_controller=require('../Controller/home_controller')


router.get('/',home_controller.home)

router.use('/products',require('./products'));






module.exports=router;