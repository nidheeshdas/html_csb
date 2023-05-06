$(document).ready(function() {
	$('.alert').each(function() {
		$(this).delay($(this).data('timeout') || 3000).fadeOut('slow')
	});
	$('#alert').delay(3000).fadeOut('slow');
	// $( ".table" ).wrap( "<div class='table-responsive'></div>" );
});