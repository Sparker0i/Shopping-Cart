angular.module('cart' , ['ngRoute'])

.config(['$routeProvider' , function($routeProvider) {
    $routeProvider.when('/cart' , {
        templateUrl: 'public/cart/cart.html',
        controller: 'cartCtrl'
    })
}])

.controller('cartCtrl' , ['$scope' , function($scope) {
    
}])