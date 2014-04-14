angular.module( "browserdata", [] )

.factory( "dataFactory", function ( $http ) {
	return $http.get( "combined.data.json" );
})

.controller( "mainController", function ( $scope, dataFactory ) {

	$scope.title = "Browser Data";
	$scope.browsers = [];
	$scope.features = [];

	$scope.supports = function ( feature, browser, index ) {
		var profile = feature.browsers[ browser.name ] && feature.browsers[ browser.name ];
		if ( null === index ) {
			return profile && profile.hasOwnProperty( browser.version );
		}
		return profile && profile[ browser.version ] && ~profile[ browser.version ].indexOf( index );
	};

	dataFactory.success(function ( response ) {
		if ( ! $scope.features.length ) {
			$scope.features = response;	
		}
		if ( ! $scope.browsers.length ) {
			$scope.browsers = [
				{ "name": "Chrome", "version": "34" },
				{ "name": "Firefox", "version": "28" },
				{ "name": "Opera", "version": "12" },
				{ "name": "IExplorer", "version": "11" }
			];
		}
	});

});