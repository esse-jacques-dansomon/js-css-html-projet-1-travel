window.onload = function() {
    // HIDE AND SHOW MENU BUTTON ON MOBILE
    const navMenu = document.querySelector("#nav-menu"),
        navClose = document.querySelector("#nav-close"),
        navToggle = document.querySelector("#nav-toggle");

    navToggle.addEventListener('click', function (event){
        navMenu.classList.toggle("show-menu");
    });
    navClose.addEventListener('click', function (event){
        navMenu.classList.toggle("show-menu");
    });

    //remove class show-menu when click outside of menu
    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach(function (item) {
        item.addEventListener('click', function (event) {
            navMenu.classList.toggle("show-menu");
        });
    } );


    /*=================CHANGE BACKGROUND HEADER======================*/
    function changeBackgroundHeader() {
        const header = document.querySelector("#header");
        if(this.scrollY >= 50) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    }
    window.addEventListener('scroll', changeBackgroundHeader);

    /*=================SWIPER INITIALISE======================*/
    new Swiper('.discover__container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 32,
        coverflowEffect: {
            rotate: 0,
        },
    });
    /*================= PLAY VIDEO======================*/
    const videoFile = document.querySelector("#video-file"),
     videoButton = document.querySelector("#video-button"),
     videoIcon = document.querySelector("#video-icon");

    function playPause(){
        if(videoFile.paused){
            //play
            videoFile.play();

            //change icon
            videoIcon.classList.remove("ri-play-line");
            videoIcon.classList.add("ri-pause-line");

        } else {
            videoFile.pause();

            //change icon
            videoIcon.classList.add("ri-play-line");
            videoIcon.classList.remove("ri-pause-line");
        }
    }

    function videoEnds(){
        videoIcon.classList.add("ri-play-line");
        videoIcon.classList.remove("ri-pause-line");
    }

    videoFile.addEventListener('ended', videoEnds);
    videoButton.addEventListener('click', playPause);

    /*================= SHOW SCROLLUP======================*/
    function showScrollUp(){
        const scrollUp = document.querySelector("#scroll-up");
        if(this.scrollY <= 250) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    }
    window.addEventListener('scroll', showScrollUp);


}
