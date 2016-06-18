angular.module('hall').controller('SalasController', function($scope, $http, $routeParams){

	$scope.cidades = [];
	$scope.cidade = [];
	$scope.lojas = [];
	$scope.loja = [];
	$scope.posicoes = [];
	$scope.posicao = [];
	$scope.tempo = [];
	$scope.hora = [];

	$scope.navLojas = [{nome: '', comp:''}];

	$scope.mostraCidades = true;
	$scope.mostraLojas = false;
	$scope.mostraPosicoes = false;
	$scope.mostraTempo = false;
	$scope.mostraData = false;
	$scope.mostraSessoes = false;

	$scope.listaSessoes = [];
	$scope.tempos = [];

	var data = null;
	var dataCorrente = new Date();

	

	$http.get('listaCidades').success(function(cidades){
		$scope.cidades = cidades;
		console.log(cidades);
	}).error(function(erro){
		console.log(erro);
	});

	$scope.limpaPosicoes = function(nav) {
		console.log(nav.comp);
		if(nav.comp == 'cidade'){
			$scope.navLojas = [{nome: '', comp:''}];
			$scope.mostraCidades = true;
			$scope.mostraLojas = false;
			$scope.mostraPosicoes = false;
			$scope.mostraData = false;
			$scope.mostraTempo = false;
			$scope.mostraSessoes = false;
			$scope.listaSessoes = [];
			$scope.tempos = [];
		}
		if(nav.comp == 'loja'){
			$scope.navLojas.splice(1,$scope.navLojas.length);
			$scope.mostraCidades = false;
			$scope.mostraLojas = true;
			$scope.mostraPosicoes = false;
			$scope.mostraData = false;
			$scope.mostraTempo = false;
			$scope.mostraSessoes = false;
			$scope.listaSessoes = [];
		}
		if(nav.comp == 'posicao'){
			$scope.navLojas.splice(2,$scope.navLojas.length);
			$scope.mostraCidades = false;
			$scope.mostraLojas = false;
			$scope.mostraPosicoes = true;
			$scope.mostraData = false;
			$scope.mostraTempo = false;
			$scope.mostraSessoes = false;
			$scope.listaSessoes = [];
		}
		if(nav.comp == 'data'){
			$scope.navLojas.splice(3,$scope.navLojas.length);
			$scope.mostraCidades = false;
			$scope.mostraLojas = false;
			$scope.mostraPosicoes = false;
			$scope.mostraData = true;
			$scope.mostraTempo = false;
			$scope.mostraSessoes = false;
			$scope.listaSessoes = [];
		}
		if(nav.comp == 'tempo'){
			$scope.navLojas.splice(4,$scope.navLojas.length);
			$scope.mostraCidades = false;
			$scope.mostraLojas = false;
			$scope.mostraPosicoes = false;
			$scope.mostraData = false;
			$scope.mostraTempo = true;
			$scope.mostraSessoes = false;
			$scope.listaSessoes = [];
		}
		if(nav.comp == 'hora'){
			$scope.navLojas.splice(5,$scope.navLojas.length);
			$scope.mostraCidades = false;
			$scope.mostraLojas = false;
			$scope.mostraPosicoes = false;
			$scope.mostraData = false;
			$scope.mostraTempo = false;
			$scope.mostraSessoes = true;
		}

	};

	$scope.selecionaCidade = function(cidade) {

		$scope.cidade = cidade;
		$scope.lojas = cidade.lojas;

		console.log(cidade);

		if(cidade != null){
			$scope.navLojas = [
				{nome: cidade.nome, comp: 'cidade'}
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
			$scope.navLojas.push({nome: loja.nome, comp: 'loja'});
			$scope.mostraCidades = false;
			$scope.mostraLojas = false;
			$scope.mostraPosicoes = true;
			$scope.mostraData = false;
			$scope.mostraTempo = false;
			$scope.mostraSessoes = false;
		} else {
			$scope.navLojas = [{nome: ''}];
		}
		
	};

	$scope.selecionaPosicao = function(posicao) {

		$scope.posicao = posicao;
		
		console.log(posicao);

		if(posicao != null){
			if($scope.navLojas.length > 2){
				$scope.navLojas.splice(1,1);
			}
			$scope.navLojas.push({nome: posicao.nome, comp: 'posicao'});
			$scope.mostraCidades = false;
			$scope.mostraLojas = false;
			$scope.mostraPosicoes = false;
			$scope.mostraData = true;
			$scope.mostraTempo = false;
			$scope.mostraSessoes = false;
		} else {
			$scope.navLojas = [{nome: ''}];
		}
		
	};

	$scope.selecionaData = function() {
		if(data == null){
			alert('Selecione uma data!');
		} else {
			if($scope.navLojas.length > 3){
				$scope.navLojas.splice(1,1);
			}
			$scope.navLojas.push({nome: data.getDate()+'/'+ (data.getMonth()+1) +'/'+ (data.getYear()+1900), comp: 'data'});
			$scope.mostraCidades = false;
			$scope.mostraLojas = false;
			$scope.mostraPosicoes = false;
			$scope.mostraData = false;
			$scope.mostraTempo = true;
			$scope.mostraSessoes = false;

			$http.get('/listaTempos').success(function(listaTempos){
				$scope.tempos = listaTempos;
				console.log(listaTempos);
			}).error(function(erro){
				console.log(erro);
			});	
		}
	};

	$scope.selecionaTempo = function(tempo) {

		$scope.tempo = tempo;
		
		if($scope.navLojas.length > 4){
			$scope.navLojas.splice(1,1);
		}
		$scope.navLojas.push({nome: tempo.nome, comp: 'tempo'});
		$scope.mostraCidades = false;
		$scope.mostraLojas = false;
		$scope.mostraPosicoes = false;
		$scope.mostraData = false;
		$scope.mostraTempo = false;
		$scope.mostraSessoes = true;

		//passar tempo.qtd
		$http.get('/listaSessoes/:dia=' + data).success(function(listaSessoes){
			$scope.listaSessoes = listaSessoes[0].sessoes;
			console.log(listaSessoes);
		}).error(function(erro){
			console.log(erro);
		});
	};

	$scope.selecionaHora = function(hora) {

		$scope.hora = hora;

		if($scope.navLojas.length > 5){
			$scope.navLojas.splice(1,1);
		}
		$scope.navLojas.push({nome: hora, comp: 'hora'});

		$scope.mostraCidades = false;
		$scope.mostraLojas = false;
		$scope.mostraPosicoes = false;
		$scope.mostraData = false;
		$scope.mostraTempo = false;
		$scope.mostraSessoes = false;
		
		console.log(hora);
	};

	$scope.reservar = function() {
		
		alert('Cidade: ' + $scope.cidade.nome 
			+ ' Loja: ' + $scope.loja.nome 
			+ ' espaço: ' + $scope.posicao.nome 
			+ ' Data: ' + data 
			+ ' por: ' + $scope.tempo.nome 
			+ ' a partir das: ' + $scope.hora );
		
	};



	//https://tarruda.github.io/bootstrap-datetimepicker/
	//@see https://gist.github.com/eugenekgn/f00c4d764430642dca4b 
	$('#datetimepicker').datetimepicker({
    	format: 'dd/MM/yyyy',
        language: 'pt-BR',
        pickSeconds: false,
        pickTime: false,
        startDate: new Date(),
        endDate: null
    }).on('changeDate', function(e) {
    	data = e.localDate;
	});

});
