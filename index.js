const express= require('express')

const port=8080;

const app= express();

//Middle Ware

app.use(express.urlencoded({extended: true}));

app.use(express.json());










const db=require('./config/mongoose');

app.use('/',require('./Routes'));

// Establish the Server
app.listen(port,function(err){
   if(err){
    console.log('Error While Establish the server');
    return;
   }

   console.log(`Server Establish SuccessFully ON PORT:: ${port}` );
})