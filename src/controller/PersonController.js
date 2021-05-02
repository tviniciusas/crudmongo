const Person = require('../model/Person')

module.exports = {

 

    async personIndex (req,res) {

        await Person.find({}).lean().then((results => {
            res.render('home', {results})
        })).catch((err =>{
            console.log('error to index persons '+err)
        }))
    }



}