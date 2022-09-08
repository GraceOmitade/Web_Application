$(function() {
	$(".slider").slider({ 
			range: "min",
			slide: function(event, ui) {
				$id = $(this).attr('id');
				$id = $id.replace('slider_','');
				$("#" + $id).text(ui.value);
				updatemenu();
			}
	});	
	$(".radius").slider({
		min: 0,
		max: 50,
		value: 24
	});
	$(".radius1").slider({
		min: 0,
		max: 50,
		value: 10
	});
	$(".border").slider({
		min: 0,
		max: 10,
		value: 1
	});
	$(".shadow").slider({
		min: -20,
		max: 20,
		value: 2
	});
	$(".height").slider({
		min: 10,
		max: 70,
		value: 40
	});
	$(".blur").slider({
		min: 0,
		max: 25,
		value: 3
	});
	$(".padding").slider({
		min: 0,
		max: 25,
		value: 0
	});
	$(".padding3").slider({
		min: 0,
		max: 25,
		value: 20
	});
	$(".padding4").slider({
		min: 0,
		max: 25,
		value: 10
	});
	$(".padding5").slider({
		min: 0,
		max: 25,
		value: 15
	});
	$(".padding6").slider({
		min: 0,
		max: 25,
		value: 6
	});
	$(".padding7").slider({
		min: 0,
		max: 25,
		value: 4
	});
	$(".fontsize").slider({
		min: 5,
		max: 50,
		value: 12
	});
	$(".width").slider({
		min: 50,
		max: 350,
		value: 185
	});
});

