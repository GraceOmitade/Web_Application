$(function() {
	$( "#h-length-value-out" ).slider({
		orientation: "horizontal",
		range: "min",
		min: -20,
		max: 20,
		value: 2,
		slide: function( event, ui ) {
			$( "#h-length-value" ).text( ui.value + "px" );
			shadowme();
		}
	});
	$( "#h-length-value" ).text( $( "#h-length-value-out" ).slider( "value" ) + "px" );
});
$(function() {
	$( "#v-length-value-out" ).slider({
		orientation: "horizontal",
		range: "min",
		min: -20,
		max: 20,
		value: 2,
		slide: function( event, ui ) {
			$( "#v-length-value" ).text( ui.value + "px" );
			shadowme();
		}
	});
	$( "#v-length-value" ).text( $( "#v-length-value-out" ).slider( "value" ) + "px" );
});
$(function() {
	$( "#b-length-value-out" ).slider({
		orientation: "horizontal",
		range: "min",
		min: 0,
		max: 25,
		value: 5,
		slide: function( event, ui ) {
			$( "#b-length-value" ).text( ui.value + "px" );
			shadowme();
		}
	});
	$( "#b-length-value" ).text( $( "#b-length-value-out" ).slider( "value" ) + "px" );
});

