const express = require('express')
const __path = process.cwd();
const router = express.Router();
const asmaulhusna = require('../lib/asmaulhusna.json')

router.get('/asmaulhusna', (req, res) => {
let randomProperty = function(asmaulhusna) {
    let keys = Object.keys(asmaulhusna);
    return asmaulhusna[keys[keys.length * Math.random() << 0]];
 };
let k, n = 0;
JSON.stringify(asmaulhusna, (key, value) => (key && ++n || value));
n *= Math.random();
JSON.stringify(asmaulhusna, (key, value) => (key && --n | 0 || (k = key) || value));
res.json(asmaulhusna[k]);
});
router.get('/asmaulhusna2', (req, res) => {
	res.json(asmaulhusna);
});

module.exports = router;