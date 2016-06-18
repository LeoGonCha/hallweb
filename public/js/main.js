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


		$routeProvider.when('/horas', {
			templateUrl: 'partials/horasEstudo.html',
			controller: 'HorasController'
		});

		$routeProvider.when('/reservas', {
			templateUrl: 'partials/minhaReserva.html',
			controller: 'ReservasController'
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