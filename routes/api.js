var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();


/* GET PECs */
router.get('/deputados', async function(req, res, next) {
  res.send(await fetch('https://dadosabertos.camara.leg.br/api/v2/deputados?pagina=6&itens=100'));
});

module.exports = router;
