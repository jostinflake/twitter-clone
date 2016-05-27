$(document).ready(function(){
	$('#tweet-content').on('click', function(){
		$('#tweet-controls').show();
		$('.tweet-compose').animate({height: '5em'}, 'click');
	});
})