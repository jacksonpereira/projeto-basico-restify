const restify = require('restify');

function temNome(req, res, next) {
    if (req.params.nome) {
        next();
    } else res.send('Inválido')
}

function resposta(req, res, next) {
    res.send({
        mensagem: `Hello World, ${req.params.nome}`
    });
    next();
}
const server = restify.createServer();

server.use((req, res, next) => {
    console.log("Passou!");
    next();
})

server.get('/mensagem/:nome', temNome, resposta);
server.get('/', (req, res) => {
    res.send({
        mensagem: 'Seja bem vindo!'
    });
});
server.listen(3000, () => {
    console.log("Servidor em pé!");
});