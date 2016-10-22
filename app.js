(function(){
	var app = angular.module('todo', []);
	
	app.controller('TodoController', function(){
		this.item = aFazer;
	});
	
	var aFazer = {
		descricao: 'Comprar leite e pão',
		prioridade: 1,
		feito: false,
	}
	
})();



