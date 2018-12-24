angular.module('cart' , ['ngRoute'])

.config(['$routeProvider' , function($routeProvider) {
    $routeProvider.when('/cart' , {
        templateUrl: 'public/cart/cart.html',
        controller: 'cartCtrl'
    })
}])

.controller('cartCtrl' , ['$scope' , '$http' , 'CommonProp' , function($scope, $http , CommonProp) {
    
    $scope.shopitems = CommonProp.getItems();
    if (!$scope.shopitems) {
        $http.get('public/list.json').then(function(response) {
            $scope.shopitems = response.data
        });
    }

    $scope.total = function() {
        var t = 0;
        for (var k in $scope.shopitems) {
            t += parseInt($scope.shopitems[k].selected);
        }
        CommonProp.setTotal(t)
        return CommonProp.getTotal();
    }

    $scope.$watch('shopitems' , function() {
        CommonProp.setItems($scope.shopitems)
    })
}])

.directive('checkList' , function() {
    return {
        restrict: 'E',
        scope: {
            option : '=',
            name : '=',
            selected : '='
        },
        template: function(elem , attr) {
            return '<div class="panel-body">\
            <div class="radio" ng-repeat="i in option">\
                <label><input type="radio" name="{{ name }}" ng-value="{{ i.price }}" \
                ng-model="$parent.selected">{{ i.size }}, {{ i.price }}</label>\
            </div></div>'
        }
    }
})

.service('CommonProp' , function() {
    var items = ''
    var Total = 0

    return {
        getItems: function() {
            return items;
        },
        setItems: function(value) {
            items = value;
        },
        getTotal: function() {
            return Total;
        },
        setTotal: function(value) {
            Total = value;
        }
    }
})