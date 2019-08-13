//Importacão dos modulos
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

//Definindo a constante da porta
const port = normalizePort(process.env.PORT || '3000');

//Definicão da porta
app.set('port',port);

//Instacia do servidor
const server = http.createServer(app);

//Servidor comeca a escutar a porta 3000
server.listen(port);

//Aplicação da função para tratametos de erro no servidor
server.on('error', onError);
server.on('listening', onListening);


//Funcão para debugar o servidor
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ?
    'pipe' + addr :
    'port' + addr.port;
    debug('Listening on '+ bind);

}
//Funcão para normalizar a porta
function normalizePort(val){
    const port = parseInt(val, 10)

    if (isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }
    return false;
}

//Função para tratar erros no servidor
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
    'Pipe' + port :
    'Port' + port;

    switch(error.code){
        case 'EACESS':
            console.error(bind + 'requires elevated privileges')
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in uso');
            process.exit(1);
            break;
        default:
            throw error;
    }
}