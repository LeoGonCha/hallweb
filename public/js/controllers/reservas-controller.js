angular.module('hall').controller('ReservasController', function($scope, $http){
		
	$scope.reservas = [];

	$http.get('listaReservas').success(function(reservas){
		$scope.reservas = reservas;
		console.log(reservas);
	}).error(function(erro){
		console.log(erro);
	});

	$scope.cancelar = function(reserva) {

		console.log(reserva);

	};

});
