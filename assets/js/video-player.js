var jqueryPlayer = new Vimeo.Player($('#video-container'));

jqueryPlayer.play().then(function() {
    jqueryPlayer.unload().then(function() {
        }).catch(function(error) {
    });
    }).catch(function(error) {
        switch (error.name) {
            case 'PasswordError':
                break;
            case 'PrivacyError':
                break;
            default:
                break;
        }
    });

jqueryPlayer.off('play');    

$("#video-container").click(function(event){
    $("#video-container").addClass("active");
    $("#video-control").addClass("active");
    $("#video").addClass("active");
    $("#nav").addClass("active");
    $("html").addClass("locked");
    $("#subtitle").addClass("active");
    $("#counter").addClass("active");
    console.log("hello"); 
    jqueryPlayer.play().then(function() {
    }).catch(function(error) {
        switch (error.name) {
            case 'PasswordError':
                break;
            case 'PrivacyError':
                break;
            default:
                break;
        }
    });
    
    jqueryPlayer.on('pause', function(data) {
        $("#counter").html("( Press Play )");
    });
    
});

jqueryPlayer.on('timeupdate', function(data) {
    
    jqueryPlayer.off('pause'); 
    
    t = 0;
    jqueryPlayer.getDuration().then(function(duration) {

    $("#counter").html("( " + Math.round(data["seconds"]) + "s / " + Math.round(duration) + "s )");
        
    $("#video-forward").click(function(event){
        t = data["seconds"] + 5;
        if (t >= (duration - 0.25)){
            t = duration - 0.25;
        }
        jqueryPlayer.setCurrentTime(t).then(function(seconds) {
            }).catch(function(error) {
                switch (error.name) {
                    case 'RangeError':
                        break;
                    default:
                        break;
                }
            }); 
    });
    
    $("#video-rewind").click(function(event){
        t = data["seconds"] - 5;
        if (t <= 0) {
            t = 0;
        }
        jqueryPlayer.setCurrentTime(t).then(function(seconds){
        }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    break;
                default:
                    break;
            }
        }); 
    });
        
    jqueryPlayer.on('bufferstart', function(data) {
        $("#counter").html("( Buffering )");
    });
        
    jqueryPlayer.on('ended', function(data) {
        $("#counter").html("( 80s / 80s )");
    });    
        
    }).catch(function(error) {
    });
});

$("#video-close").click(function(event){
    $("#video-container").removeClass("active");
    $("#video-control").removeClass("active");
    $("#video").removeClass("active");
    $("#nav").removeClass("active");
    $("html").removeClass("locked");
    $("#subtitle").removeClass("active");
    $("#counter").removeClass("active");
    
    jqueryPlayer.unload().then(function() {
    }).catch(function(error) {
    });
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#video-container").offset().top - 50
    }, 0);
});

$(document).keydown(function(event){
    if (event.key === 'Escape' && $("#video-container").hasClass("active")) {
        $("#video-container").removeClass("active");
        $("#video-control").removeClass("active");
        $("#video").removeClass("active");
        $("#nav").removeClass("active");
        $("html").removeClass("locked");
        $("#subtitle").removeClass("active");
        $("#counter").removeClass("active");
        jqueryPlayer.unload().then(function() {
        }).catch(function(error) {
        }); 
    }
});