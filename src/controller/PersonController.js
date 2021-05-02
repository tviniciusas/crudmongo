const Person = require('../model/Person')

module.exports = {

    async personIndex (req,res) {

        await Person.find({}).lean().then((results => {
            res.render('home', {results})
        })).catch((err =>{
            console.log('error to index persons '+err)
        }))
    },

    async personSave (req,res) {

        const persons = {name, gender, age} = req.body
        
        await Person.create(persons).then((results) => {
            res.redirect('/')
        }).catch(error =>{
            console.log('something make a error to save person please verify ' + error)
        })
    },

    async personDelete (req,res) {

        const _id = req.params.id
        await Person.deleteOne({ _id: _id}).then((results) => {
            res.redirect('/')
        }).catch(error =>{
            console.log('not success to delete ' +error)
        })
    },

    async personUpdate (req,res) {

        
    }


}