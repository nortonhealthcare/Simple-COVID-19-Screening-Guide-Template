var current_fs, next_fs, previous_fs; //fieldsets
var opacity;

$(document).ready(function () {
    // NEXT
    $(".next").click(function () {
        goToNext(this);
    });

    // PREVIOUS
    $(".previous").click(function () {
       goToPrevious(this); 
    });
});

function goToNext(btn) {
    current_fs = $(btn).parent();
    next_fs = $(btn).parent().next();

    $(window).scrollTop(0);

    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
        step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            next_fs.css({ 'opacity': opacity });
        },
        duration: 600
    });
}

function goToPrevious(btn) {
    current_fs = $(btn).parent();
    previous_fs = $(btn).parent().prev();

    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
        step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            previous_fs.css({ 'opacity': opacity });
        },
        duration: 600
    });
}
