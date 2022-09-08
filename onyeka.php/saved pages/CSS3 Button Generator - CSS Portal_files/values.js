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
		value: 2
	});
	$(".border0").slider({
		min: 0,
		max: 10,
		value: 0
	});
	$(".border1").slider({
		min: 0,
		max: 10,
		value: 1
	});
	$(".paddingtb").slider({
		min: 0,
		max: 40,
		value: 10
	});
	$(".paddinglr").slider({
		min: 0,
		max: 40,
		value: 25
	});
	$(".fontsize").slider({
		min: 1,
		max: 30,
		value: 14
	});
	
});