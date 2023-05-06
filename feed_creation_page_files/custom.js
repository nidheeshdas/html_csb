$(document).ready(function() {
	$('.single-select').each(function (i, obj) {
		//$(obj).select2({width: "455px"});
		$(obj).select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
	})
	$('.multiple-select').each(function (i, obj) {
		//$(obj).select2({width: "455px"});
		$(obj).select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: function(){
			  $(this).data('placeholder');
			  },
				allowClear: Boolean($(this).data('allow-clear')),
		});
	})
});
