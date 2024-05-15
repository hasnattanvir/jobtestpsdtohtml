let $ = jQuery.noConflict();
AOS.init();

document.addEventListener("DOMContentLoaded", () => {
	const menu = new MmenuLight(
		document.querySelector("#ac_mmenu"),
		"(max-width: 1200px)"
	);

	const navigator = menu.navigation();
	const drawer = menu.offcanvas();

	document
		.querySelector("a[href='#ac_mmenu']")
		.addEventListener("click", (evnt) => {
			evnt.preventDefault();
			drawer.open();
		});


    menuSticky();
    stickyMenu();
});

 function menuSticky() {
    window.onscroll = function (){
        let header = document.querySelector('header');
        let menu = document.querySelector('.menuHolder').offsetHeight;
        let height = header.offsetHeight;
    
        if(window.scrollY >= height){
            header.classList.add("sticky");
            header.style.paddingBottom = menu + "px";
        }
        else{
            header.classList.remove("sticky");
            header.style.paddingBottom = "0";
        }
    }
 }
function stickyMenu() {
    let didScroll;
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $('.menuHolder').outerHeight();
    $('.menuHolder').css({'top': `-${navbarHeight}px`});

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    function hasScrolled() {
        let st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight){
            $('header').removeClass('nav-down').addClass('nav-up');
            $('.menuHolder').css({'top': `-${navbarHeight}px`});
        } else {
            $('header').removeClass('nav-up').addClass('nav-down');
            $('.menuHolder').css({'top': '0'});
        }    
        lastScrollTop = st;
    }
}

$(document).ready(function(){
    $('.supporters').slick({
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots:false,
        // nextArrow: '<button type="button" class="slick-next"><img src="assets/images/rightarrow.svg" alt=""></button>',
        // prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/leftarrow.svg" alt=""></button>',
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
    
          }
    
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
    
          }
        },  {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        }]
      });
});