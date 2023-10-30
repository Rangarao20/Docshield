const  { Router } = require('express');
const router = Router();
const conr = require('./conr');

router.get("/", conr.getissue_det);
router.get("/approved",conr.getapproved_det);
module.exports = router;