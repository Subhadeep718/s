//console.log("hallo");
let btn = document.getElementById("dark-btn");
let btnsun = document.getElementById("sun");
let btnmoon = document.getElementById("moon");
let nav = document.getElementById("nav");
let resume = document.getElementById("btn-resume");
let git = document.getElementById("btn-git");
let aresume = document.getElementById("a-resume");
let agit = document.getElementById("a-git");

let btn1 = document.getElementById("mobile-btn");
let ul = document.getElementById("ul");
let Home = document.getElementById("Home");
let name = document.getElementById("name");
let Skill = document.getElementById("Tach-Skill");
let Projects = document.getElementById("Projects");
let About = document.getElementById("About");
let Contact = document.getElementById("Contact-Me");
let x = document.getElementById("x");
let m = document.getElementById("m");

let btn2 = document.querySelector(".visit");
let btn3 = document.querySelector(".visit1");
let btn4 = document.querySelector(".visit2");
let btn5 = document.querySelector(".visit3");
let btn6 = document.querySelector(".visit4");

btn.addEventListener("click", () => {
  document.body.classList.toggle("day");
  resume.classList.toggle("button-light");
  aresume.classList.toggle("a1");
  git.classList.toggle("button-light");
  agit.classList.toggle("a1");
  nav.classList.toggle("bg-day");
  ul.classList.toggle("bg-day");
  btnsun.classList.toggle("display-none");
  btnmoon.classList.toggle("display-none");
});

btn1.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  Skill.classList.toggle("hidden");
  Projects.classList.toggle("hidden");
  About.classList.toggle("hidden");
  Contact.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});

btn2.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  Skill.classList.toggle("hidden");
  Projects.classList.toggle("hidden");
  About.classList.toggle("hidden");
  Contact.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});

btn3.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  Skill.classList.toggle("hidden");
  Projects.classList.toggle("hidden");
  About.classList.toggle("hidden");
  Contact.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});

btn4.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  Skill.classList.toggle("hidden");
  Projects.classList.toggle("hidden");
  About.classList.toggle("hidden");
  Contact.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});

btn5.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  Skill.classList.toggle("hidden");
  Projects.classList.toggle("hidden");
  About.classList.toggle("hidden");
  Contact.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});

btn6.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  Skill.classList.toggle("hidden");
  Projects.classList.toggle("hidden");
  About.classList.toggle("hidden");
  Contact.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});

//CDN
var typed = new Typed("#element", {
  strings: ["Web Developer", "Web Designer"],
  typeSpeed: 150,
  backspeed: 150,
  loop: true,
});

//CDN
const swiper = new Swiper(".swiper", {
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



$(document).ready(function(){
  // $fn.scrollSpeed(step, speed, easing);
  jQuery.scrollSpeed(300, 900);
});



(function($) {
    
  jQuery.scrollSpeed = function(step, speed, easing) {
      
      var $document = $(document),
          $window = $(window),
          $body = $('html, body'),
          option = easing || 'default',
          root = 0,
          scroll = false,
          scrollY,
          scrollX,
          view;
          
      if (window.navigator.msPointerEnabled)
      
          return false;
          
      $window.on('mousewheel DOMMouseScroll', function(e) {
          
          var deltaY = e.originalEvent.wheelDeltaY,
              detail = e.originalEvent.detail;
              scrollY = $document.height() > $window.height();
              scrollX = $document.width() > $window.width();
              scroll = true;
          
          if (scrollY) {
              
              view = $window.height();
                  
              if (deltaY < 0 || detail > 0)
          
                  root = (root + view) >= $document.height() ? root : root += step;
              
              if (deltaY > 0 || detail < 0)
          
                  root = root <= 0 ? 0 : root -= step;
              
              $body.stop().animate({
          
                  scrollTop: root
              
              }, speed, option, function() {
          
                  scroll = false;
              
              });
          }
          
          if (scrollX) {
              
              view = $window.width();
                  
              if (deltaY < 0 || detail > 0)
          
                  root = (root + view) >= $document.width() ? root : root += step;
              
              if (deltaY > 0 || detail < 0)
          
                  root = root <= 0 ? 0 : root -= step;
              
              $body.stop().animate({
          
                  scrollLeft: root
              
              }, speed, option, function() {
          
                  scroll = false;
              
              });
          }
          
          return false;
          
      }).on('scroll', function() {
          
          if (scrollY && !scroll) root = $window.scrollTop();
          if (scrollX && !scroll) root = $window.scrollLeft();
          
      }).on('resize', function() {
          
          if (scrollY && !scroll) view = $window.height();
          if (scrollX && !scroll) view = $window.width();
          
      });       
  };
  
  jQuery.easing.default = function (x,t,b,c,d) {
  
      return -c * ((t=t/d-1)*t*t*t - 1) + b;
  };
  
})(jQuery);


$(document).ready(function() {
  // Smooth scroll for all anchor links
  $('ul#ul a').on('click', function(event) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store the hash (target section ID)
      var target = this.hash;

      // Animate scrolling to the target section
      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 2000); // Adjust speed (800ms in this case)

      return false; // Optional: prevent default behavior
  });
});