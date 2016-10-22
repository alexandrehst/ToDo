(function(){
	var app = angular.module('todo', []);
	
	app.controller('TodoController', function(){
		this.itens = aFazer;
	});
	
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



