angular.module('hall', ['minhasDiretivas','ngAnimate','ngRoute'])
	.config(function ($routeProvider, $locationProvider){

		$locationProvider.html5Mode(true);

		$routeProvider.when('/salas', {
			templateUrl: 'partials/salasEstudo.html',
			controller: 'SalasController'
		});

		$routeProvider.when('/listaSessoes/:dia', {
			templateUrl: 'partials/salasEstudo.html',
			controller: 'SalasController'
		});

		$routeProvider.when('/listaTempos', {
			templateUrl: 'partials/salasEstudo.html',
			controller: 'SalasController'
		});


		$routeProvider.when('/horas', {
			templateUrl: 'partials/horasEstudo.html',
			controller: 'HorasController'
		});

		$routeProvider.when('/reservas', {
			templateUrl: 'partials/minhaReserva.html',
			controller: 'ReservasController'
		});

		$routeProvider.when('/login', {
			templateUrl: 'partials/autenticacao.html',
			controller: 'AutenticacaoController'
		});

		$routeProvider.when('/registro', {
			templateUrl: 'partials/registro.html',
			controller: 'AutenticacaoController'
		});

		$routeProvider.when('/homepage', {
			redirectTo: function() {
            	window.location =  '/home';
        	}
		});

		$routeProvider.otherwise({
			redirectTo: '/salas'
		});
	});