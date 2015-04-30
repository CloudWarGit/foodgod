'use strict';

angular.module('famousAngularStarter')
	.factory('cacheSrv', ['$cacheFactory', function($cacheFactory){
		var cache = $cacheFactory('createMenuCache');


		return {
			cacheInfo: function(){
				cache.info();
			},
			putCache: function(key, val){
				cache.put(key,val);
			},
			getCache: function(key){
				cache.get(key);
			},
			removeCache: function(key){
				cache.remove(key);
			},
			removeAllCache: function(){
				cache.removeAll();
			},
			destoryCache: function(){
				cache.destory();
			}
		};
		//return narBar;
	}]);