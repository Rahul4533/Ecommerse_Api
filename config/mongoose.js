const mongoose= require('mongoose')

//  Connecting to DATABASE MongoDB
mongoose.connect('mongodb://localhost:27017/Products',{
    useNewUrlParser: true,

    useUnifiedTopology: true,

    family: 4,
})

const db=mongoose.connection;


// Connecting message
db.once('open',function(err){
    if(err){
        console.log('error while connecting to database')
        return
    }

    console.log('Success Fully connected to DataBase MongoDB');
})

module.exports=db;

