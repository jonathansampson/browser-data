(function () {

	var fs = require( "fs" ),
		_  = require( "lodash" ),

		browsers = [],
		features = [];

	fs.readdir( "data", function ( err, paths ) {

		paths.forEach(function ( path ) {

			path = "data/" + path;

			var data = fs.readFileSync( path );

			var json = JSON.parse( data );

			var browserString = json.browser.name + " " + json.browser.version;

			browsers.push( json.browser );

			var properties = json.properties;

			properties.forEach(function ( property ) {

				var cached = _.find( features, { 
					property: property.property
				});

				if ( ! cached ) {
					features.push( cached = { 
						browsers: [],
						property: property.property,
						properties: { "own": [], "proto": [], ".prototype": [] }
					});
				}

				cached.browsers.push( browserString );

				[ "own", "proto", ".prototype" ].forEach(function ( bucket ) {

					var browserBucket = property[ bucket ];

					if ( ! browserBucket ) return;

					browserBucket.forEach(function ( featureProp ) {

						var entry = _.find( cached.properties[ bucket ], function ( arr ) {
							return arr[ 0 ] === featureProp;
						});

						if ( ! entry ) {
							cached.properties[ bucket ].push( entry = [ featureProp, [] ] );
						}

						entry[ 1 ].push( browserString );

					});

				});

			});

		});

		console.log( features.slice(0,1)[0].property );

		features.sort(function ( a, b ) {
			return a.property < b.property ? -1 : 1;
		});

		console.log( features.slice(0,1)[0].property );

		fs.writeFile( "features.js", factoryString( "browserData", features ) );
		fs.writeFile( "factory/browsers.js", factoryString( "browserFactory", browsers ) );

	});

	function factoryString ( name, obj ) {

		var nlst = "\n\t",
			nldt = "\n\t\t";

		var parts = [ name, JSON.stringify( obj, null, 2 ) ];

		var tmplt = "angular.module( 'browsers' )"
			+ nlst +	".factory( '%0', function () { "
			+ nldt +		"return %1;"
			+ nlst +	"});";

		return tmplt.replace( /%(\d)/g, function ( all, i ) {
			return parts[ i ];
		});

	}

}());
