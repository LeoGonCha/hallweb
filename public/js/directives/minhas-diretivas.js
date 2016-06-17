angular.module('minhasDiretivas',[])
.directive('meuPainel', function(){

	var ddo = {};

	ddo.restric = "AE";

	ddo.transclude = true; 

	ddo.scope = {
		titulo: '@'
	};


	/*ddo.template = 
                '<div class="panel panel-default">'
            +   '   <div class="panel-heading">'
            +   '        <h3 class="panel-title text-center">{{titulo}}</h3> '
            +   '   </div>'
            +   '   <div class="panel-body" ng-transclude>' 
            +   '   </div>'
            +   '</div>';
	*/

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
})
.directive('minhaFoto', function(){

	var ddo = {};

	ddo.restric = "AE";

	ddo.transclude = true; 

	ddo.scope = {
		titulo: '@',
		url: '@'
	};

	ddo.templateUrl = 'js/directives/minha-foto.html';

	return ddo;
});

