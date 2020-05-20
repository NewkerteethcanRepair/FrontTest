var express = require('express');
var router = express.Router();

const { addClasses, getClasses } = require('../service/classesService');

/* GET home page. */
router.post('/addClasses', async function (req, res, next) {
    res.send(await addClasses(req.body));
});
router.get('/getClasses', async function (req, res, next) {
    res.send(await getClasses());
});

router.get('/', async function(req, res, next) {
    const { callback } = req.query;
    const classesData = await getClasses();

    res.send(`${callback}(${JSON.stringify(classesData)})`);
    // res.jsonp();
})

module.exports = router;
