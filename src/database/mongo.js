const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/personapp', {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    
}).then(()=>{
    console.log('mongo is on')
}).catch((err)=>{
    console.log('error to conect '+ err)
})


module.exports = mongoose