'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

var myAppServices = angular.module('note.services', ['ngResource']);




myAppServices.factory('Notes', ['$resource',
  function($resource){
    return $resource('http://114.215.202.3:8800/comapi/data/note/:method', {}, {
      create: {method:'POST',params:{method:'_create'}},
      get: {method:'POST',params:{method:'_read'}},
      delete: {method:'POST',params:{method:'_delete'}},
    });
}]);


myAppServices.factory('Categories', ['$resource',
  function($resource){
    return $resource('http://114.215.202.3:8800/comapi/data/category/:method', {}, {
      create: {method:'POST',params:{method:'_create'}},
      get: {method:'POST',params:{method:'_read'}},
      delete: {method:'POST',params:{method:'_delete'}},
    });
}]);
