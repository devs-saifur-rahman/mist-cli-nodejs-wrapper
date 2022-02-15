const router = require("express").Router();
const responseObj = require("../helpers/responseObj");


router.get(
    '/getSample',
    (req, res) => {
        res.status(200).send(responseObj.Success('Successfull'));
    }
);




module.exports = router;