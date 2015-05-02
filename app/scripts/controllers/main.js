'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
	  	.controller('MainCtrl', function ($scope, localStorageService) {
		    var todosInStore = localStorageService.get('todos');

	    $scope.todos = todosInStore || [];

	    $scope.$watch('todos', function () {
	      localStorageService.set('todos', $scope.todos);
	    }, true);

	    $scope.addTodo = function () {
		  $scope.todos.push($scope.todo);
		  $scope.todo = {};
		};
		$scope.delTodo = function (index) {
		  $scope.todos.splice(index, 1);
		};
  });
