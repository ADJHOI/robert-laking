//  variables START //
var i;    
var n;
var t;

var document;
var body = document.getElementsByTagName("body")[0];
var html = document.getElementsByTagName("html")[0];

var info = document.getElementById("info");
var infoSign = document.getElementById("info-sign");
var infoContainer = document.getElementById("info-container");

var subtitle = document.getElementById("subtitle");
var counter = document.getElementById("counter");

var pdfToggle = document.getElementById("pdf-view");
var pdfCont = document.getElementById("pdf-container");
var viewNav = document.getElementById("view");
var viewClose = document.getElementById("view-close");

var toggleButton = document.getElementsByClassName("toggle-button");
var toggleCont = document.getElementsByClassName("toggle-container");

var reveal = document.getElementById("description");
var sign = document.getElementsByClassName("collapse")[0];
var info = document.getElementById("info");

var thumb = document.getElementsByClassName("work-thumb-wrapper");

var close = document.getElementById("carousel-close");
var image = document.getElementsByClassName("work-image");
var right = document.getElementById("carousel-right");
var left = document.getElementById("carousel-left");
var nav = document.getElementById("nav");
var bodyCont = document.getElementById("body-content");
var carouselNav = document.getElementById("carousel");
var carousel = document.getElementById("carousel-container");
var carouselImage = document.getElementsByClassName("work-image-wrapper");
var clickLeft = document.getElementById("click-nav-left");
var clickRight = document.getElementById("click-nav-right");


// variables END //

info.onclick = infoReveal;

function infoReveal(event) {
    infoContainer.classList.toggle("active");
    if (infoContainer.classList.contains("active")) {
        infoSign.innerHTML = "×";
    } else {
        infoSign.innerHTML = "+";
    }   
}

//  info function END //

//  carousel START //

for (i = 0; i < image.length; i++) {
    
    image[i].onclick = carouselReveal;
    
}

function carouselReveal(event) {   
        
        nav.classList.toggle("active");
        carouselNav.classList.toggle("active");
        carousel.classList.toggle("active");
        clickLeft.classList.toggle("active");
        clickRight.classList.toggle("active");
        html.classList.toggle("locked");
        
        for (i = 0; i < image.length; i++) {
            image[i].classList.toggle("active");
        }
    
        var imageNumber = Array.prototype.slice.call( image, 0 );
        
        n = (imageNumber.indexOf(event.target) + 1);
    
        for (i = 0; i < carouselImage.length; i++) {
            carouselImage[i].classList.toggle("active");  
        }
    
        carouselImage[n-1].classList.toggle("current");

        subtitle.classList.toggle("active");
        counter.innerHTML = "( " + n + " / " + i + " )"
        counter.classList.toggle("active");
    
        if (carousel.classList.contains("active") == false){
            carouselImage[n-1].scrollIntoView(true);
        }
}

right.onclick = carouselNext;
clickRight.onclick = carouselNext;
        
    function carouselNext() {
        n ++;
        if (n > i) {
            n = 1;
        }
        for (i = 0; i < carouselImage.length; i++) {
            carouselImage[i].classList.remove("current");
            carouselImage[n-1].classList.add("current");
        }
        counter.innerHTML = "( " + n + " / " + i + " )"
    }
    
left.onclick = carouselPrev;
clickLeft.onclick = carouselPrev;
    
    function carouselPrev() {
        n --;
        if (n < 1) {
            n = i;
        }
        for (i = 0; i < carouselImage.length; i++) {
            carouselImage[i].classList.remove("current");
            carouselImage[n-1].classList.add("current");
        }        counter.innerHTML = "( " + n + " / " + i + " )";
    }

close.onclick = carouselClose;

function carouselClose(){
    
    counter.classList.remove("active");
    nav.classList.remove("active");
    carousel.classList.remove("active");
    subtitle.classList.remove("active");
    carouselNav.classList.remove("active");
    clickLeft.classList.remove("active");
    clickRight.classList.remove("active");
    html.classList.remove("locked");
    
    for (i = 0; i < carouselImage.length; i++) {
        carouselImage[i].classList.remove("active");
        image[i].classList.remove("active");
        carouselImage[i].classList.remove("current");
    }
    
//    for (i = 0; i < image.length; i++) {
//        image[i].classList.remove("active");
//    }    
}

document.onkeydown = keyNav;

function keyNav(event) {

    event = event || window.event;

    if ((event.keyCode == '37' || event.keyCode == '65') && carousel.classList.contains("active")) {
        n --;
        if (n < 1) {
            n = i;
        }
        for (i = 0; i < carouselImage.length; i++) {
            carouselImage[i].classList.remove("current");
            carouselImage[n-1].classList.add("current");
        }        counter.innerHTML = "( " + n + " / " + i + " )";
    }
    else if ((event.keyCode == '39' || event.keyCode == '68') && carousel.classList.contains("active")) {
       n ++;
        if (n > i) {
            n = 1;
        }
        for (i = 0; i < carouselImage.length; i++) {
            carouselImage[i].classList.remove("current");
            carouselImage[n-1].classList.add("current");
        }
        counter.innerHTML = "( " + n + " / " + i + " )"
        console.log(image[n-1].offsetWidth);
    }
}

//carousel.onmousemove = cursorChange;
//
//function cursorChange(event){
//    if (event.clientX <= carousel.offsetWidth/4 && carousel.classList.contains("active")) {
//        carousel.style.cursor = "w-resize";
//    } else if (event.clientX >= (carousel.offsetWidth/4)*3 && carousel.classList.contains("active")) {
//        carousel.style.cursor = "e-resize";
//    } else if (event.clientX >= (carousel.offsetWidth/4)*2 <= (carousel.offsetWidth/4)*3 && carousel.classList.contains("active")) {
//        carousel.style.cursor = "zoom-out";
//    } else {
//        carousel.style.cursor = "default";
//    }  
//}

//carousel.onclick = clickNav;
//
//function clickNav(event){
//    
//    if ((event.clientX <= carousel.offsetWidth/4) && carousel.classList.contains("active") == true) {
//        n --;
//        if (n < 1) {
//            n = i;
//        }
//        for (i = 0; i < carouselImage.length; i++) {
//            carouselImage[i].classList.remove("current");
//        }
//            carouselImage[n-1].classList.add("current");
//            counter.innerHTML = "( " + n + " / " + i + " )";
//        } else if (event.clientX >= (carousel.offsetWidth/4)*3 && carousel.classList.contains("active") == true) {
//        n ++;
//        if (n > i) {
//            n = 1;
//        }
//        for (i = 0; i < carouselImage.length; i++) {
//            carouselImage[i].classList.remove("current");
//        }
//        carouselImage[n-1].classList.add("current");
//        counter.innerHTML = "( " + n + " / " + i + " )"
//        }
//}

//  carousel END //

var about = document.getElementById("about");
    var aboutSign = document.getElementById("about-sign");
    var aboutContainer = document.getElementById("about-container");
    var education = document.getElementById("education");
    var educationSign = document.getElementById("education-sign");
    var educationContainer = document.getElementById("education-container");
    var contact = document.getElementById("contact");
    var contactSign = document.getElementById("contact-sign");
    var contactContainer = document.getElementById("contact-container");
    
    if (sessionStorage.aboutToggled === "1"){
        aboutContainer.classList.toggle("active", true);
        aboutSign.innerHTML = "×";
    } else if (sessionStorage.aboutToggled != "1") {
        aboutContainer.classList.toggle("active", false);
        aboutSign.innerHTML = "+";
    }
    about.onclick = aboutReveal;
    function aboutReveal(event) {
        if (sessionStorage.aboutToggled != "1") {
            aboutContainer.classList.toggle("active", true); 
            aboutSign.innerHTML = "×";
            sessionStorage.aboutToggled = "1";
        } else {
            aboutContainer.classList.toggle("active", false); 
            aboutSign.innerHTML = "+";
            sessionStorage.aboutToggled = "0";
        }  
    }
        
    if (sessionStorage.educationToggled === "1"){
        educationContainer.classList.toggle("active", true);
        educationSign.innerHTML = "×";
    } else if (sessionStorage.educationToggled != "1") {
        educationContainer.classList.toggle("active", false);
        educationSign.innerHTML = "+";
    }
    education.onclick = educationReveal;
    function educationReveal(event) {
        if (sessionStorage.educationToggled != "1") {
            educationContainer.classList.toggle("active", true); 
            educationSign.innerHTML = "×";
            sessionStorage.educationToggled = "1";
        } else {
            educationContainer.classList.toggle("active", false); 
            educationSign.innerHTML = "+";
            sessionStorage.educationToggled = "0";
        }    
    }
    
    if (sessionStorage.contactToggled === "1"){
        contactContainer.classList.toggle("active", true);
        contactSign.innerHTML = "×";
    } else if (sessionStorage.contactToggled != "1") {
        contactContainer.classList.toggle("active", false);
        contactSign.innerHTML = "+";
    }    
    contact.onclick = contactReveal;
    function contactReveal(event) {
        if (sessionStorage.contactToggled != "1") {
            contactContainer.classList.toggle("active", true); 
            contactSign.innerHTML = "×";
            sessionStorage.contactToggled = "1";
        } else {
            contactContainer.classList.toggle("active", false); 
            contactSign.innerHTML = "+";
            sessionStorage.contactToggled = "0";
        }    
    }    

var work = document.getElementById("work");
    var workSign = document.getElementById("work-sign");
    var workContainer = document.getElementById("work-container");
    var exhibition = document.getElementById("exhibition");
    var exhibitionSign = document.getElementById("exhibition-sign");
    var exhibitionContainer = document.getElementById("exhibition-container");
    var writing = document.getElementById("writing");
    var writingSign = document.getElementById("writing-sign");
    var writingContainer = document.getElementById("writing-container");    
    
        
    if (sessionStorage.workToggled === "1"){
        workContainer.classList.toggle("active", true);
        workSign.innerHTML = "×";
    } else if (sessionStorage.workToggled != "1") {
        workContainer.classList.toggle("active", false);
        workSign.innerHTML = "+";
    }    
    work.onclick = workReveal;
    function workReveal(event) {
        if (sessionStorage.workToggled != "1") {
            workContainer.classList.toggle("active", true); 
            workSign.innerHTML = "×";
            sessionStorage.workToggled = "1";
        } else {
            workContainer.classList.toggle("active", false); 
            workSign.innerHTML = "+";
            sessionStorage.workToggled = "0";
        }    
    }
    
    if (sessionStorage.exhibitionToggled === "1"){
        exhibitionContainer.classList.toggle("active", true);
        exhibitionSign.innerHTML = "×";
    } else if (sessionStorage.exhibitionToggled != "1") {
        exhibitionContainer.classList.toggle("active", false);
        exhibitionSign.innerHTML = "+";
    }    
    exhibition.onclick = exhibitionReveal;
    function exhibitionReveal(event) {
        if (sessionStorage.exhibitionToggled != "1") {
            exhibitionContainer.classList.toggle("active", true); 
            exhibitionSign.innerHTML = "×";
            sessionStorage.exhibitionToggled = "1";
        } else {
            exhibitionContainer.classList.toggle("active", false); 
            exhibitionSign.innerHTML = "+";
            sessionStorage.exhibitionToggled = "0";
        }    
    }

    if (sessionStorage.writingToggled === "1"){
        writingContainer.classList.toggle("active", true);
        writingSign.innerHTML = "×";
    } else if (sessionStorage.writingToggled != "1") {
        writingContainer.classList.toggle("active", false);
        writingSign.innerHTML = "+";
    }    
    writing.onclick = writingReveal;
    function writingReveal(event) {
        if (sessionStorage.writingToggled != "1") {
            writingContainer.classList.toggle("active", true); 
            writingSign.innerHTML = "×";
            sessionStorage.writingToggled = "1";
        } else {
            writingContainer.classList.toggle("active", false); 
            writingSign.innerHTML = "+";
            sessionStorage.writingToggled = "0";
        }    
    }    

var info = document.getElementById("info");
        var infoSign = document.getElementById("info-sign");
        var infoContainer = document.getElementById("info-container");    
            
        var nav = document.getElementById("nav");
        var pdfToggle = document.getElementById("pdf-view");
        var pdfCont = document.getElementById("pdf-container");
        var viewClose = document.getElementById("view-close");    
        var viewNav = document.getElementById("view");
        
        info.onclick = infoReveal;

        function infoReveal(event) {
            infoContainer.classList.toggle("active");
            if (infoContainer.classList.contains("active")) {
                infoSign.innerHTML = "×";
            } else {
                infoSign.innerHTML = "+";
            }   
        }    
            
        pdfToggle.onclick = pdfReveal;
        function pdfReveal(event) {
            pdfCont.classList.add("active");
            viewNav.classList.add("active");
            nav.classList.add("active");
        }

        viewClose.onclick = pdfClose;
        function pdfClose(event) {
            pdfCont.classList.remove("active");
            viewNav.classList.remove("active");
            nav.classList.remove("active");
        }