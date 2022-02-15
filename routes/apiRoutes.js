const router = require("express").Router();

const sample = require('./sample');




router.use('/sample', sample);




module.exports = router;