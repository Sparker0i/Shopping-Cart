angular.module('checkout' , ['ngRoute'])

.config(['$routeProvider' , function($routeProvider) {
    $routeProvider.when('/checkout' , {
        templateUrl: 'public/checkout/checkout.html',
        controller: 'checkoutCtrl'
    })
}])

.controller('checkoutCtrl' , ['$scope' , 'CommonProp' , function($scope , CommonProp) {
    $scope.selectedItems = CommonProp.getItems()
    $scope.checkoutTotal = CommonProp.getTotal()
}])