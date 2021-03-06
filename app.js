require([
    "data/chrome", 
    "data/firefox",
    "data/opera",
    "data/internet explorer 11",
    "data/internet explorer 10",
    "data/internet explorer 9",
    "data/safari"
], function( chrome, firefox, opera, ie11, ie10, ie9, safari ) {

    var browsers = [ chrome, firefox, opera, ie11, ie10, ie9, safari ];
    var properties = [];
    
    function copyUnique( source, destination ) {
        source.forEach(function( value ) {
            if ( destination.indexOf( value ) < 0 ) {
                destination.push( value );
            }
        });
    }

    browsers.forEach(function( browser ){
        copyUnique( browser, properties );
    });
    
    properties.sort(function(a, b) {
        //a = a.toLowerCase();
        //b = b.toLowerCase();
        return a < b ? -1 : a > b ? 1 : 0;
    });
    
    var row, 
        cell, 
        table = document.createElement("table");
    
    /* Table Labels */
    row = document.createElement("tr");
    [
        "Property",
        "Chrome 33", 
        "Firefox 27", 
        "Opera 12", 
        "IE 11", 
        "IE 10", 
        "IE 9", 
        "Safari 7"
    ].forEach(function(value){
        cell = document.createElement("th");
        cell.appendChild( document.createTextNode( value ) );
        row.appendChild(cell);
    });
    table.appendChild(row);
    
    /* Table Body */
    properties.forEach(function( property ){
        
        row = document.createElement("tr");
        
        cell = document.createElement("td");
        cell.appendChild(document.createTextNode(property));
        row.appendChild(cell);
        
        browsers.forEach(function( browser ){
            cell = document.createElement("td");
            cell.innerHTML = browser.indexOf(property) < 0 ? "" : "&#10004;";
            row.appendChild(cell);
        });
        
        table.appendChild(row);
        
    });
    
    document.body.appendChild( table );
    
    document.querySelector("input").addEventListener("keyup", function () {
        for ( var i = 1; i < table.rows.length; i++ ) {
            var pattern = new RegExp(this.value, "i");
            if ( table.rows[i].cells[0].textContent.match(pattern) ) {
                table.rows[i].style.display = "";
            } else {
                table.rows[i].style.display = "none";
            }
        }
    });

});