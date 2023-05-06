$(window).resize(function(){
	if($('input[type="radio"]:checked').val() == 'mobile'){
		if($(window).width() < 600){
			$('.thumbBox').css({width: '300', height: '120px', marginLeft: '-150px', marginTop: '-60px'});
		} else if($(window).width() >= 600 && $(window).width() < 1024){
			$('.thumbBox').css({width: '500', height: '200px', marginLeft: '-250px', marginTop: '-100px'});
			$('.feed-thumbbox').css({width: '500', height: '400px', marginLeft: '-250px', marginTop: '-200px'});
		} else {
			$('.thumbBox').css({width: '500', height: '200px', marginLeft: '-250px', marginTop: '-100px'});
			$('.feed-thumbbox').css({width: '800', height: '700px', marginLeft: '-400px', marginTop: '-350px'});
		}
	}else if($('input[type="radio"]:checked').val() == 'thumbnail'){
		if($(window).width() < 600){
			$('.thumbBox').css({width: '120', height: '120px', marginLeft: '-60px', marginTop: '-60px'});
		}else{
			$('.thumbBox').css({width: '200', height: '200px', marginLeft: '-100px', marginTop: '-100px'});
		}
	}
	
	/*feed image cropping start*/
	if ($('input[type="radio"]:checked').val() == 'mobileview') {
		if ($(window).width() <= 320) {
			$('.cr-boundary').css({width: '250', height: '230px'});
			$('.cr-viewport').css({width: '200', height: '190px'});
		} else if ($(window).width() > 320 && $(window).width() < 600) {
			$('.cr-boundary').css({width: '310', height: '250px'});
			$('.cr-viewport').css({width: '300', height: '240px'});
		} else if ($(window).width() >= 600 && $(window).width() < 1024) {
			$('.cr-boundary').css({width: '510', height: '410px'});
			$('.cr-viewport').css({width: '500', height: '400px'});
		} else {
			$('.cr-boundary').css({width: '850', height: '750px'});
			$('.cr-viewport').css({width: '800', height: '700px'});
		}
		uploadCrop.croppie('bind', {
			url: $('#feed_original_image').val()
		});//to fit to viewport area
	} else if ($('input[type="radio"]:checked').val() == 'thumbnailview') {
		if ($(window).width() <= 320) {
			$('.cr-boundary').css({width: '130', height: '130px'});
			$('.cr-viewport').css({width: '120', height: '120px'});
		} else if ($(window).width() > 320 && $(window).width() < 600) {
			$('.cr-boundary').css({width: '200', height: '200px'});
			$('.cr-viewport').css({width: '150', height: '150px'});
		} else if ($(window).width() >= 600 && $(window).width() < 1024) {
			$('.cr-boundary').css({width: '510', height: '410px'});
			$('.cr-viewport').css({width: '256', height: '256px'});
		} else {
			$('.cr-boundary').css({width: '850', height: '750px'});
			$('.cr-viewport').css({width: '256', height: '256px'});
		}
		uploadCrop.croppie('bind', {
			url: $('#feed_original_image').val()
		});//to fit to viewport area
	}
	/*feed image cropping end*/
	
	/*banner image cropping start*/
	if ($('input[type="radio"]:checked').val() == 'mobilebanner') {
		if ($(window).width() <= 320) {
			$('.cr-boundary').css({width: '250', height: '150px'});
			$('.cr-viewport').css({width: '200', height: '120px'});
		} else if ($(window).width() > 320 && $(window).width() < 600) {
			$('.cr-boundary').css({width: '300', height: '200px'});
			$('.cr-viewport').css({width: '250', height: '150px'});
		} else if ($(window).width() >= 600 && $(window).width() < 1024) {
			$('.cr-boundary').css({width: '550', height: '300px'});
			$('.cr-viewport').css({width: '500', height: '200px'});
		} else {
			$('.cr-boundary').css({width: '850', height: '300px'});
			$('.cr-viewport').css({width: '500', height: '200px'});
		}
		bannerCrop.croppie('bind', {
			url: $('#banner_original_image').val()
		});//to fit to viewport area
	}
	/*banner image cropping end*/
	/*product cart image cropping start*/
	if ($('input[type="radio"]:checked').val() == 'mobileproduct') {
		if ($(window).width() <= 320) {
			$('.cr-boundary').css({width: '250', height: '150px'});
			$('.cr-viewport').css({width: '200', height: '120px'});
		} else if ($(window).width() > 320 && $(window).width() < 600) {
			$('.cr-boundary').css({width: '300', height: '200px'});
			$('.cr-viewport').css({width: '250', height: '150px'});
		} else if ($(window).width() >= 600 && $(window).width() < 1024) {
			$('.cr-boundary').css({width: '550', height: '300px'});
			$('.cr-viewport').css({width: '500', height: '200px'});
		} else {
			$('.cr-boundary').css({width: '850', height: '300px'});
			$('.cr-viewport').css({width: '500', height: '200px'});
		}
		productCrop.croppie('bind', {
			url: $('#product_original_image').val()
		});//to fit to viewport area
	}
	/*product cart image cropping end*/
});
$(document).ready(function(){
	
	$('.close').click(function(){
		$('.up_pro_pic').click();
		$('.uplimg').click();
		$('.bnr_uplimg').click();
		//window.location.reload();
	});
	
	if($('input[type="radio"]:checked').val() == 'thumbnail'){
		if($(window).width() < 600){
			$('.thumbBox').css({width: '120px', height: '120px', marginLeft: '-60px', marginTop: '-60px'});
		}else{
			$('.thumbBox').css({width: '200px', height: '200px', marginLeft: '-100px', marginTop: '-100px'});
		}
	}else if($('input[type="radio"]:checked').val() == 'mobile'){
		if($(window).width() < 600){
			$('.thumbBox').css({width: '300px', height: '240px', marginLeft: '-150px', marginTop: '-120px'});
		}else{
			$('.thumbBox').css({width: '800px', height: '700px', marginLeft: '-400px', marginTop: '-350px'});
		}
	}
	
	$('input[type="radio"]').change(function(){
		
		if($(this).val() == 'thumbnail'){
			if($(window).width() < 600){
				$('.thumbBox').css({width: '120px', height: '120px', marginLeft: '-60px', marginTop: '-60px'});
			}else{
				$('.thumbBox').css({width: '200px', height: '200px', marginLeft: '-100px', marginTop: '-100px'});
			}
			$('.mbl_crop_btn').attr('disabled', true);
			$('.tbl_crop_btn').attr('disabled', false);
		}else if($(this).val() == 'mobile'){
			if($(window).width() < 600){
				$('.thumbBox').css({width: '300px', height: '120px', marginLeft: '-150px', marginTop: '-60px'});
			}else{
				$('.thumbBox').css({width: '500px', height: '200px', marginLeft: '-250px', marginTop: '-100px'});
			}
			$('.tbl_crop_btn').attr('disabled', true);
			$('.mbl_crop_btn').attr('disabled', false);
		} else if ($(this).val() == 'thumbnailview') {//for feed
			if ($(window).width() <= 320) {
				$('.cr-boundary').css({width: '130', height: '130px'});
				$('.cr-viewport').css({width: '120', height: '120px'});
			} else if ($(window).width() > 320 && $(window).width() < 600) {
				$('.cr-boundary').css({width: '130', height: '130px'});
				$('.cr-viewport').css({width: '120', height: '120px'});
			} else if ($(window).width() >= 600 && $(window).width() < 1024) {
				$('.cr-boundary').css({width: '510', height: '410px'});
				$('.cr-viewport').css({width: '256', height: '256px'});
			} else {
				$('.cr-boundary').css({width: '850', height: '750px'});
				$('.cr-viewport').css({width: '256', height: '256px'});
			}
			uploadCrop.croppie('bind', {
				url: $('#feed_original_image').val()
			});
		} else if($(this).val() == 'mobileview') {//for feed
			if ($(window).width() <= 320) {
				$('.cr-boundary').css({width: '250', height: '230px'});
				$('.cr-viewport').css({width: '200', height: '190px'});
			} else if ($(window).width() > 320 && $(window).width() < 600) {
				$('.cr-boundary').css({width: '310', height: '250px'});
				$('.cr-viewport').css({width: '300', height: '240px'});
			} else if ($(window).width() >= 600 && $(window).width() < 1024) {
				$('.cr-boundary').css({width: '510', height: '410px'});
				$('.cr-viewport').css({width: '500', height: '400px'});
			} else {
				$('.cr-boundary').css({width: '850', height: '750px'});
				$('.cr-viewport').css({width: '800', height: '700px'});
			}
			uploadCrop.croppie('bind', {
				url: $('#feed_original_image').val()
			});
		}
	});
	
	/*banner old save start*/
/*	$('.banner_save_btn').click(function(){
		var org_base64_string = $('.imageBox').css('backgroundImage');
		
		var s = org_base64_string;
		var m = s.match(/"(.*?)"/);
		org_base64_string = m[1];
		
		var mobile_base64_string = $('input[name="banner_cropped"]').val();
		var bnr_name = $('input[name="banner_name"]').val();
		
		//$('.cropped_banner').attr('src', mobile_base64_string);
		$('.cropped_banner').html('<img src="'+mobile_base64_string+'">');;
		$('input[name="bnr_mbl_data"]').attr('value', mobile_base64_string);
		$('input[name="bnr_name"]').attr('value', bnr_name);
		
		$('.bnr_uplimg').click();
	});*/
	/*banner old save end*/

	$('.save_btn').click(function(){
		if($(this).val() == 'Save Logo')//for company logo
		{
			var org_base64_string = $('.imageBox').css('backgroundImage');
			
			var s = org_base64_string;
			var m = s.match(/"(.*?)"/);
			org_base64_string = m[1];

			var thumb_base64_string = $('input[name="thumb_cropped_image"]').val();
			//var mobile_base64_string = $('input[name="mobile_cropped_image"]').val();
			var file_name = $('input[name="file_name"]').val();

			$('.company_logo_preview_wrapper').html('<img class="img-responsive company_logo" src="">');
			//$('.company_logo').attr('src', mobile_base64_string);
			$('.company_logo').attr('src', thumb_base64_string);
			$('input[name="thumb_img_code"]').attr('value', thumb_base64_string);
			//$('input[name="mobile_img_code"]').attr('value', mobile_base64_string);
			$('input[name="org_img_code"]').attr('value', org_base64_string);
			$('input[name="img_name"]').attr('value', file_name);
			
			$('.up_pro_pic').click();
		}else if($(this).val() == 'Submit Image'){//for feed
			//var org_base64_string = $('.imageBox').css('backgroundImage');
			var org_base64_string = $('#feed_original_image').val();
			var s = org_base64_string;
			//var m = s.match(/"(.*?)"/);
			//org_base64_string = m[1];
			org_base64_string = org_base64_string;

			var thumb_base64_string = $('input[name="thumb_cropped_image"]').val();
			var mobile_base64_string = $('input[name="mobile_cropped_image"]').val();
			var file_name = $('input[name="file_name"]').val();
			
			$('#feedcontentpreview').show().attr('src', mobile_base64_string);
			$('#deletefile').show().html(file_name + '<a href="#" onclick="javascript:removefile(\''+file_name+'\');"> <i class="fa fa-trash-o" aria-hidden="true"></i></a>' );
            $('#videotest').hide();
            $('#audiotest').hide();
            $('.format_error').hide();
            
			$('input[name="feed_img_thumb"]').attr('value', thumb_base64_string);
			$('input[name="feed_img_mobile"]').attr('value', mobile_base64_string);
			$('input[name="feed_img_org"]').attr('value', org_base64_string);
			$('input[name="feed_img_name"]').attr('value', file_name);
			$('input[name="feed_file_data"]').attr('value', '');
			
			$('.uplimg').click();
			/*$('#uploadModal').hide();
			$('.modal-backdrop').hide();
			$('#uploadModal').removeClass('fade in');
			$('#uploadModal').addClass('fade');*/

		}
		
	});
});

$(document).ready(function($){
	
	t_cropped = false;
	m_cropped = false;
	fm_cropped = false;
	bnr_cropped = false;
	product_cropped = false;
	add_more_btn = false;
	
	var options =
	{
		thumbBox: '.thumbBox',
        spinner: '.spinner',
        imgSrc: ''
	};
	
/*	var cropper = $('.imageBox').cropbox(options);
	$('#imgInp').on('change', function()
	{
		var reader = new FileReader();
		reader.fileName = $('#imgInp').val();
		reader.onload = function(e) {
			options.imgSrc = e.target.result;
			$('input[name="file_name"]').attr('value', e.target.fileName);
			$(".mobile_cropped img").remove();
			$(".thumb_cropped img").remove();
			$('.feed_image_save_btn').attr('disabled', true);
			cropper = $('.imageBox').cropbox(options);
		}
		reader.readAsDataURL(this.files[0]);
		this.files = [];
	});*/
	/*feed image crop start*/
	if($(window).width() <= 320){
		uploadCrop = $('#image-crop').croppie({
	        viewport: {
	            width: 200,
	            height: 190,
	            type: 'square',
	            
	        },
	        boundary: {
	            width: 250,
	            height: 230
	        },
	        enableExif : true,
	        enableOrientation : true,
	        rotate : '-90',
	     });
		bannerCrop = $('#banner-image-crop').croppie({
	        viewport: {
	            width: 200,
	            height: 120,
	            type: 'square',
	            
	        },
	        boundary: {
	            width: 250,
	            height: 150
	        },
	        enableExif : true,
	        enableOrientation : true,
	        rotate : '-90',
	     });
		productCrop = $('#product-image-crop').croppie({
			viewport: {
	            width: 200,
	            height: 120,
	            type: 'square',
	            
	        },
	        boundary: {
	            width: 250,
	            height: 150
	        },
	        enableExif : true,
	        enableOrientation : true,
	        rotate : '-90',
	     });
	} else if($(window).width() > 320 && $(window).width() < 600){
		uploadCrop = $('#image-crop').croppie({
	        viewport: {
	            width: 300,
	            height: 240,
	            type: 'square',
	            
	        },
	        boundary: {
	            width: 310,
	            height: 250
	        },
	        enableExif : true,
	        enableOrientation : true,
	        rotate : '-90',
	     });
		bannerCrop = $('#banner-image-crop').croppie({
	        viewport: {
	            width: 250,
	            height: 150,
	            type: 'square',
	            
	        },
	        boundary: {
	            width: 300,
	            height: 200
	        },
	        enableExif : true,
	        enableOrientation : true,
	        rotate : '-90',
	     });
		productCrop = $('#product-image-crop').croppie({
			viewport: {
	            width: 250,
	            height: 150,
	            type: 'square',
	            
	        },
	        boundary: {
	            width: 300,
	            height: 200
	        },
	        enableExif : true,
	        enableOrientation : true,
	        rotate : '-90',
	     });
	} else if ($(window).width() >= 600 && $(window).width() < 1024) {
		uploadCrop = $('#image-crop').croppie({
	        viewport: {
	            width: 500,
	            height: 400,
	            type: 'square',
	            
	        },
	        boundary: {
	            width: 510,
	            height: 410
	        },
	        enableExif : true,
	        enableOrientation : true,
	        rotate : '-90',
	     });
		bannerCrop = $('#banner-image-crop').croppie({
	        viewport: {
	            width: 500,
	            height: 200,
	            type: 'square',
	            
	        },
	        boundary: {
	            width: 550,
	            height: 300
	        },
	        enableExif : true,
	        enableOrientation : true,
	        rotate : '-90',
	     });
		productCrop = $('#product-image-crop').croppie({
			viewport: {
	            width: 500,
	            height: 200,
	            type: 'square',
	            
	        },
	        boundary: {
	            width: 550,
	            height: 300
	        },
	        enableExif : true,
	        enableOrientation : true,
	        rotate : '-90',
	     });
	} else {
		uploadCrop = $('#image-crop').croppie({
	        viewport: {
	            width: 800,
	            height: 700,
	            type: 'square',
	            
	        },
	        boundary: {
	            width: 850,
	            height: 750
	        },
	        enableExif : true,
	        enableOrientation : true,
	        rotate : '-90',
	     });
		bannerCrop = $('#banner-image-crop').croppie({
	        viewport: {
	            width: 500,
	            height: 200,
	            type: 'square',
	            
	        },
	        boundary: {
	            width: 850,
	            height: 300
	        },
	        enableExif : true,
	        enableOrientation : true,
	        rotate : '-90',
	     });
		productCrop = $('#product-image-crop').croppie({
			viewport: {
	            width: 500,
	            height: 200,
	            type: 'square',
	            
	        },
	        boundary: {
	            width: 850,
	            height: 300
	        },
	        enableExif : true,
	        enableOrientation : true,
	        rotate : '-90',
	     });
	}
    /*$('.upload-rotate').on('click', function(ev) {
    	uploadCrop.croppie('rotate', parseInt($(this).data('deg')));
    });*/
    /*$('#imgInp').on('change',function(){
       this.value = null;
    });*/               	    
    fmob_cropped = false;
	fthumb_cropped = false;
    $('.feed_create_crop').on('click', function(){
		uploadCrop.croppie('result', {
            type: 'base64',
            size: 'viewport'
        }).then(function (resp) {
			if ($('input[type="radio"]:checked').val() == 'mobileview') {
				$('input[name="mobile_cropped_image"]').attr('value', resp);
				$('.mobile_cropped').html('<img src="'+resp+'">');
				if($(".mobile_cropped img").prop('src').length > 1000){
					fmob_cropped = true; 
				}
			} 
			if ($('input[type="radio"]:checked').val() == 'thumbnailview') {
				$('input[name="thumb_cropped_image"]').attr('value', resp);
				$('.thumb_cropped').html('<img src="'+resp+'">');
				if($(".thumb_cropped img").prop('src').length > 1000){
					fthumb_cropped = true; 
				}
			}
			if(fmob_cropped && fthumb_cropped){
				$('.feed_image_save_btn').attr('disabled', false);
			}
		});
	});
/*feed image crop stop*/
	$('#imgInp').on('click', function()
	{
		this.value = null;//for chrome image loading issue
	});
	
	$('#imgInp').on('change', function()
	{	
		var reader = new FileReader();
		reader.fileName = $('#imgInp').val();
		reader.onload = function(e) {
			options.imgSrc = e.target.result;
			fileType = e.target.result.split('/');
			fileType = fileType[0].split(':');
			if (fileType[1] == 'video' || fileType[1] == 'audio') {
				$('input[name="file_name"]').attr('value', e.target.fileName);
				$('input[name="feed_file_data"]').attr('value', e.target.result);
				$(".mobile_cropped img").remove();
				$(".thumb_cropped img").remove();
				$('.feed_image_save_btn').attr('disabled', true);
				$('input[name="feed_img_mobile"]').attr('value', '');
				$('input[name="feed_img_org"]').attr('value', '');
				$('input[name="feed_img_name"]').attr('value', e.target.fileName);
			} else {
				fmob_cropped = false;
				fthumb_cropped = false;
				$('input[name="file_name"]').attr('value', e.target.fileName);
				$(".mobile_cropped img").remove();
				$(".thumb_cropped img").remove();
				$('.feed_image_save_btn').attr('disabled', true);
			}
		}
		reader.readAsDataURL(this.files[0]);
		this.files = [];
	});
	
	/*banner cropping start*/
	$('#banner-file_name').on('click', function()
	{
		this.value = null;//for chrome image loading issue
	});
	
	$('#banner-file_name').on('change', function()
	{
		var file_type = this.files[0].type;
		file_type = file_type.split('/');
		if (file_type[0] == 'image') {
			$('.bnr_file_size').addClass('error-color').text("(Image size should be less than 5 MB.)");
			if (file_type[1] != 'gif') {
				$('.bnr_file_size').removeClass('error-color').text("(Image size should be less than 5 MB.)");
				if (this.files[0].size < (5 * 1024 * 1024)) {
					$('.bnr_file_size').removeClass('error-color').text("(Image size should be less than 5 MB.)");
					var reader = new FileReader();
					reader.fileName = $('#banner-file_name').val();
					reader.onload = function(e) {
						var image  = new Image();
						image.src = e.target.result;
						image.onload = function (){
							if (this.width > 500 && this.height > 200) {
								$('.bnr_file_size').removeClass('error-color').text("(Image size should be less than 5 MB.)");
								$(".mobile_cropped img").remove();
								bnr_cropped = false; 
								$('.banner_save_btn').attr('disabled', true);
								options.imgSrc = e.target.result;
								$('#banner_original_image').attr('value', e.target.result);
								$('input[name="file_name"]').attr('value', e.target.fileName);
								$('.bnr_uplimg').click();
								setTimeout(function(){
									$('#banner-image-crop').addClass('ready');
									bannerCrop.croppie('bind', {
										url: e.target.result
									});
								}, 300);
							} else {
								$('.bnr_file_size').addClass('error-color').text("Upload image with minimum 500 X 200.");
							}
						}
					}
					reader.readAsDataURL(this.files[0]);
					this.files = [];
				} else {
					$('.bnr_file_size').addClass('error-color').text("File size limit exceeded.");
				}
			} else {
				$('.bnr_file_size').addClass('error-color').text("GIF images are not allowed.");
			}
		} else {
			$('.bnr_file_size').addClass('error-color').text("Upload only images.");
		}
	});
	
	$('.bnr_crop').on('click', function(){
		bannerCrop.croppie('result', {
            type: 'base64',
            size: 'viewport'
        }).then(function (resp) {
			$('input[name="banner_cropped"]').attr('value', resp);
			$('.mobile_cropped').html('<img src="'+resp+'">');
			if ($(".mobile_cropped img").attr('src').length > 1000) {
				bnr_cropped = true; 
			}
			if (bnr_cropped) {
				$('.banner_save_btn').attr('disabled', false);
			}
		});
	});
	
	$('.banner_save_btn').click(function(){
		var banner_cropped_base64_string = $('input[name="banner_cropped"]').attr('value');
		var mobile_base64_string = $('input[name="banner_cropped"]').val();
		var bnr_name = $('input[name="file_name"]').val();
		$('.cropped_banner').html('<img src="'+mobile_base64_string+'">');;
		$('input[name="bnr_mbl_data"]').attr('value', mobile_base64_string);
		$('input[name="bnr_name"]').attr('value', bnr_name);
		$('.bnr_uplimg').click();
	});
	/*banner cropping end*/
	/*banner old crop start*/
/*	$('#banner-file_name').on('change', function()
	{
		//readImageData(this);
		
		var file_type = this.files[0].type;
		file_type = file_type.split('/');
		if(file_type[0] == 'image'){
			$('.thumbBox').css({width: '500px', height: '200px', marginLeft: '-250px', marginTop: '-100px'});
			$('.bnr_file_size').addClass('error-color').text("Image size should be less than 5 MB.");
			if(file_type[1] != 'gif'){
				$('.bnr_file_size').removeClass('error-color').text("Image size should be less than 5 MB.");
				if(this.files[0].size < (5 * 1024 * 1024)){
					$('.bnr_file_size').removeClass('error-color').text("Image size should be less than 5 MB.");
					var reader = new FileReader();
					reader.fileName = $('#banner-file_name').val();
					reader.onload = function(e) {
						var image  = new Image();
						image.src = e.target.result;
						image.onload = function (){
							if(this.width > 500 && this.height > 200){
								$('.bnr_file_size').removeClass('error-color').text("Image size should be less than 5 MB.");
								$(".mobile_cropped img").remove();
								bnr_cropped = false; 
								$('.banner_save_btn').attr('disabled', true);
								options.imgSrc = e.target.result;
								$('input[name="banner_name"]').attr('value', e.target.fileName);
								cropper = $('.imageBox').cropbox(options);
								$('.bnr_uplimg').click();
							}else{
								$('.bnr_file_size').addClass('error-color').text("Upload image with minimum 500 X 200.");
							}
						}
					}
					reader.readAsDataURL(this.files[0]);
					this.files = [];
					
				}else{
					$('.bnr_file_size').addClass('error-color').text("File size limit exceeded.");
				}
			}else{
				$('.bnr_file_size').addClass('error-color').text("GIF images are not allowed.");
			}
		}else{
			$('.bnr_file_size').addClass('error-color').text("Upload only images.");
		}
		
	});*/
	/*banner old crop end*/
	
/*cropping for company logo start*/
	$('#file').on('change', function()
	{
		var file_type = this.files[0].type;
		file_type = file_type.split('/');
		if(file_type[0] == 'image'){
			$('.file_size').addClass('error-color').text("Image size should be less than 5 MB.");
			if(file_type[1] != 'gif'){
				$('.file_size').removeClass('error-color').text("Image size should be less than 5 MB.");
				if(this.files[0].size < (5 * 1024 * 1024)){
					$('.file_size').removeClass('error-color').text("Image size should be less than 5 MB.");
					
					var reader = new FileReader();
					reader.fileName = $('#file').val();
					reader.onload = function(e) {
						var image  = new Image();
						image.src = e.target.result;
						image.onload = function (){
							if(this.width > 500 && this.height > 200){
								$('.file_size').removeClass('error-color').text("Image size should be less than 5 MB.");
								$(".mobile_cropped img").remove();
								$(".thumb_cropped img").remove();
								$('.company_logo_save_btn').attr('disabled', true);
								t_cropped = false;
								m_cropped = false;
								
								options.imgSrc = e.target.result;
								$('input[name="file_name"]').attr('value', e.target.fileName);
								cropper = $('.imageBox').cropbox(options);
							}else{
								$('.file_size').addClass('error-color').text("Upload image with minimum 500 X 200.");
							}
						}
					}
					reader.readAsDataURL(this.files[0]);
					this.files = [];
				}else{
					$('.file_size').addClass('error-color').text("File size limit exceeded.");
				}
			}else{
				$('.file_size').addClass('error-color').text("GIF images are not allowed.");
			}
		}else{
			$('.file_size').addClass('error-color').text("Upload only images.");
		}
	});
	
	$('.tbl_crop_btn').on('click', function(){
		var img = cropper.getDataURL();
		if($(window).width() < 600){
			$('.thumbBox').css({width: '120px', height: '120px', marginLeft: '-60px', marginTop: '-60px'});
		}else{
			$('.thumbBox').css({width: '200px', height: '200px', marginLeft: '-100px', marginTop: '-100px'});
		}
		
		$('input[name="thumb_cropped_image"]').attr('value', img);
		$('.thumb_cropped').html('<img src="'+img+'">');
		if($(".thumb_cropped img").attr('src').length > 1000){
			t_cropped = true; 
		}
		/*if(t_cropped && m_cropped){
			$('.company_logo_save_btn').attr('disabled', false);
		}*/
		if(t_cropped){
			$('.company_logo_save_btn').attr('disabled', false);
		}
	});
	
	/*$('.mbl_crop_btn').on('click', function(){
		var img = cropper.getDataURL();
		if($(window).width() < 600){
			$('.thumbBox').css({width: '300px', height: '120px', marginLeft: '-150px', marginTop: '-60px'});
		}else{
			$('.thumbBox').css({width: '500px', height: '200px', marginLeft: '-250px', marginTop: '-100px'});
		}
		
		$('input[name="mobile_cropped_image"]').attr('value', img);
		$('.mobile_cropped').html('<img src="'+img+'">');
		if($(".mobile_cropped img").attr('src').length > 1000){
			m_cropped = true; 
		}
		if(t_cropped && m_cropped){
			$('.company_logo_save_btn').attr('disabled', false);
		}
	});*/
/*cropping for company logo end*/
	
	/*$('.feed_create_crop').on('click', function(){
		var img = cropper.getDataURL();
		if($(window).width() < 600){
			$('.thumbBox').css({width: '300px', height: '240px', marginLeft: '-150px', marginTop: '-120px'});
		} else if($(window).width() >= 600 && $(window).width() < 1024){
			$('.thumbBox').css({width: '500px', height: '400px', marginLeft: '-250px', marginTop: '-200px'});
		} else {
			$('.thumbBox').css({width: '800px', height: '700px', marginLeft: '-400px', marginTop: '-350px'});
		}
		$('input[name="mobile_cropped_image"]').attr('value', img);
		$('.mobile_cropped').html('<img src="'+img+'">');
		if($(".mobile_cropped img").attr('src').length > 1000){
			fm_cropped = true; 
		}
		if(fm_cropped){
			$('.feed_image_save_btn').attr('disabled', false);
		}
	});*/
	
	/*banner old crop button start*/
/*	$('.bnr_crop').on('click', function(){
		
		var img = cropper.getDataURL();
		if($(window).width() < 600){
			$('.thumbBox').css({width: '300px', height: '120px', marginLeft: '-150px', marginTop: '-60px'});
		}else{
			$('.thumbBox').css({width: '500px', height: '200px', marginLeft: '-250px', marginTop: '-100px'});
		}
		$('input[name="banner_cropped"]').attr('value', img);
		$('.mobile_cropped').html('<img src="'+img+'">');
		if($(".mobile_cropped img").attr('src').length > 1000){
			bnr_cropped = true; 
		}
		if(bnr_cropped){
			$('.banner_save_btn').attr('disabled', false);
		}
	});*/
	/*banner old crop button end*/
	
	
	/*E-commerce product cropping start*/
	$('.product-file_name').on('click', function()
	{
		this.value = null;//for chrome image loading issue
	});
	
	$('.product-file_name').on('change', function()
	{
		product_cropped_image_count = [];
		var file_type = this.files[0].type;
		var crop_id = $(this).attr('id');
		file_type = file_type.split('/');
		if (file_type[0] == 'image') {
			$(this).prev('.product_file_size').addClass('error-color').text("(Image size should be less than 5 MB.)");
			if (file_type[1] != 'gif') {
				$(this).prev('.product_file_size').removeClass('error-color').text("(Image size should be less than 5 MB.)");
				if (this.files[0].size < (5 * 1024 * 1024)) {
					$(this).prev('.product_file_size').removeClass('error-color').text("(Image size should be less than 5 MB.)");
					var reader = new FileReader();
					reader.fileName = $('#banner-file_name').val();
					reader.onload = function(e) {
						var image  = new Image();
						image.src = e.target.result;
						image.onload = function (){
//							if (this.width > 500 && this.height > 200) {
								$('.product_file_size').removeClass('error-color').text("(Image size should be less than 5 MB.)");
								//$(".mobile_cropped img").remove();
								product_cropped = false; 
								$('.product_save_btn').attr('disabled', true);
								options.imgSrc = e.target.result;
								$('#product_original_image').attr('value', e.target.result);
								$('input[name="file_name"]').attr('value', e.target.fileName);
								//$('.bnr_uplimg').click();
								setTimeout(function(){
									$('#product-image-crop').addClass('ready');
									productCrop.croppie('bind', {
										url: e.target.result
									});
								}, 300);
								$('.product_crop').attr('crop_number', crop_id);
//							} else {
//								$(this).prev('.product_file_size').addClass('error-color').text("Upload image with minimum 500 X 200.");
//							}
						}
					}
					reader.readAsDataURL(this.files[0]);
					this.files = [];
				} else {
					$(this).prev('.product_file_size').addClass('error-color').text("File size limit exceeded.");
				}
			} else {
				$(this).prev('.product_file_size').addClass('error-color').text("GIF images are not allowed.");
			}
		} else {
			$(this).prev('.product_file_size').addClass('error-color').text("Upload only images.");
		}
	});
	
	$('.product_crop').on('click', function(){
		var crop_iamage_id = $(this).attr('crop_number');
		productCrop.croppie('result', {
            type: 'base64',
            size: 'viewport'
        }).then(function (resp) {
        	$('#'+crop_iamage_id+'.product-file_names').attr('value', resp);
        	$('#products-product_image').attr('value', crop_iamage_id);//this field is for validation purpose only
        	$('#'+crop_iamage_id+'.mobile_cropped').html('<img src="'+resp+'">');
			if ($('#'+crop_iamage_id+'.mobile_cropped img').attr('src').length > 1000) {
				product_cropped = true;
				if ($('.mobile_cropped img').length == $('.mobile_cropped:visible').length) {
					add_more_btn = true;
				} else {
					add_more_btn = false;
				}
			}
			if (product_cropped) {
				$('.product_save_btn').attr('disabled', false);
			}
        	if (add_more_btn) {
				$('.add_more_btn').attr('disabled', false);
			}
		});
	});
	
	$('.product_save_btn').click(function(){
		var current = 1;
		$('.product-file_names').each(function() {
			var product_cropped_base64_string = $('#product-file_name_'+current+'.product-file_names').val();
			$('input[name="product_image_data_'+current+'"]').attr('value', product_cropped_base64_string);
			if ($('input[name="product_image_data_'+current+'"]').val() != '') {
				product_cropped_image_count.push(current);	
			}
			current++;
		});
		$('#no_of_images').html(($('#no_of_images').attr('img-count') == 4) ? parseInt($('#no_of_images').attr('img-count')) + ' image(s) selected' : parseInt($('#no_of_images').attr('img-count')) + $.unique(product_cropped_image_count).length + ' image(s) selected');
	});
	
	var chk = ($('#no_of_images').attr('img-count') != 0) ? parseInt($('#no_of_images').attr('img-count')) : 1;
	$('.add_more_btn').click(function(){
		chk = chk + 1;
		$("#cls_"+chk+", #crop_"+chk).show();
		$('.add_more_btn').attr('disabled', true);
		if (chk == 4) {
			$('.add_more_btn').hide();
		}
	});
	/*E-commerce product cropping end*/
	
	
	$('#btnZoomIn').on('click', function(){
		cropper.zoomIn();
	});
	$('#btnZoomOut').on('click', function(){
		cropper.zoomOut();
	});
	$('.move_up').on('click', function(){
		cropper.up();
	});
	$('.move_left').on('click', function(){
		cropper.left();
	});
	$('.move_down').on('click', function(){
		cropper.down();
	});
	$('.move_right').on('click', function(){
		cropper.right();
	});
});	
