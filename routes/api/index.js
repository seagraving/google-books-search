const router = require("express").Router();
const bookRouter = require("./books")
const googleRouter = require("./googles")


router.use("/books", bookRouter)

router.use("/googlebooks", googleRouter)


module.exports = router;