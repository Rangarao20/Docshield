const  { Router } = require('express');
const router = Router();
const con = require('./controller');

router.get("/", con.getdoctype);
router.post("/addc",con.addCertificate);

module.exports = router;