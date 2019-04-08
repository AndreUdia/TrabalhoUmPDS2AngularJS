var app = angular.module('ToDo',[]);
app.controller('toDoControl',['$scope',function($scope) {

    // esta parte do $http ficou meio confusa

    var url = 'http://localhost:8080/SistemaEcommerce/todos';

    $scope.todos = [
        {'title': 'Fazer o trabalho de Angular JS','done': true},
        {'title': 'Ir ao supercado dia 15 abril','done': false},
        {'title': 'Estudar Angular 2','done': false}
    ];


    $scope.addTodo = function(){
        $scope.todos.push({'title': $scope.newTodo,'done':false})
        $scope.newTodo = ''
    }
    $scope.limparCampo = function(){
        $scope.todos = $scope.todos.filter(function(item){
            return !item.done
        })
    }
}])