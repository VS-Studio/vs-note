'use strict';

/* Directives */


var module = angular.module('note.directives', []);

module.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);


module.directive("contenteditable", function (Categories) {
        return {
            link:function ($scope, ele, attrs, ctrl) {
                var ENTER_KEY = 13;
                $scope.catInput = false;
                ele.bind("keyup",function(event) {
                    if(event.keyCode === ENTER_KEY)
                    {
                        console.log($scope.category);
                        Categories.create({category:$scope.category}, function(con) {
                            $scope.category = '';
                            $scope.catInput = false;
                            alert(con.msg);
                        });
                    }
                });
            }
        };
    });