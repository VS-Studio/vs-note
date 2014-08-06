'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

var myAppServices = angular.module('note.services', ['ngResource']);


myAppServices.factory('Datas', ['$resource',
  function($resource){
    return $resource('models/:cat.json', {}, {
      category: {method:'GET', params:{cat:'category'}, isArray:true},
      list: {method:'GET', isArray:true},
    });
  }]);
  


myAppServices.factory('Store', ['$resource',
  function($resource){
    return $resource('http://114.215.202.3:8800/comapi/data/note/:method', {}, {
      create: {method:'POST',params:{method:'_create'}},
      get: {method:'POST',params:{method:'_read'}},
      delete: {method:'POST',params:{method:'_delete'}},
    });
}]);

 
