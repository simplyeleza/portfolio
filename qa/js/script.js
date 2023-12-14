
//javascript


$(function(){

"use strict";
var topoffset=40;

var slideqty =$('#featured .item').length;
var wheight = $(window).height();
var randSlide = Math.floor(Math.random()*slideqty);

$('#featured .item').eq(randSlide).addClass('active');

$('.fullheight').css('height',wheight);

//replacing IMG INSIDE with a background image

$("#featured .item img").each(function(){
 
 var imgSrc=$(this).attr('src');
 //$(this).parent().css({'background-image':'url ('+imgSrc') '} );

$(this).parent().css({'background-image': 'url('+imgSrc+')'});
$(this).remove();
 
});

//adjust height of fullheight element

$(window).resize(function(){

 wheight = $(window).height();

$('.fullheight').css('height',wheight);


});











//Activate scrollspy
$('body').scrollspy({
target:'header .navbar',
offset:topoffset

});


//Add an inbody class to nav when scrollspy event fires
$('.navbar-fixed-top').on('activate.bs.scrollspy',function(){

var hash = $(this).find('li.active a').attr('href');
if(hash !== '#featured') {
	$('header nav').addClass('inbody');
} else {
	$('header nav').removeClass('inbody');
}


});



//Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling






// Automatically generate carousel indicators

for(var i=0; i < slideqty; i++){

	var insertText = '<li data-target="#featured" data-slide-to="'+ i + '"> </li>';

	$('#featured ol').append(insertText);
}






$('.carousel').carousel({
	interval:2000,
	
});

$('[data-toggle="popover"]').popover();



});


//
$(document).ready(function(){
  $('.panel-heading a').on('click', function() {
      var $this = $(this);
      if ($this.find('span').hasClass('glyphicon-chevron-down')) {
          $this.find('span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
      } else {
          $this.find('span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
      }
  });

  document.querySelector(".fa.fa-copy").addEventListener("click", function() {
    // Get the email from the sibling p element
    const email = this.previousElementSibling.textContent.split(":")[1].trim();
  
    // Use an auxiliary textarea to copy the email to the clipboard
    const aux = document.createElement("textarea");
    aux.value = email;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  
    // Optionally, give feedback to the user, like changing the icon or showing a tooltip
    alert("Email copied to clipboard!");
  });

});



