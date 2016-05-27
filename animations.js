$(document).ready(function(){
	$('#tweet-content').on('click', function(){
		$('#tweet-controls').show();
		$('.tweet-compose').animate({height: '5em'}, 'click');
	});
	$('.tweet-compose').keyup(function() {
  		var max = 140;
  		var len = $(this).val().length;
  		var char = max - len;
  		$('#char-count').html(char);
		if (len >= (max - 10))  {
	    	$('#char-count').css('color', 'red');
	  	} 
 	 });
		
})