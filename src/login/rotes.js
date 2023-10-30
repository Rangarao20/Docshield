const  { Router } = require('express');
const router = Router();
const controller = require('./control');


router.get("/", controller.getuserdetails);
router.get("/:username", controller.getusername);

module.exports = router;