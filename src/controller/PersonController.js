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

        await Person.findOne({ _id: req.body.id}).then((persons) => {

            persons.name = req.body.name
            persons.gender = req.body.gender
            persons.age = req.body.age

            console.log(persons)

            persons.save().then(() =>{
                res.redirect('/')
            }).catch(e =>{
                console.log('error to update a person ' +e)
            })
        })
    },

    async personFind (req,res) {
        await Person.findOne({_id:req.params.id}).lean().then((person) => {
            res.render('update-person' , {person} )
        })
    },

    async personRenderAdd (req,res) {
        res.render('add-new-person')
    }
}