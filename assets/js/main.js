let $ = jQuery.noConflict();

$(document).ready(function() {
var menu = new MmenuLight(
      document.querySelector('#menu'),
      'all'
  );
  var navigator = menu.navigation({
      // selectedClass: 'Selected',
      // slidingSubmenus: true,
      // theme: 'dark',
      // title: 'Menu'
  });

  var drawer = menu.offcanvas({
      // position: 'left
  });

  //	Open the menu.
  document.querySelector('a[href="#menu"]')
      .addEventListener('click', evnt => {
          evnt.preventDefault();
          drawer.open();
      });
});

// Banner slider
$(document).ready(function() {
  var swiper = new Swiper(".bannarslider", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: false,
      loop: true,
      speed: 1000,
      effect: 'fade',
      simulateTouch: true,
      fadeEffect: {
          crossFade: true,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
  });
});


// stiky menu
document.addEventListener('DOMContentLoaded', () => {
  function cldStickyHeader() {
      const cldHeaderBody = document.querySelector("header");
      const cldHeader = document.querySelector(".httrademenu");

      if (cldHeader && cldHeaderBody) {
          window.addEventListener('scroll', () => {
              const height = cldHeaderBody.offsetHeight;
              const mHeight = cldHeader.offsetHeight;

              if (window.scrollY >= height + 150) {
                  cldHeaderBody.classList.add("sticky");
                  cldHeaderBody.style.paddingBottom = `${mHeight}px`;
              } else {
                  cldHeaderBody.classList.remove("sticky");
                  cldHeaderBody.style.paddingBottom = "0";
              }
          });
      }
  }

  function hasScrolled() {
      const st = window.scrollY;
      if (Math.abs(lastScrollTop - st) <= delta) return;

      if (st > lastScrollTop && st > navbarHeight) {
          document.querySelector("header").classList.remove("nav-down");
          document.querySelector("header").classList.add("nav-up");
          document.querySelector(".httrademenu").style.top = `-${navbarHeight+10}px`;
      } else {
          if (st + window.innerHeight < document.documentElement.scrollHeight) {
              document.querySelector("header").classList.remove("nav-up");
              document.querySelector("header").classList.add("nav-down");
              document.querySelector(".httrademenu").style.top = "0";
          }
      }
      lastScrollTop = st;
  }

  function initScrollDetection() {
      window.addEventListener('scroll', () => {
          didScroll = true;
      });

      setInterval(() => {
          if (didScroll) {
              hasScrolled();
              didScroll = false;
          }
      }, 250);
  }

  let didScroll = false; // Changed to let
  let lastScrollTop = 0;
  const delta = 5;
  const navbarHeight = document.querySelector(".httrademenu").offsetHeight;

  cldStickyHeader();
  initScrollDetection();
});
