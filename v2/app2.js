angular.module( "browserdata", [] )

.factory( "dataFactory", function ( $http ) {
	return $http.get("data/data.json");
})

.controller( "mainController", function ( $scope, dataFactory ) {

	$scope.title = "Browser Data";
	$scope.browsers = [];
	$scope.features = [
		{
			"mainProp": "Array",
			"subProps": [ "join", "forEach", "chromeProp", "ieProp", "splice" ],
			"browsers": {
				"Chrome": { 33: [ 0, 2, 4 ] },
				"IExplorer": { 11: [ 0, 1, 2, 3, 4 ] }
			}
		},
		{
			"mainProp": "ApplicationCache",
			"subProps": [ "length", "name", "UNCACHED", "IDLE", "CHECKING", "DOWNLOADING" ],
			"browsers": {
				"Chrome": { 33: [ 0, 1, 2, 3, 4, 5 ] },
				"IExplorer": { 11: [ 0, 3, 4, 5 ] }
			}
		}
	];

	dataFactory.success(function ( response ) {
		if ( ! $scope.browsers.length ) {
			$scope.browsers = response.map(function ( browser ) {
				return browser.name;
			});
		}
	});

});