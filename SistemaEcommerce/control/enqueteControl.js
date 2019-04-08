var app = angular.module('enquete',[]);
app.controller('enqueteControl',['$scope',function($scope) {

    // esta parte do $http ficou meio confusa

    //var url = 'http://localhost:8080/SistemaEcommerce/enquete';

    var celulares = [
        {marca: "Samsung", likes: 0, dislikes: 0},
        {marca: "Iphone", likes: 0, dislikes: 0},
        {marca: "LG", likes: 0, dislikes: 0},
        {marca: "Nokia", likes: 0, dislikes: 0},
        {marca: "Sony", likes: 0, dislikes: 0},
        {marca: "Xiaomi", likes: 0, dislikes: 0},
        {marca: "Lenovo", likes: 0, dislikes: 0},
    ];

    $scope.celulares = celulares;

    $scope.likeUp = function (celular) {
        celular.likes ++;
    };

    $scope.dislikeUp = function (celular) {
        celular.dislikes ++;
    };
}])