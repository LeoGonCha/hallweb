angular.module('hall').controller('AutenticacaoController', function($scope, $http){

	$scope.usuario = [];
	$scope.senha = [];

	$scope.nome = [];
	$scope.cpf = [];
	$scope.tel = [];
	$scope.senhaconf = [];




	$scope.autenticar = function() {

        if ($scope.formlogin.$valid) {
			
			console.log($scope.usuario);
            console.log($scope.senha);
          
            
        } else {
            $scope.mensagem = 'Formulário inválido!';
            console.log('Formulário inválido!');
        }
    };


	$scope.cadastrar = function() {

        if ($scope.formcadastro.$valid) {
			
			console.log($scope.nome);
            console.log($scope.cpf);
          	console.log($scope.tel);
          	console.log($scope.usuario);
            console.log($scope.senha);
            console.log($scope.senhaconf);
          
            
            
        } else {
            $scope.mensagem = 'Formulário inválido!';
            console.log('Formulário inválido!');
        }
    };

});
