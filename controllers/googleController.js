const axios = require("axios");

module.exports = {
    getGoogleBooks: function(req, res) {
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+req.params.title).then(function(results){
            res.json(results.data.items)
        })
    }
}