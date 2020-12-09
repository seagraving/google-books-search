const bookController = require("../../controllers/booksController")
const router = require("express").Router()

router.route("/").get(bookController.getBooks)
                 .post(bookController.saveBooks)


// in order to add/delete books to the database, match with :id
router.route("/:id").delete(bookController.deleteBooks)
                .get(bookController.getBooks)
                .delete(bookController.deleteBooks)



module.exports = router;