var jqueryPlayer = new Vimeo.Player($('#video'));

$("#video-container").click(function(event){
    $("#video-container").addClass("active");
    $("#video-control").addClass("active");
    $("#video").addClass("active");
    $("#nav").addClass("active");
    $("html").addClass("locked");
    $("#subtitle").addClass("active");
    $("#counter").addClass("active");
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
});

jqueryPlayer.on('timeupdate', function(data) {
    t = 0;
    jqueryPlayer.getDuration().then(function(duration) {

    $("#counter").html("( " + Math.round(data["seconds"]) + "s / " + Math.round(duration) + "s )");
        
    $("#video-play").click(function(event){
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
    
    $("#video-pause").click(function(event){
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
    
    $(document).keydown(function(event){
        if ((event.key === 'ArrowLeft' || event.key == 'a') && $("#video-container").hasClass("active")) {
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
        } else if ((event.key === 'ArrowRight' || event.key == 'd') && $("#video-container").hasClass("active")) {
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
        }
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
});