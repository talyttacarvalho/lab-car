$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("#menu").removeClass("menu-large").addClass("menu-small");
	} else {
		$("#menu").removeClass("menu-small").addClass("menu-large");
	}
	
});