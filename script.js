/* Menu lateral */

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

/* Video */

var videoPlayer = document.getElementById("VideoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo() {
    videoPlayer.style.display = "none";
}

function playVideo(file) {
    myVideo.src = file;
    videoPlayer.style.display = "block";
}

/* Loader */

//<![CDATA[
$(window).on('load', function() {
        $('#preloader .inner').fadeOut();
        $('#preloader').delay(450).fadeOut('slow');
        $('body').delay(450).css({ 'overflow': 'visible' });
    })
    //]]>