$('li:contains("TV")').text('pc');
$('li:contains("R")').html(function(){
	return '<p>' +$(this).text()+'</p>';
});




$('ul').before('<p> Before element  </p>');
$('li.complete').prepend(' +  '); // prepend and append cannot be used with markup


var classes = this.class;
 $(this).append('<span>'+ classes + '</span>')



$('li').each(function(){
 $(this).addClass('color');
});


$('li').on('mouseover click',function(){
	$(this).addClass('color');
});

$('li').on('mouseout',function(){
	$(this).removeClass('color');
});


$('li').on('click',function(e){
	var date = new Date();
	date.setTime(e.timeStamp);
	var clicked = date.toDateString();
	$(this).append('<span>' + clicked + '' + e.type + '</span>');
});



$('li').not('.complete').fadeOut(1500).addClass('color').fadeIn(1500);
$('li:contains("TV")').addClass('color');
$('li').filter('.complete')..addClass('color');


$('h1').on('click',function(){

var $big = $('div');
$big.addClass('big');

});


var $rama = $('li.rama');
$rama.innerHeight('400px').addClass('color').width('300px');


//FILTERING ,SORTING , SEARCHING