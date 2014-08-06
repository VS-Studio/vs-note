'use strict';

var app = angular.module('note', [
  'ngRoute',
  'note.filters',
  'note.services',
  'note.directives',
  'note.controllers'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view/:cat', {templateUrl: 'views/view.html', controller: 'View'});
  $routeProvider.when('/about/:page', {templateUrl: 'views/about.html', controller: 'About'});
  $routeProvider.when('/oper/add', {templateUrl: 'views/modify.html', controller: 'Add'});

  $routeProvider.otherwise({redirectTo: '/about'});
}]);
