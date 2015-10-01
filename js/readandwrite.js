$(function() {

    $.getJSON("inv_data/data.json", function(data) {
        var item = {};
        var items = [];

        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
         });

    $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
        }).appendTo( "body" );

    });

});