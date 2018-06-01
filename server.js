var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');
	
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
	
http.createServer(app).listen(server_port, server_ip_address, function() {
    console.log('Servidor HALL ' + server_ip_address + ' escutando na porta: ' + this.address().port);
});


/*
var mysql = require('mysql');


var con = mysql.createConnection({
  host     : process.env.OPENSHIFT_MYSQL_DB_HOST,
  user     : process.env.OPENSHIFT_MYSQL_DB_USERNAME,
  password : process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
  port     : process.env.OPENSHIFT_MYSQL_DB_PORT,
  database : process.env.OPENSHIFT_APP_NAME
 });
 
 
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
*/
