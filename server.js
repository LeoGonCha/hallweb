var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');
	
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || 'localhost';
	
http.createServer(app).listen(server_port, server_ip_address, function() {
    console.log('Servidor HALL ' + server_ip_address + ' escutando na porta: ' + this.address().port);
});

