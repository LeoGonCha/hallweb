var salasModule = angular.module('salasModule',[]);

salasModule.controller("salasControl", function($scope) {

		
	$scope.cidades = [
		{codigo: 1, nome: 'Brasília'}, 
		{codigo: 2, nome: 'Taguatinga'}
	];

	$scope.limpaLojasPosicoes = function() {
		$scope.mostraLojas = false;
		$scope.mostraPosicoes = false;
	}

	$scope.selecionaCidade = function(cidade) {
		if(cidade.codigo == 1){
			$scope.lojas = [
				{codigo: 1, nome: 'Loja01'},
				{codigo: 2, nome: 'Loja02'}
			];
		} else {
			$scope.lojas = [
				{codigo: 3, nome: 'Loja03'}
			];
		}
		$scope.navLojas = [
			{nome: cidade.nome}
		];
		$scope.mostraLojas = true;
	} 

	$scope.selecionaLoja = function(loja) {
		if(loja.codigo == 1){
			$scope.posicoes = [
				{codigo: 1, nome: 'Individuais', qtd: 14},
				{codigo: 2, nome: 'Para 2 pessoas', qtd: 5},
				{codigo: 3, nome: 'Para 2 pessoas', qtd: 2}
			];
		} else if(loja.codigo == 2){
			$scope.posicoes = [
				{codigo: 1, nome: 'Individuais', qtd: 12},
				{codigo: 2, nome: 'Para 2 pessoas', qtd: 8},
				{codigo: 3, nome: 'Para 4 pessoas', qtd: 6}
			];
		} else if(loja.codigo == 3){
			$scope.posicoes = [
				{codigo: 1, nome: 'Individuais', qtd: 4},
				{codigo: 2, nome: 'Para 2 pessoas', qtd: 1},
				{codigo: 3, nome: 'Para 4 pessoas', qtd: 0}
			];
		}
		if($scope.navLojas.length > 1){
			$scope.navLojas.splice(1,1);
		}
		$scope.navLojas.push({nome: loja.nome});
		$scope.mostraPosicoes = true;
	} 


});