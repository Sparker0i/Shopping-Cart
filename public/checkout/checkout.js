angular.module('checkout' , ['ngRoute'])

.config(['$routeProvider' , function($routeProvider) {
    $routeProvider.when('/checkout' , {
        templateUrl: 'public/checkout/checkout.html',
        controller: 'checkoutCtrl'
    })
}])

.controller('checkoutCtrl' , ['$scope' , function($scope) {
    
}])