const db = require("../models")

module.exports = {
    getBooks: function(req, res) {
       db.Book.find().then(function(results){
           res.json(results)
       })
    },
    saveBooks: function(req, res) {
        db.Book.create(req.body).then(function(results){
            res.json(results)
        })
    },
    deleteBooks: function(req, res) {
        db.Book.deleteOne({_id:req.params.id}).then(function(results){
            res.json(results)
        })
    }
}