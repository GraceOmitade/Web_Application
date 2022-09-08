$(function() {
	$(".slider").slider({ 
			range: "min",
			slide: function(event, ui) {
				$id = $(this).attr('id');
				$id = $id.replace('slider_','');
				$("#" + $id).text(ui.value);
				updateDisplay();
			}
	});	
	
	$(".border").slider({
		min: 0,
		max: 10,
		value: 0
	});
	$(".padding").slider({
		min: 0,
		max: 25,
		value: 0
	});
	$(".fontsize").slider({
		min: 0,
		max: 30,
		value: 0
	});
	$(".position").slider({
		min: 0,
		max: 100,
		value: 0
	});

});

