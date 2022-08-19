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
        // autoplay: true,
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

    /*=================SCROLL SECTION ACTIVE LINK  ======================*/
    const sections = document.querySelectorAll("section[id]");

    function scrollActive(){
        const scrollY = window.pageYOffset;

        sections.forEach(item=> {
            const sectionHeight = item.offsetHeight;
            const sectionTop = item.offsetTop - 50;
            const sectionId = item.getAttribute("id");

            if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight){
                console.log(sectionId);
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link");
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link");
            }
        })
    }
    window.addEventListener('scroll', scrollActive);

    /*================= DARK AND WHITE COLOR ======================*/
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
    if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    }

// Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })

    /*================= SCROLL REVEAL======================*/
    const sr = ScrollReveal({
        distance: '50px',
        duration: 2000,

    });

    sr.reveal('.home__data, .home__social, .home__info, .sponsor__container ', {
        origin: 'top',
        interval: 150,
    });

    sr.reveal(' .about__data, .section-title, .video__description, ' +
        '.subscribe__description, .footer__container', {
        origin: 'left',
        interval: 150,

    });
    sr.reveal('.about__img,' +
        ' .discover__container, .place__content,' +
        ' .experience__content, .subscribe__form,' +
        ' .video__content, .experience__img', {
        origin: 'right',
        interval: 150,
    });


}
