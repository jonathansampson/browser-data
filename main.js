angular.module( "browsers" )

	.factory( "buckets", function () {
		return [ "own", "proto", ".prototype" ];
	})

	.factory( "notes", function () {
		return [];
	})

	.controller( "mainController", function ( $scope, browserFactory, browserData, buckets, $routeParams ) {

		var features = browserData;

		if ( $routeParams.feature ) {
			for ( var i = 0; i < browserData.length; i++ ) {
				if ( browserData[i].property === $routeParams.feature ) {
					features = features.slice(i, i+1);
					break;
				}
			}
		}

		$scope.inBrowser = function ( haystack, needle ) {
			return ~haystack.indexOf( needle.name + " " + needle.version );
		};

		$scope.browsers = browserFactory;
		$scope.buckets = buckets;
		$scope.features = features;

	})

	.config(function ( $routeProvider ) {

		$routeProvider

			.when("/", {
				templateUrl: "partial/features.html",
				controller: "mainController"
			})

			.when("/:feature", {
				templateUrl: "partial/feature.html",
				controller: "mainController"
			})

			.otherwise({
				redirectTo: "/"
			});

	});