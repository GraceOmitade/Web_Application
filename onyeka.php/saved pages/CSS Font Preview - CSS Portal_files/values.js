$(function() {
	$(".slider").slider({ 
			range: "min",
			slide: function(event, ui) {
				$id = $(this).attr('id');
				$id = $id.replace('slider_','');
				$("#" + $id).text(ui.value);
				updateFont();
			}
	});	
	$(".size").slider({
		min: 6,
		max: 24,
		value: 12
	});
	$(".spacing").slider({
		min: -10,
		max: 10,
		step: 0.1,
		value: 0
	});
	$(".height").slider({
		min: 0,
		max: 40,
		value: 20
	});
});
