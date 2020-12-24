// Range slider
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 11000,
    values: [ 500, 10000 ],
    slide: function( event, ui ) {
      $( "#amount-min" ).val( ui.values[ 0 ] + "p" );
      $( "#amount-max" ).val( ui.values[ 1 ] + "p" );
    }
  });
  $( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) + "p" );
  $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) + "p" );
});
