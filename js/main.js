var scrollingTime = 200;
var scrollingOffset = 50;

function select(index) {
    var nextSection = $ ( '#section'+index );
    var dollar = $( '#terminal-dollar' );
    var cursor = $( '#terminal-cursor' );
    dollar.appendTo( nextSection );
    cursor.appendTo( nextSection );
    updateHash($( 'li.active > a' ).attr('href'));
}

class Cursor {
    constructor(id, visibleTime, invisibleTime) {
        this.selector = '#'+id;
        this.visibleTime = visibleTime;
        this.invisibleTime = invisibleTime;
        this.visible = true;
    }

    blink() {
        var cursor = this;
        if(this.visible) {
            $( this.selector ).css('background-color', 'white');
            setTimeout(function() { cursor.blink(); }, this.visibleTime);
        }
        else {
            $( this.selector ).css('background-color', 'transparent');
            setTimeout(function() { cursor.blink(); }, this.invisibleTime);
        }
        this.visible = !this.visible;
    }
}

function updateHash(hash) {
    if(history.pushState) {
        history.pushState(null, null, hash);
    }
    else {
        location.hash = hash;
    }
}

var cursor = new Cursor('terminal-cursor', 750, 450);

$(function () {
    // Scrollspy features
    $( '#sections-list > li' ).each(function ( index, element ) {
        var id = 'section'+index;
        $( element ).attr('id', id);
        // adding a callback function to the list item's link
       $( '#'+id+" a" ).click(function(event) { 
           // inspired of W3S schools example : https://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp 
            if(this.hash !== '') {
                event.preventDefault();
                var hash = this.hash;
                offset = $( hash ).offset().top - scrollingOffset;
                $( 'html, body' ).animate( {
                    scrollTop: offset
                }, scrollingTime, function () {
                    updateHash(hash);
                } );
            }
           select(index); 
        });
    });
    $( '#sectionsScrollspy' ).on('activate.bs.scrollspy', function(e) {
        var id = $( '#sectionsScrollspy li.active' ).attr('id');
        var index = parseInt(id.replace('section', ''));
        select(index);
    });
    // Projects list animations
    $( '[id^=item]' ).each(function( index, element ) {
        $( element ).on('show.bs.collapse', function() {
            var chevron = $( '#selected-project-chevron' );
            chevron.hide();
            $( 'a[href="#item'+(index+1)+'"]' ).before( chevron );
            chevron.show('fast');
            var borderBefore = $( '#selected-project-border-before' );
            var borderAfter = $( '#selected-project-border-after' );
            var panelBody = $( '#item'+(index+1)+' .panel-body' );
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
    // collapses navbar when clicked outside
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
    cursor.blink();
});

