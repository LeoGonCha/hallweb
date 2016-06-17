angular.module('hall').controller('HorasController', function($scope, $http){

	$scope.pacotes = [];

	$http.get('listaPacotes').success(function(pacotes){
		$scope.pacotes = pacotes;
		console.log(pacotes);
	}).error(function(erro){
		console.log(erro);
	});

	$scope.selecionaPacote = function(pacote) {

		console.log(pacote);

	};

	
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
