$(() => {
	// Collapse navbar content when a click event is received
	$(document).click(() => {
		if ($(".navbar-collapse").hasClass("show")) {
			$("a.navbar-toggler").click();
		}
	});
});
