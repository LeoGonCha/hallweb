var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
	app.route('/inicia')
		.get(api.iniciaBanco);

	app.route('/listaCidades')
		.get(api.listaCidades);

  	app.route('/listaPacotes')
    	.get(api.listaPacotes);

	app.route('/listaReservas')
	    .get(api.listaReservas);

	app.get('/home', function(req, res){
		res.sendFile(path.resolve('public/home.html'));
	});

	app.route('/listaSessoes/:dia')
        .get(api.listaSessoesDia);

	app.route('/listaTempos')
        .get(api.listaTempos);        

  // habilitando HTML5MODE
  app.all('/*', function(req, res) {
      res.sendFile(path.resolve('public/index.html'));
  });


};