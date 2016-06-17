var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

http.createServer(app).listen(8080, '127.0.0.1', function() {
    console.log('Servidor HALL escutando na porta: ' + this.address().port);
});

