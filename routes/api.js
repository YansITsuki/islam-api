const express = require('express')
const fetch = require('node-fetch')
const fs = require('fs')
const __path = process.cwd();
const router = express.Router();
const Tahlil = require('../lib/tahlil.js')
const asmaulhusna = require('../lib/asmaulhusna.json')

loghandler = {
     notnabi: {
        status: `error`,
        author: `I T S U K I`,
        message: `Masukan Parameter Nabi Contoh: ?nabi=adam`
        },
     error: {
         status: `error`,
         code: 404,
         message: `Error Ngab`
     }
}

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
  let hasil = require('./../lib/asmaulhusna.json')
	res.json(asmaulhusna);
});
router.get('/niatsholat', (req, res) => {
    niatsholat = require('../lib/niatsholat.json')
    hasil = niatsholat.niatsholat
    res.json({
       status: 200,
       creator: `I T S U K I`,
       result: hasil
  })
});
router.get('/niatsholat/shubuh', (req, res) => {
    niatsholat = require('../lib/niatsholat.json')
    hasil = niatsholat.niatsholat
    res.json({
       status: 200,
       creator: `I T S U K I`,
       result: hasil.shubuh
  })
});
router.get('/niatsholat/dzuhur', (req, res) => {
    niatsholat = require('../lib/niatsholat.json')
    hasil = niatsholat.niatsholat
    res.json({
       status: 200,
       creator: `I T S U K I`,
       result: hasil.dzuhur
  })
});
router.get('/niatsholat/ashar', (req, res) => {
    niatsholat = require('../lib/niatsholat.json')
    hasil = niatsholat.niatsholat
    res.json({
       status: 200,
       creator: `I T S U K I`,
       result: hasil.ashar
  })
});
router.get('/niatsholat/maghrib', (req, res) => {
    niatsholat = require('../lib/niatsholat.json')
    hasil = niatsholat.niatsholat
    res.json({
       status: 200,
       creator: `I T S U K I`,
       result: hasil.maghrib
  })
});
router.get('/niatsholat/isya', (req, res) => {
    niatsholat = require('../lib/niatsholat.json')
    hasil = niatsholat.niatsholat
    res.json({
       status: 200,
       creator: `I T S U K I`,
       result: hasil.isya
  })
  .catch(e => {
      res.json(loghandler.error)
  })
});
router.get('/kisahnabi', (req, res) => {
    var nabi = req.query.nabi;
    
    if(!nabi) return res.json(loghandler.notnabi)
    
    fetch(encodeURI(`https://raw.githubusercontent.com/YusufGabut/kisahnabi/main/${nabi}.json`))
    .then(response => response.json())
    .then(data => {
        var hasil = data
        res.json({
            status: 200,
            creator: `I T S U K I`,
            result: hasil
        })
    })
    .catch(e => {
        res.json(loghandler.error)
    })
})
router.get('/tahlil', Tahlil.getAllDoa)
router.get('/tahlil/:doa', Tahlil.getDoa)

module.exports = router;