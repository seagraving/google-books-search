const router = require("express").Router();
const googleController = require("../../controllers/googleController")

router.route("/:title").get(googleController.getGoogleBooks)

module.exports = router;
