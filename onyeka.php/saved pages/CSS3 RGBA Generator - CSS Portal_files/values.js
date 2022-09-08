$(function() {
	$( "#red-value-out" ).slider({
		orientation: "horizontal",
		range: "min",
		min: 0,
		max: 255,
		value: 46,
		slide: function( event, ui ) {
			$( "#red-value" ).text( ui.value );
			rgba();
		}
	});
	$( "#red-value" ).text( $( "#red-value-out" ).slider( "value" ) );
});
$(function() {
	$( "#green-value-out" ).slider({
		orientation: "horizontal",
		range: "min",
		min: 0,
		max: 255,
		value: 138,
		slide: function( event, ui ) {
			$( "#green-value" ).text( ui.value );
			rgba();
		}
	});
	$( "#green-value" ).text( $( "#green-value-out" ).slider( "value" ) );
});
$(function() {
	$( "#blue-value-out" ).slider({
		orientation: "horizontal",
		range: "min",
		min: 0,
		max: 255,
		value: 138,
		slide: function( event, ui ) {
			$( "#blue-value" ).text( ui.value );
			rgba();
		}
	});
	$( "#blue-value" ).text( $( "#blue-value-out" ).slider( "value" ) );
});
$(function() {
	$( "#opacity-value-out" ).slider({
		orientation: "horizontal",
		range: "min",
		min: 0.1,
		max: 1.0,
		value: 1,
		step:0.1,
		slide: function( event, ui ) {
			$( "#opacity-value" ).text( ui.value );
			rgba();
		}
	});
	$( "#opacity-value" ).text( $( "#opacity-value-out" ).slider( "value" ) );
});

