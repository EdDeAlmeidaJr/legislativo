const { default: Axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET PECs */
router.get('/deputados', async function(req, res, next) {
  const pecs = await Axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados?itens=100');
  res.send(pecs);
});

module.exports = router;
