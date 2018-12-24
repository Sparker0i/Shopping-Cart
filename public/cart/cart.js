angular.module('cart' , ['ngRoute'])

.config(['$routeProvider' , function($routeProvider) {
    $routeProvider.when('/cart' , {
        templateUrl: 'public/cart/cart.html',
        controller: 'cartCtrl'
    })
}])

.controller('cartCtrl' , ['$scope' , '$http' , function($scope, $http) {
    $http.get('public/list.json').then(function(response) {
        $scope.shopitems = response.data
    })
}])

.directive('checkList' , function() {
    return {
        restrict: 'E',
        scope: {
            option : '=',
            name : '='
        },
        template: function(elem , attr) {
            return '<div class="panel-body">\
            <div class="radio" ng-repeat="i in option">\
                <label><input type="radio" name="{{ name }}">{{ i.size }}, {{ i.price }}</label>\
            </div></div>'
        }
    }
})