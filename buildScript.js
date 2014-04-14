var _            = require( "lodash-node" );
var minify       = require( "node-minify" );
var directory    = "browser_data/";
var fs           = require( "fs" );
var featureCache = [];
var files        = fs.readdirSync( directory )
				       .filter(function( f ) { 
				           return f.match(/\.json$/) });

files.forEach(function ( path ) {

	var browser = JSON.parse( fs.readFileSync( directory + path ) );

	browser.properties.forEach( function ( pObject ) {

		var cache = _.findWhere( featureCache, { "name": pObject.name } );

		if ( ! cache ) {
			cache = { "name": pObject.name, "properties": [], "browsers": {} };
			featureCache.push( cache );
		}

		if ( !cache.browsers.hasOwnProperty( browser.name ) ) {
			( cache.browsers[ browser.name ] = {} )[ browser.version ] = [];
		}

		if ( pObject.properties ) {
			pObject.properties.forEach( function ( property ) {
				var index = cache.properties.indexOf( property );
				if ( index < 0 ) {
					index = cache.properties.push( property ) - 1;
				}
				cache.browsers[ browser.name ][ browser.version ].push( index );
			});
		}

	});


});

fs.writeFile( "combined.data.json", JSON.stringify( featureCache, null, "\t" ) );