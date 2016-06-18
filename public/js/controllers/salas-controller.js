angular.module('hall').controller('SalasController', function($scope, $http, $routeParams){

	$scope.cidades = [];
	$scope.cidade = [];
	$scope.lojas = [];
	$scope.loja = [];
	$scope.posicoes = [];
	$scope.posicao = [];

	$scope.navLojas = [{nome: ''}];

	$scope.mostraCidades = true;
	$scope.mostraLojas = false;
	$scope.mostraData = false;
	$scope.mostraPosicoes = false;

	$scope.listaSessoes = [];

	var data = null;


	$http.get('listaCidades').success(function(cidades){
		$scope.cidades = cidades;
		console.log(cidades);
	}).error(function(erro){
		console.log(erro);
	});

	$scope.limpaLojasPosicoes = function() {
		$scope.navLojas = [{nome: ''}];
		$scope.mostraCidades = true;
		$scope.mostraLojas = false;
		$scope.mostraData = false;
		$scope.mostraPosicoes = false;
		
	};

	$scope.selecionaCidade = function(cidade) {

		$scope.cidade = cidade;
		$scope.lojas = cidade.lojas;

		console.log(cidade);

		if(cidade != null){
			$scope.navLojas = [
				{nome: cidade.nome}
			];
			$scope.mostraCidades = false;
			$scope.mostraLojas = true;
		} else {
			$scope.navLojas = [{nome: ''}];
		}
		
	};

	$scope.selecionaLoja = function(loja) {

		$scope.loja = loja;
		$scope.posicoes = loja.posicoes;

		console.log(loja);

		if(loja != null){
			if($scope.navLojas.length > 1){
				$scope.navLojas.splice(1,1);
			}
			$scope.navLojas.push({nome: loja.nome});
			$scope.mostraCidades = false;
			$scope.mostraLojas = false;
			$scope.mostraData = true;
			$scope.mostraPosicoes = false;
		} else {
			$scope.navLojas = [{nome: ''}];
		}
		
	};

	$scope.selecionaPosicao = function(posicao) {

		$scope.posicao = posicao;
		
		console.log(posicao);

		if(posicao != null){
			if($scope.navLojas.length > 3){
				$scope.navLojas.splice(1,1);
			}
			$scope.navLojas.push({nome: posicao.nome});
			$scope.mostraCidades = false;
			$scope.mostraLojas = false;
			$scope.mostraPosicoes = false;
		} else {
			$scope.navLojas = [{nome: ''}];
		}
		
	};

	$scope.reservar = function() {
		
		console.log('Cidade ' + $scope.cidade.nome);
		console.log('Loja ' + $scope.loja.nome);
		console.log('Posicao ' + $scope.posicao.nome);
		console.log('ID ' + $scope.posicao.codigo);
	};

	$scope.selecionaData = function() {
		if(data == null){
			alert('Selcione uma data!');
		} else {
			if($scope.navLojas.length > 2){
				$scope.navLojas.splice(1,1);
			}
			$scope.navLojas.push({nome: data.toString()});
			$scope.mostraData = false;
			$scope.mostraPosicoes = true;

			$http.get('/listaSessoes/:dia=' + data).success(function(listaSessoes){
				$scope.listaSessoes = listaSessoes[0].sessoes;
				console.log(listaSessoes);
			}).error(function(erro){
				console.log(erro);
			});
			
			
			/* //listar horas
			$http.get('listaCidades').success(function(cidades){
				$scope.cidades = cidades;
				console.log(cidades);
			}).error(function(erro){
				console.log(erro);
			});
			*/
		}
		
		console.log(data);
	};


	//https://tarruda.github.io/bootstrap-datetimepicker/
	//@see https://gist.github.com/eugenekgn/f00c4d764430642dca4b 
	$('#datetimepicker').datetimepicker({
    	format: 'dd/MM/yyyy',
        language: 'pt-BR',
        pickSeconds: false,
        pickTime: false
    }).on('changeDate', function(e) {
    	data = e.localDate;
		console.log(e.date.toString());
		console.log(e.localDate.toString());
    	console.log(data);
  		
	});

});
