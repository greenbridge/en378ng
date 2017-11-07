//controllers
App.controller('homeController', ['$scope','$http',  function($scope, $http){
  
	$scope.sortType     ='Refrigerant_number'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchItem   = '';     // set the default search/filter term
	
	$http.get('data/EN378_table_data.json')
       .then(function(res){
          $scope.refs = res.data;
	  	console.log($scope.refs);
     });

}]);
