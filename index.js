const express= require('express')

const port=8080;

const app= express();





app.listen(port,function(err){
   if(err){
    console.log('Error While Establish the server');
    return;
   }

   console.log(`Server Establish SuccessFully ON PORT:: ${port}` );
})