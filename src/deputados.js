var fetch = require('node-fetch');

const Deputados = {

    serviceUrl: '/api/deputados',

    getList: function() {
        return fetch(url);
    },

    getTable: function() {
        Deputados.getList()
        .then(res => console.log(res))
    }


}