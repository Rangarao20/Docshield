const  { Router } = require('express');
const router = Router();
const co = require('./contr');

router.get("/", co.getdoc_details);
router.put("/statapp", co.approve);
router.get("/signed", co.getsigned_details);
router.post("/signed", co.savedoc);
module.exports = router;