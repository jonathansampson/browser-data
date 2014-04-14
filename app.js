angular.module( "browserdata", [ "ngRoute" ] )

.factory( "dataFactory", function ( $http ) {
	return $http.get( "combined.data.json" );
})

.controller( "mainController", function ( $scope, $routeParams, dataFactory ) {

	$scope.title = $routeParams.feature || "Browser Data";
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

		$scope.features = $routeParams.feature 
			? [ _.findWhere( response, { "name": $routeParams.feature } ) ] 
			: response;

		// TODO: Build from source
		if ( ! $scope.browsers.length ) {
			$scope.browsers = [
				{ "name": "Chrome",    "version": "34" },
				{ "name": "Firefox",   "version": "28" },
				{ "name": "Opera",     "version": "12" },
				{ "name": "IExplorer", "version": "11" }
			];
		}
	});

})

.config( function ( $routeProvider ) {

	$routeProvider

	.when( "/", {
		templateUrl: "partials/index.html",
		controller: "mainController"
	})

	.when( "/:feature", {
		templateUrl: "partials/feature.html",
		controller: "mainController"
	})

	.otherwise({
		redirectTo: "/"
	})

});