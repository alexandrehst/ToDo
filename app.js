(function(){
	var app = angular.module('todo', []);
	
	// Controladores
	app.controller('TodoController', ['$scope', function($scope) {
		this.itens = aFazer;
		
		$scope.menorPrioridade = function(item){
			if (item.prioridade>1){
				item.prioridade--;
			}
		};
		
		$scope.maiorPrioridade = function(item){
			item.prioridade++
		};
	}]);
	
	app.controller('TodoFormController', ['$scope', function($scope) {	
		$scope.itens = aFazer;
		
		$scope.addTodo = function() {
			
			$scope.itens.push( {descricao: $scope.descricao,
							   prioridade: $scope.prioridade,
							   feito:false} );
							   
		   $scope.descricao = '';
		   $scope.prioridade='';
							   
		}
		
	}]);
	
	//Diretiva
	app.directive('itemDescricao', function () {
		console.log('Na diretiva');
	    return {
	        restrict: 'A',
	        templateUrl: 'item-descricao.html'
	    }
	});

	
	
	// Dados - serão retirados daqui
	var aFazer = [
		{
			descricao: 'Comprar leite e pão',
			prioridade: 1,
			feito: false,
		},
		{
			descricao: 'Estudar Angular',
			prioridade: 1,
			feito: false,
		},
		{
			descricao: 'Jogar Battlefield',
			prioridade: 2,
			feito: false,
		}
	];
	
})();



