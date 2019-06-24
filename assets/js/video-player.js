var video = document.getElementById("video");

video.load();

$("#video-container").click(function(event){
    $("#video-container").addClass("active");
    $("#video-control").addClass("active");
    $("#video").addClass("active");
    $("#nav").addClass("active");
    $("html").addClass("locked");
    $("#subtitle").addClass("active");
    $("#counter").addClass("active");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    } 
});

video.onwaiting = function(event) {
    $("#counter").html("( Buffering )");
};

video.ontimeupdate = function(event) {
    $("#counter").html("( " + Math.round(video.currentTime) + "s / " + Math.round(video.duration) + "s )");
};

$("#video-forward").click(function(event){
    video.currentTime = video.currentTime + 5;
});

$("#video-rewind").click(function(event){
    video.currentTime = video.currentTime - 5;
});

$("#video-close").click(function(event){
    $("#video-container").removeClass("active");
    $("#video-control").removeClass("active");
    $("#video").removeClass("active");
    $("#nav").removeClass("active");
    $("html").removeClass("locked");
    $("#subtitle").removeClass("active");
    $("#counter").removeClass("active");
    video.load();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#video-container").offset().top - 50
    }, 0);
    p = 0;
});

$(document).keydown(function(event){
    
    event = event || window.event;
    
    if (event.key === 'Escape' && $("#video-container").hasClass("active")) {
        $("#video-container").removeClass("active");
        $("#video-control").removeClass("active");
        $("#video").removeClass("active");
        $("#nav").removeClass("active");
        $("html").removeClass("locked");
        $("#subtitle").removeClass("active");
        $("#counter").removeClass("active");
        video.load(); 
    } else if (event.key === 'ArrowLeft' && $("#video-container").hasClass("active")) {
        video.currentTime = video.currentTime - 5;
    } else if (event.key === 'ArrowRight' && $("#video-container").hasClass("active")) {
        video.currentTime = video.currentTime + 5;
    } else if (event.key == " " && $("#video-container").hasClass("active")) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }    
  }
});