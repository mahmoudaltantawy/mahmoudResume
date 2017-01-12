
    
var headerHeight = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > headerHeight) {
    $('nav').addClass('fixedNav');
  } else {
    $('nav').removeClass('fixedNav');
  }
});

    // Smooth Scroll To Div
	
	 
	$('.nav a').click(function(){
        var my_div = $('#' + $(this).data('value')).offset().top;
        var my_position = my_div - $(".nav").height();
		$('html,body').animate({
          
			scrollTop:my_position
			
			},1000);
			console.log($(this).data('value'));
		});
	

  

$(".skills .html5").animate({
    width: "70%"
}, 2500);
$(".skills .css3").animate({
    width: "90%"
}, 2500);
$(".skills .javascript").animate({
    width: "60%"
}, 2500);
$(".skills .jquery").animate({
    width: "80%"
}, 2500);
$(".skills .php").animate({
    width: "50%"
}, 2500);
$(".skills .bootstrap").animate({
    width: "90%"
}, 2500);
$(".skills .photoshop").animate({
    width: "60%"
}, 2500);
$(".skills .wordpress").animate({
    width: "40%"
}, 2500);

$(window).load(function(){
   
    $(".overlay-loading,.overlay-loading .spinner").fadeOut(5000);
});

    $(document).ready(function() {
     
      $("#owl-demo").owlCarousel();
     
    });

    $(document).ready(function() {
     
      var owl = $("#owl-demo");
     
      owl.owlCarousel({
          items : 10, //10 items above 1000px browser width
          itemsDesktop : [1000,5], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
        
      // Custom Navigation Events
      
      $(".brands").mouseover(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
      })
      
     
    });

// contact
$('.toggle').on('click', function() {
  $('.my_contact').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.my_contact').stop().removeClass('active');
});
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
function initialize()
{
  var mapProp = {
    center: new google.maps.LatLng(51.508742,-0.120850),
    zoom:7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function loadScript()
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;
