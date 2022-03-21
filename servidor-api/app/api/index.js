/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}


api.dados = function(req, res) {

    res.json([
        { id: 1, montante: 200.5, vezes: 2 },
        { id: 2, montante: 100.2, vezes: 5 },
        { id: 3, montante: 50.5, vezes: 1 },
        { id: 4, montante: 70.5, vezes: 2 }
    ]);
    
};


module.exports = api;