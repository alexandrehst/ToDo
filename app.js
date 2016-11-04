(function(){
	var app = angular.module('todo', []);
	
 	// Controladores
	app.controller('TodoController', ['$scope', '$http', function($scope,$http) {
		var toDo = this;
		toDo.itens = [];
		
		// o get busca um arquivo JSON no endereco e retona um response
		$http.get('https://todotaaps.herokuapp.com/todo').then(function(response){
			toDo.itens = response.data;
			console.log('Data ' + toDo.itens.length);
			console.log(toDo.itens);
		});

		$scope.menorPrioridade = function(item){
			if (item.prioridade>1){
				item.prioridade--;
			}
		};
		
		$scope.maiorPrioridade = function(item){
			item.prioridade++
		};
		
	}]);


	// A inclusão não funciona - só foi implementado o GET para a demonstração
	app.controller('TodoFormController', ['$scope', function($scope) {	
		$scope.itens = [];
		
		$scope.addTodo = function() {
			
			$scope.itens.push( {descricao: $scope.descricao,
							   prioridade: parseInt($scope.prioridade),
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
	
})();



