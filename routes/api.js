var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

/* GET deputados */
router.get('/deputados', async function(req, res, next) {
  res.send(await fetch('https://dadosabertos.camara.leg.br/api/v2/deputados').then(res => res.json()).then(json => json.dados));
});

module.exports = router;
