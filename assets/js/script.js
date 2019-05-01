var i;    
var n;

if (sessionStorage.aboutToggled === "1") {
    $("#about-container").toggleClass("active", true);
    $("#about-sign").html("×");
} else if (sessionStorage.aboutToggled != "1") {
    $("#about-container").toggleClass("active", false);
    $("#about-sign").html("+");
}

$("#about").click(function(event) {
    if (sessionStorage.aboutToggled != "1") {
        $("#about-container").toggleClass("active", true);
        $("#about-sign").html("×");
        sessionStorage.aboutToggled = "1";
    } else { 
        $("#about-container").toggleClass("active", false);
        $("#about-sign").html("+");
        sessionStorage.aboutToggled = "0";
    }
});

if (sessionStorage.educationToggled === "1") {
    $("#education-container").toggleClass("active", true);
    $("#education-sign").html("×");
} else if (sessionStorage.educationToggled != "1") {
    $("#education-container").toggleClass("active", false);
    $("#education-sign").html("+");
}

$("#education").click(function(event) {
    if (sessionStorage.educationToggled != "1") {
        $("#education-container").toggleClass("active", true);
        $("#education-sign").html("×");
        sessionStorage.educationToggled = "1";
    } else { 
        $("#education-container").toggleClass("active", false);
        $("#education-sign").html("+");
        sessionStorage.educationToggled = "0";
    }
});

if (sessionStorage.contactToggled === "1") {
    $("#contact-container").toggleClass("active", true);
    $("#contact-sign").html("×");
} else if (sessionStorage.contactToggled != "1") {
    $("#contact-container").toggleClass("active", false);
    $("#contact-sign").html("+");
}

$("#contact").click(function(event) {
    if (sessionStorage.contactToggled != "1") {
        $("#contact-container").toggleClass("active", true);
        $("#contact-sign").html("×");
        sessionStorage.contactToggled = "1";
    } else { 
        $("#contact-container").toggleClass("active", false);
        $("#contact-sign").html("+");
        sessionStorage.contactToggled = "0";
    }
});

if (sessionStorage.workToggled === "1") {
    $("#work-container").toggleClass("active", true);
    $("#work-sign").html("×");
} else if (sessionStorage.workToggled != "1") {
    $("#work-container").toggleClass("active", false);
    $("#work-sign").html("+");
}

$("#work").click(function(event) {
    if (sessionStorage.workToggled != "1") {
        $("#work-container").toggleClass("active", true);
        $("#work-sign").html("×");
        sessionStorage.workToggled = "1";
    } else { 
        $("#work-container").toggleClass("active", false);
        $("#work-sign").html("+");
        sessionStorage.workToggled = "0";
    }
});

if (sessionStorage.exhibitionToggled === "1") {
    $("#exhibition-container").toggleClass("active", true);
    $("#exhibition-sign").html("×");
} else if (sessionStorage.exhibitionToggled != "1") {
    $("#exhibition-container").toggleClass("active", false);
    $("#exhibition-sign").html("+");
}

$("#exhibition").click(function(event) {
    if (sessionStorage.exhibitionToggled != "1") {
        $("#exhibition-container").toggleClass("active", true);
        $("#exhibition-sign").html("×");
        sessionStorage.exhibitionToggled = "1";
    } else { 
        $("#exhibition-container").toggleClass("active", false);
        $("#exhibition-sign").html("+");
        sessionStorage.exhibitionToggled = "0";
    }
});

if (sessionStorage.writingToggled === "1") {
    $("#writing-container").toggleClass("active", true);
    $("#writing-sign").html("×");
} else if (sessionStorage.writingToggled != "1") {
    $("#writing-container").toggleClass("active", false);
    $("#writing-sign").html("+");
}

$("#writing").click(function(event) {
    if (sessionStorage.writingToggled != "1") {
        $("#writing-container").toggleClass("active", true);
        $("#writing-sign").html("×");
        sessionStorage.writingToggled = "1";
    } else { 
        $("#writing-container").toggleClass("active", false);
        $("#writing-sign").html("+");
        sessionStorage.writingToggled = "0";
    }
}); 

$("#info").click(function(event) {
    $("#info-container").toggleClass("active");
    if ($("#info-container").hasClass("active")) {
        $("#info-sign").html("×");
    } else {
        $("#info-sign").html("+");
    }
});

$(".work-image").click(function(event){
    
    var imageNumber = Array.prototype.slice.call( $(".work-image"), 0 );
    n = (imageNumber.indexOf(event.target) + 1);
    i = $(".work-image-wrapper").length;
    
    $("#nav").toggleClass("active");
    $("#carousel").toggleClass("active");
    $("#carousel-container").toggleClass("active");
    $("#click-nav-left").toggleClass("active");
    $("#click-nav-right").toggleClass("active");
    $("html").toggleClass("locked");
    $(".work-image").toggleClass("active");
    $(".work-image-wrapper").toggleClass("active");
    $(".work-image-wrapper").eq(n-1).toggleClass("current");
    $("#subtitle").toggleClass("active");
    $("#counter").html("( " + n + " / " + i + " )");
    $("#counter").toggleClass("active");
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".work-image-wrapper").eq(n-1).offset().top - 50
    }, 0);
    
});

$("#carousel-right,#click-nav-right").click(function(event){
    n ++;
    if (n > i) {
        n = 1;
    }
    $(".work-image-wrapper").removeClass("current");
    $(".work-image-wrapper").eq(n-1).addClass("current");
    $("#counter").html("( " + n + " / " + i + " )");
});

$("#carousel-left,#click-nav-left").click(function(event){
    n --;
    if (n < 1) {
        n = i;
    }
    $(".work-image-wrapper").removeClass("current");
    $(".work-image-wrapper").eq(n-1).addClass("current");
    $("#counter").html("( " + n + " / " + i + " )");
});

$(document).keydown(function(event){
    
    event = event || window.event;

    if (event.key === 'ArrowLeft' && $("#carousel-container").hasClass("active")) {
        n --;
        if (n < 1) {
            n = i;
        }
        $(".work-image-wrapper").removeClass("current");
        $(".work-image-wrapper").eq(n-1).addClass("current");
        $("#counter").html("( " + n + " / " + i + " )");
    } else if (event.key === 'ArrowRight' && $("#carousel-container").hasClass("active")) {
        n ++;
        if (n > i) {
            n = 1;
        }
        $(".work-image-wrapper").removeClass("current");
        $(".work-image-wrapper").eq(n-1).addClass("current");
        $("#counter").html("( " + n + " / " + i + " )");
    } else if ((event.key === 'Escape' && $("#carousel-container").hasClass("active"))) {
        $("#nav").removeClass("active");
        $("#carousel").removeClass("active");
        $("#carousel-container").removeClass("active");
        $("#click-nav-left").removeClass("active");
        $("#click-nav-right").removeClass("active");
        $("html").removeClass("locked");
        $(".work-image").removeClass("active");
        $(".work-image-wrapper").removeClass("active");
        $(".work-image-wrapper").removeClass("current");
        $("#subtitle").removeClass("active");
        $("#counter").removeClass("active");
    } else if ((event.key === 'Escape' && $("#pdf-container").hasClass("active"))) {
        $("#pdf-container").removeClass("active");
        $("#view").removeClass("active");
        $("#nav").removeClass("active");
        $("html").removeClass("locked");
    }
});

$("#carousel-close").click(function(){
    $("#nav").removeClass("active");
    $("#carousel").removeClass("active");
    $("#carousel-container").removeClass("active");
    $("#click-nav-left").removeClass("active");
    $("#click-nav-right").removeClass("active");
    $("html").removeClass("locked");
    $(".work-image").removeClass("active");
    $(".work-image-wrapper").removeClass("active");
    $(".work-image-wrapper").removeClass("current");
    $("#subtitle").removeClass("active");
    $("#counter").removeClass("active");
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".work-image-wrapper").eq(n-1).offset().top - 50
    }, 0);
    
});

$("#pdf-view").click(function(event){
    $("#pdf-container").addClass("active");
    $("#view").addClass("active");
    $("#nav").addClass("active");
    $("html").addClass("locked");
});

$("#view-close").click(function(event){
    $("#pdf-container").removeClass("active");
    $("#view").removeClass("active");
    $("#nav").removeClass("active");
    $("html").removeClass("locked");
});

$(function () {
var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

if (touch) {
    try {
    
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
    });   