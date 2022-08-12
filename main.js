// corusel

var owl = $('.owl-carousel');
  owl.owlCarousel({
    center: true,
    loop: true,
    margin:30,
    startPosition:1, 
    items:3,
    responsive: {
     
      850 : {
      items:3
          
      },
      
      480 : {
        margin:20 ,
        items:2 
        
      },
      
      1000 : {
        
      margin:20
      },
      1200 : {
      margin:30
        
    }
  }
  });

  $('.slider-btn-prev').click(function() {
      owl.trigger('next.owl.carousel');
  })
  
  $('.slider-btn-next').click(function() {
     
      owl.trigger('prev.owl.carousel', [300]);
  })

  // nav icon
const navBtn = document.querySelector('.nav-togle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBtn.onclick = function(){
  nav.classList.toggle('nav-mobile');
    menuIcon.classList.toggle('menu-icon-active');
    
}