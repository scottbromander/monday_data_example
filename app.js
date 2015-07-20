$(document).ready(function(){
	//some-value

	//alert($("#someDiv").data("someOtherValue"));

	// $(".animatedDiv").fadeToggle(10000, function(){
	// 	$(this).fadeToggle(10000);
	// });

	// $(".animatedDiv").slideToggle(10000, function(){
	// 	$(this).slideToggle(10000);
	// });

	var divToggle = false;
	var divAnimating = false;

	// click
	// dblclick
	// focusin
	// focusout
	// mousedown
	// mouseup
	// mousemove
	// mouseout
	// mouseover
	// mouseleave
	// mouseenter

	$(".animatedDiv").on("click", function(){
		if(!divAnimating){
			if(divToggle){
				$(this).fadeTo(1000, 1, function(){
					divAnimating = false;
				});
				divToggle = false;
				divAnimating = true;
			} else {
				$(this).fadeTo(1000, 0.01, function(){
					divAnimating = false;
				});
				divToggle = true;
				divAnimating = true;
			}
		}
	});
});