// se requiere inicializar ts con el comando tsc -- init

import * as http from 'http'

const server = http.createServer((req, res)=> {

    res.writeHead(200, {'Content-Type': 'Text/plain'});
    res.write ('Hello world');
    res.end();
});

server.listen(3000, ()=>console.log(`server on port ${3000}` ));

