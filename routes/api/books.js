const bookController = require("../../controllers/booksController")
const router = require("express").Router()

router.route("/").get(bookController.getBooks)
                 .post(bookController.saveBooks)

 
router.route("/:id").delete(bookController.deleteBooks)


module.exports = router;