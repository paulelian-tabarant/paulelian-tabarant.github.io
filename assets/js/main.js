$(() => {
	// Collapse navbar content when a click event is received
	$(document).click(() => {
		if ($(".navbar-collapse").hasClass("show")) {
			$("a.navbar-toggler").click();
		}
	});

	$(".level0-section").each((index, levelZeroSectionElement) => {
		$(levelZeroSectionElement).find(".text-section").each((index, textSectionElement) => {
			// Collapse every text section except the first one (most recent of the top-level section)
			if (index > 0) {
				$(textSectionElement).find(".text-section-title > a").addClass("collapsed");
			}
		});
	})
});