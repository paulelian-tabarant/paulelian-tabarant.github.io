var totalProjectsNb = 15; // to be updated each time you add a project

function select(id) {
    var nextItem = $( '#'+id );
    var dollar = $( '#terminal-dollar' );
    var cursor = $( '#terminal-cursor' );
    nextItem.append( dollar );
    dollar.after ( cursor );
    // Gets the link inside the wrapping <a> element
    updateHash($( 'li > a.active' ).attr('href'));
}

function updateHash(hash) {
    if(history.pushState) {
        history.pushState(null, null, hash);
    }
    else {
        location.hash = hash;
    }
}

$(function () {
    // Projects list animations
    $( '.panel-heading a' ).click((event) => {
        // "last-clicked" class appends a right chevron before the text of the element
        var lastClickedClass = "last-clicked";
        $( '#main-projects' ).find( 'a.'+lastClickedClass ).toggleClass(lastClickedClass);
        $( event.target ).toggleClass(lastClickedClass);
    });
    $( '[id^=item]' ).each((index, element) => {
        $( element ).on('show.bs.collapse', function() {
            var number = totalProjectsNb - index;
            var borderBefore = $( '#selected-project-border-before' );
            var borderAfter = $( '#selected-project-border-after' );
            var panelBody = $( '#item'+(number)+' .panel-body' );
            borderBefore.prependTo(panelBody);
            borderAfter.appendTo(panelBody);
            borderBefore.css('width', '0px');
            borderAfter.css('width', '0px');
            borderBefore.css('left', '50%');
            borderAfter.css('left', '50%');
            borderBefore.animate({
                left: '25%',
                width: '50%'
            }, 500);
            borderAfter.animate({
                left: '25%',
                width: '50%'
            }, 500);
        });
    });
	// collapses navbar when clicked
	$(document).click(() => {
		if ($(".navbar-collapse").hasClass("show")) {
			$("a.navbar-toggler").click();
		}
	});
});

