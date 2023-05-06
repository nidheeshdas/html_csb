//text wrapping 	
function textWrapping() {
	if (($(window).width()) < 768) {
		var str = $("#welcome_text").text();
		var dots = '...';
		if (str.length > 1)
			str = str.substring(0, 4);
		var text = str.concat(dots)
		$("#welcome_text").text(text);
		}
	}

$(window).resize(function(){
	textWrapping();
});
$(document).ready(function(){
	textWrapping();
	
	$('table').wrap('<div class="table-responsive"></div>');
	
    $('.alert').delay(6000).fadeOut('slow');
    $('#alert').delay(6000).fadeOut('slow');
    $('.cust-s .form-group').addClass('clearfix');
    $('.field-feed_title').addClass('clearfix');
    $('.col-md-12.form-group').addClass('clearfix');
    $('#removeclassonimage').removeClass('rmpad-0');
    
    
    $('#bulk').on('click',function () {
        if($('#inputuser-bulkfile').val() == ''){
            $('#inputuser-bulkfileerror').text('Please attach user details excel file.').show();
            setTimeout(function(){
        		$('#inputuser-bulkfileerror').hide();
        	}, 5000);
            return false;
        }
        
    })
    // for dropdown fields
     $('select').parent().addClass("drop-down");
	 $('.drop-down  select').addClass("custom-select");
    $(".custom-select").each(function(){
        $(this).wrap("<span class='select-wrapper'></span>");
//        $(this).after("<span class='holder'></span>");
    });
    $(".custom-select").change(function(){
        var selectedOption = $(this).find(":selected").text();
        $(this).next(".holder").text(selectedOption);
    }).trigger('change');
    //// for dropdown fields
    
    /*
     * Logo Script is no longer required
     * 
     * $('#logoInp').on('change', function(e){
    	if (this.files && this.files[0]) {
    		var reader = new FileReader();
    		if(this.files[0].type == "image/jpg" || this.files[0].type == "image/jpeg" || this.files[0].type == "image/png" || this.files[0].type == "image/gif"){
    			reader.readAsDataURL(this.files[0]);
				reader.onload = function (e) {
					var image = new Image();
            		image.src = e.target.result;
            		image.onload = function(){
            			height = this.height;
            			width = this.width;
            			if( height < 432 && width < 1080 ){
                        	$('.logo_error').text("File dimensions should be minimum 1080 x 432.");
                        	$('#feedlogo').attr('src', '').hide();
                        }else{
                        	$('.logo_error').text("");
                        }
            		};
				};
    		}
    	}
    	var feed_logo = $(this).val();
    	if(feed_logo == ''){
    		e.preventDefault();
    		$('.logo_error').text("Feed image is mandatory.");
    	}else{
    		$('.logo_error').text("");
    	}
    });
    */
    
    $('#feed-language_id').on('change', function(e){
    	var feed_language = $(this).val();
    	if(feed_language == ''){
    		e.preventDefault();
    		$('.feed_create_valid_wrapper ul li.language').css('color', '#52bad5');
    		$('.feed_create_valid_wrapper ul li.language span').css('color', '#555');
    		//$('.language_notify').text("Language is mandatory.");
    	}else{
    		$('.feed_create_valid_wrapper ul li.language').css('color', '#ccc');
    		$('.feed_create_valid_wrapper ul li.language span').css('color', '#ccc');
    		//$('.language_notify').text("");
    	}
    });
    
    $('#feed_title').on('blur', function(e){
    	var feed_title = $(this).val();
    	if(feed_title == ''){
    		e.preventDefault();
    		$('.feed_create_valid_wrapper ul li.title').css('color', '#52bad5');
    		$('.feed_create_valid_wrapper ul li.title span').css('color', '#555');
    		//$('.title_notify').text("Feed Title cannot be blank.");
    	}else{
    		$('.feed_create_valid_wrapper ul li.title').css('color', '#ccc');
    		$('.feed_create_valid_wrapper ul li.title span').css('color', '#ccc');
    		//$('.title_notify').text("");
    	}
    });
    
    $('#create').click(function(e){
    	
    	var feed_file = $('#imgInp').val();
    	var feed_desc = $('#feed_description').val();
    	var feed_language = $('#feed-language_id').val();
    	var feed_title = $('#feed_title').val();
    	
    	if(feed_language == ''){
    		e.preventDefault();
    		$('.feed_create_valid_wrapper ul li.language').css('color', '#52bad5');
    		$('.feed_create_valid_wrapper ul li.language span').css('color', '#555');
    		//$('.language_notify').text("Language is mandatory.");
    	}else{
    		$('.feed_create_valid_wrapper ul li.language').css('color', '#ccc');
    		$('.feed_create_valid_wrapper ul li.language span').css('color', '#ccc');
    		//$('.language_notify').text("");
    	}
    	
    	if(feed_title == ''){
    		e.preventDefault();
    		$('.feed_create_valid_wrapper ul li.title').css('color', '#52bad5');
    		$('.feed_create_valid_wrapper ul li.title span').css('color', '#555');
    		//$('.title_notify').text("Feed Title cannot be blank.");
    	}else{
    		$('.feed_create_valid_wrapper ul li.title').css('color', '#ccc');
    		$('.feed_create_valid_wrapper ul li.title span').css('color', '#ccc');
    		//$('.title_notify').text("");
    	}
    	
    	/*if(feed_logo == ''){
    		e.preventDefault();
    		$('.logo_error').text("Feed image is mandatory.");
    	}else{
    		$('.logo_error').text("");
    	}*/
    	
    	if(feed_file == '' && feed_desc == ''){
    		e.preventDefault();
    		$('.feed_create_valid_wrapper ul li.content').css('color', '#52bad5');
    		$('.feed_create_valid_wrapper ul li.content span').css('color', '#555');
    		//$('.d_val').text("Either file (image/video/audio) or description is required.");
    	}else{
    		$('.feed_create_valid_wrapper ul li.content').css('color', '#ccc');
    		$('.feed_create_valid_wrapper ul li.content span').css('color', '#ccc');
    		//$('.d_val').text("");
    	}
    	
    	/*if (height != '' && width != '') {
    		if (height < 432 && width < 1080) {
    			$('.logo_error').text("File dimensions should be minimum 1080 x 432.");
    			return false;
    		}
    	}*/
    	
    });
    
$('#update').click(function(e){
    	
    	/*var feed_logo = $('#logoInp').attr('value');*/
    	/*var feed_file = $('#imgInp').val();*/
		var feed_file = $('#imgInp').attr('value');
    	var feed_desc = $('#feed_description').val();
    	var feed_language = $('#feed-language_id').val();
    	var feed_title = $('#feed_title').val();
    	
    	if(feed_language == ''){
    		e.preventDefault();
    		$('.feed_create_valid_wrapper ul li.language').css('color', '#52bad5');
    		$('.feed_create_valid_wrapper ul li.language span').css('color', '#555');
    		//$('.language_notify').text("Language is mandatory.");
    	}else{
    		$('.feed_create_valid_wrapper ul li.language').css('color', '#ccc');
    		$('.feed_create_valid_wrapper ul li.language span').css('color', '#ccc');
    		//$('.language_notify').text("");
    	}
    	
    	if(feed_title == ''){
    		e.preventDefault();
    		$('.feed_create_valid_wrapper ul li.title').css('color', '#52bad5');
    		$('.feed_create_valid_wrapper ul li.title span').css('color', '#555');
    		//$('.title_notify').text("Feed Title cannot be blank.");
    	}else{
    		$('.feed_create_valid_wrapper ul li.title').css('color', '#ccc');
    		$('.feed_create_valid_wrapper ul li.title span').css('color', '#ccc');
    		//$('.title_notify').text("");
    	}
    	
    	/*if(feed_logo == ''){
    		e.preventDefault();
    		$('.logo_error').text("Feed image is mandatory.");
    	}else{
    		$('.logo_error').text("");
    	}*/
    	
    	if(feed_file == '' && feed_desc == ''){
    		e.preventDefault();
    		$('.feed_create_valid_wrapper ul li.content').css('color', '#52bad5');
    		$('.feed_create_valid_wrapper ul li.content span').css('color', '#555');
    		//$('.d_val').text("Either file (image/video/audio) or description is required.");
    	}else{
    		$('.feed_create_valid_wrapper ul li.content').css('color', '#ccc');
    		$('.feed_create_valid_wrapper ul li.content span').css('color', '#ccc');
    		//$('.d_val').text("");
    	}
    	
    	/*if (height != '' && width != '') {
    		if (height < 432 && width < 1080) {
    			$('.logo_error').text("File dimensions should be minimum 1080 x 432.");
    			return false;
    		}
    	}*/
    	
    });
    
    $('#update').click(function(e){
    	/*if (height != '' && width != '') {
    		if (height < 432 && width < 1080) {
    			$('.logo_error').text("File dimensions should be minimum 1080 x 432.");
    			return false;
    		}
    	}*/
    });
    $('#smileysbutton').focus(function(){
    	$('#smileysbutton').click();
    });
    $('#smileysbutton').blur(function(){
    	$('#smileysbutton').click();
    });

});



/*
 *	Charecter count in feed description. 
 */
/*var char_count = $("#feed_description").val();
char_count = char_count.length; */
/*var char_count = 0;
char_count = char_count; 
char_count +=  " of 240";
$('.limit_error').text(char_count);
$("#feed_description").keyup(function(){
	var max_chars = 240;
	var chars = $(this).val().length;
	if(chars > max_chars){
		$('.limit_error').text("Sorry...! Limit exceeded.");
	}else{
		$('.limit_error').text(chars + " of " + max_chars + "");
	}
});*/



$("#imgInp").change(function(){
    readFileURL(this);
});
/*$("#logoInp").change(function(){
    readLogoURL(this);
});*/


jQuery(function ($) {
    var basePath = $(location).attr('href');
    
    if(basePath.indexOf("update") > -1){
        $('[data-toggle="popover"]').popover({
            placement : 'top',
            // trigger : 'hover',
            html : true,
            content : '<div class="media"><a href="javascript:selectsmiley(\'new\')" class="pull-left"><img src="../../../themes/dropo_html/img/new.png" class="media-object" alt="Sample Image"></a>' +
            '<a href="javascript:selectsmiley(\'disc\')" class="pull-left"><img src="../../../themes/dropo_html/img/disc.png" class="media-object" alt="Sample Image"></a>' +
            '<a href="javascript:selectsmiley(\'card\')" class="pull-left"><img src="../../../themes/dropo_html/img/card.png" class="media-object" alt="Sample Image"></a></div>'
        });

    }else {
        $('[data-toggle="popover"]').popover({
            placement : 'top',
            // trigger : 'hover',
            html : true,
            content : '<div class="media"><a href="javascript:selectsmiley(\'new\')" class="pull-left"><img src="../../themes/dropo_html/img/new.png" class="media-object" alt="Sample Image"></a>' +
            '<a href="javascript:selectsmiley(\'disc\')" class="pull-left"><img src="../../themes/dropo_html/img/disc.png" class="media-object" alt="Sample Image"></a>' +
            '<a href="javascript:selectsmiley(\'card\')" class="pull-left"><img src="../../themes/dropo_html/img/card.png" class="media-object" alt="Sample Image"></a></div>'
        });

    }


});

function selectsmiley(smileyname) {
    var basePath = $(location).attr('href');
    if(basePath.indexOf("update") > -1){
        if(smileyname == 'new'){
            $("#selectsmiley").attr('src','../../../themes/dropo_html/img/new.png').show();
            $("#selectedsmileyfinal").val(smileyname);
            //$('#smileysbutton').click();


        }if(smileyname == 'disc'){
            $("#selectsmiley").attr('src','../../../themes/dropo_html/img/disc.png').show();
            $("#selectedsmileyfinal").val(smileyname);
           // $('#smileysbutton').click();

        }if(smileyname == 'card'){
            $("#selectsmiley").attr('src','../../../themes/dropo_html/img/card.png').show();
            $("#selectedsmileyfinal").val(smileyname);
            //$('#smileysbutton').click();

        }
    }else{
        if(smileyname == 'new'){
            $("#selectsmiley").attr('src','../../themes/dropo_html/img/new.png').show();
            $("#selectedsmileyfinal").val(smileyname);
            //$('#smileysbutton').click();


        }if(smileyname == 'disc'){
            $("#selectsmiley").attr('src','../../themes/dropo_html/img/disc.png').show();
            $("#selectedsmileyfinal").val(smileyname);
            //$('#smileysbutton').click();

        }if(smileyname == 'card'){
            $("#selectsmiley").attr('src','../../themes/dropo_html/img/card.png').show();
            $("#selectedsmileyfinal").val(smileyname);
            //$('#smileysbutton').click();

        }
    }



}

//crops tabs responsive js start
(function($) {

	  'use strict';

	  $(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function(e) {
	    var $target = $(e.target);
	    var $tabs = $target.closest('.nav-tabs-responsive');
	    var $current = $target.closest('li');
	    var $parent = $current.closest('li.dropdown');
	    $current = $parent.length > 0 ? $parent : $current;
	    var $next = $current.next();
	    var $prev = $current.prev();
	    var updateDropdownMenu = function($el, position){
	      $el
	        .find('.dropdown-menu')
	        .removeClass('pull-xs-left pull-xs-center pull-xs-right')
	        .addClass( 'pull-xs-' + position );
	    };

	    $tabs.find('>li').removeClass('next prev');
	    $prev.addClass('prev');
	    $next.addClass('next');
	    
	    updateDropdownMenu( $prev, 'left' );
	    updateDropdownMenu( $current, 'center' );
	    updateDropdownMenu( $next, 'right' );
	  });

	})(jQuery);
//crops tabs responsive js end
/*cart sub category create and update functionalities start*/
$(document).ready(function(){
	/*sub category onchange start*/
	$("#subcategories-parent_category_id").on('change', function(){
		var baseurl = $('#site-url').attr('data-url'); 
		$('#subcategories-subcategory_hidden').val($(this).val());
		$(this).parent(".select-wrapper").find(".holder").html($(this).find("option:selected").text());
		$(this).parents('div:eq(1)').nextAll().remove();
		var sub_id = $(this).val();
		var uid = $('#uid_hidden').val();
		var subcategories_lenth = $("select[name='subcategories[]']").length;
		var subcat_type = $('#subcategories-subcategory_hidden').attr('act-type');
		if (subcategories_lenth == 1 && subcat_type == 'update' && $("select[name='subcategories[]']").val() != '') {
			$("select[name='subcategories[]']").parents(':eq(2)').find('.help-block').html('');
			$('.field-subcategories').removeClass('has-error');
		} else if (subcategories_lenth == 0 && subcat_type == 'update' && $("#subcategories-parent_category_id").val() != '') {
			$("#subcategories-parent_category_id").parents(':eq(2)').find('.help-block').html('');
			$('.field-subcategories-parent_category_id').removeClass('has-error');
		}
		if ($("#subcategories-parent_category_id").val() != "") {
			$.ajax({
                type: 'GET',
                url: baseurl+"/cart/subcategories/getsubcategories",
                data: {
                    'id': sub_id,
                    'uid':uid
                },
                async :false,
                success: function (data) {
                	if (data != '') {
                		$(".cat-class").append( data );
                		var lenth = $('.field-subcategories').length;
                		var cat_len = lenth+1;
    					$('.cat-class .control-label:last').html('Sub Category '+ cat_len +' <span style="color: red;"> *</span> :');
    					
    				} else {
    					$('#subcategories-subcategory_hidden').val(sub_id);
    				}
                }
			});
		} else {
			$('#subcategories-subcategory_hidden').val('');
		}
	});
	/*sub category onchange end*/
	/*product sub category onchange start*/
	$("#products-category_id").on('change', function(){
		var baseurl = $('#site-url').attr('data-url'); 
		$('#subcategories-subcategory_hidden').val($(this).val());
		$(this).parent(".select-wrapper").find(".holder").html($(this).find("option:selected").text());
		$(this).parents('div:eq(1)').nextAll().remove();
		var sub_id = $(this).val();
		if ($("#products-category_id").val() != "") {
			$.ajax({
                type: 'GET',
                url: baseurl+"/cart/products/getsubcategories",
                data: {
                    'id': sub_id
                },
                async :false,
                success: function (data) {
                	if (data != '') {
    					$(".cat-class").append( data );
    					var lenth = $('.field-subcategories').length;
                		var cat_len = lenth;
    					$('.cat-class .control-label:last').html('Sub Category '+ cat_len +' <span style="color: red;"> *</span> :');
    					//$(".cat-class").append( data );
    				} else {
    					$('#subcategories-subcategory_hidden').val(sub_id);
    				}
                }
			});
		} else {
			$('#subcategories-subcategory_hidden').val('');
		}
	});
	/*product sub category onchange end*/
	/*sub cat form submit start*/
	result = true;
	categories_values = [];
	$('#subcategory-form-save').on('beforeSubmit', function(){
		categories_values = [];
		var baseurl = $('#site-url').attr('data-url'); 
		var subcategories_lenth = $("select[name='subcategories[]']").length;
		var sub_cat_name = $("#subcategories-category_name").val();
		//var subcat_hidden = $('#subcategories-subcategory_hidden').val();
		var subcat_type = $('#subcategories-subcategory_hidden').attr('act-type');
		var sub_cat_parent_field_length = $("#subcategories-parent_category_id").length;
		var parent_cat_val = $("#subcategories-parent_category_id").val();
		var subcategories_values = [];
		$(".cat-class select").each(function() {
			if ($(this). val() != '') {
				$(this).parents(':eq(2)').find('.help-block').html('');
				subcategories_values.push($(this). val());
				if (subcat_type == 'create') {
					categories_values.push($(this). val());
				} else {
					categories_values.push($(this). val());
				}
		    } else {
		    	//$(this).parents(':eq(2)').find('.help-block').html('Cannot be blank.');
		    	//$('#subcategory-form-save').yiiActiveForm('updateAttribute', 'subcategories', ["Cannot be blank"]);
		    }
		});
		if (subcategories_lenth == 1 && subcat_type == 'update' && $("select[name='subcategories[]']").val() == '' && sub_cat_parent_field_length == 0) {
			$("select[name='subcategories[]']").parents(':eq(2)').find('.help-block').html('Category cannot be blank.');
			$('.field-subcategories').addClass('has-error');
			return false;
	    } else if (subcategories_lenth == 0 && subcat_type == 'update' && $("#subcategories-parent_category_id").val() == '') {
			$("#subcategories-parent_category_id").parents(':eq(2)').find('.help-block').html('Category cannot be blank.');
			$('.field-subcategories-parent_category_id').addClass('has-error');
			return false;
	    } else {
	    	console.log(categories_values);
	    	var last = categories_values[categories_values.length - 1];
	    	console.log(last);
	    	var subcat_hidden = last;
	    	$('#subcategories-subcategory_hidden').val(subcat_hidden);
	    	$.ajax({
                type: 'GET',
                url: baseurl+"/cart/subcategories/categoriesunique",
                data: {
                    'category_name': sub_cat_name,
                    'id' : subcat_hidden,
                },
                async :false,
                success: function (data) {
                	responseData = $.parseJSON(data);
                	if (responseData['cat_name_count'] > 0) {
                		$('#subcategory-form-save').yiiActiveForm('updateAttribute', 'subcategories-category_name', ["Category name already exist"]);
                		result = false;
                	} else if (responseData['cat_count'] > 0) {
                		$('#subcategory-form-save').yiiActiveForm('updateAttribute', 'subcategories-category_name', ["Couldn't add this category due to dependency"]);
                		result = false;
                	} else if (responseData['cat_name_count'] == 0 && responseData['cat_count'] == 0) {
                		$('#subcategory-form-save').yiiActiveForm('updateAttribute', 'subcategories-category_name', '');
                		result = true;
                	}
                }
			});
	    	return result;
	    }
	});
/*	$('#subcategory-form-save').on('beforeSubmit', function(){
		categories_values = [];
		var baseurl = $('#site-url').attr('data-url'); 
		var subcategories_lenth = $("select[name='subcategories[]']").length;
		var sub_cat_name = $("#subcategories-category_name").val();
		//var subcat_hidden = $('#subcategories-subcategory_hidden').val();
		var subcat_type = $('#subcategories-subcategory_hidden').attr('act-type');
		var sub_cat_parent_field_length = $("#subcategories-parent_category_id").length;
		var parent_cat_val = $("#subcategories-parent_category_id").val();
		var subcategories_values = [];
		if (subcat_type == 'create') {
			if (parent_cat_val) {
				categories_values.push(parent_cat_val);
			}
		}
		$("select[name='subcategories[]']").each(function() {
			if ($(this). val() != '') {
				$(this).parents(':eq(2)').find('.help-block').html('');
				subcategories_values.push($(this). val());
				if (subcat_type == 'create') {
					categories_values.push($(this). val());
				} else {
					categories_values.push($(this). val());
				}
		    } else {
		    	//$(this).parents(':eq(2)').find('.help-block').html('Cannot be blank.');
		    	//$('#subcategory-form-save').yiiActiveForm('updateAttribute', 'subcategories', ["Cannot be blank"]);
		    }
		});
		if (subcat_type == 'update') {
			if (parent_cat_val) {
				categories_values.push(parent_cat_val);
			}
		}
		if (subcategories_lenth == 1 && subcat_type == 'update' && $("select[name='subcategories[]']").val() == '' && sub_cat_parent_field_length == 0) {
			$("select[name='subcategories[]']").parents(':eq(2)').find('.help-block').html('Category cannot be blank.');
			$('.field-subcategories').addClass('has-error');
			return false;
	    } else if (subcategories_lenth == 0 && subcat_type == 'update' && $("#subcategories-parent_category_id").val() == '') {
			$("#subcategories-parent_category_id").parents(':eq(2)').find('.help-block').html('Category cannot be blank.');
			$('.field-subcategories-parent_category_id').addClass('has-error');
			return false;
	    } else {
	    	console.log(categories_values);
	    	var last = categories_values[categories_values.length - 1];
	    	console.log(last);
	    	var subcat_hidden = last;
	    	$('#subcategories-subcategory_hidden').val(subcat_hidden);
	    	$.ajax({
                type: 'GET',
                url: baseurl+"/cart/subcategories/categoriesunique",
                data: {
                    'category_name': sub_cat_name,
                    'id' : subcat_hidden,
                },
                async :false,
                success: function (data) {
                	responseData = $.parseJSON(data);
                	if (responseData['cat_name_count'] > 0) {
                		$('#subcategory-form-save').yiiActiveForm('updateAttribute', 'subcategories-category_name', ["Category name already exist"]);
                		result = false;
                	} else if (responseData['cat_count'] > 0) {
                		$('#subcategory-form-save').yiiActiveForm('updateAttribute', 'subcategories-category_name', ["Couldn't add this category due to dependency"]);
                		result = false;
                	} else if (responseData['cat_name_count'] == 0 && responseData['cat_count'] == 0) {
                		$('#subcategory-form-save').yiiActiveForm('updateAttribute', 'subcategories-category_name', '');
                		result = true;
                	}
                }
			});
	    	return result;
	    }
	});*/
	/*sub cat form submit end*/
	/*products form submit start*/
	$('#products-form-save').on('beforeSubmit', function(){
		var baseurl = $('#site-url').attr('data-url'); 
		//var subcategories_lenth = $("select[name='subcategories[]']").length;
		var subcategories_lenth = $(".cat-class select").length;
		var product_name = $("#products-product_name").val();
		var sku_name = $("#products-sku").val();
		var request_type = $("#subcategories-subcategory_hidden").attr('act-type');
		var uid_hidden = $("#uid_hidden").val();
		var company_id = $("#products-company_id").val();
		var product_image_value = $('#products-product_image').val();
		var subcategories_values = [];
		$(".cat-class select").each(function() {
			if ($(this). val() != '') {
				$(this).parents(':eq(2)').find('.help-block').html('');
				subcategories_values.push($(this). val());
		    } else {
		    	$(this).parents(':eq(2)').find('.help-block').html('Cannot be blank.');
		    	$('.field-subcategories').addClass('has-error');
		    }
		});
		//alert(subcategories_values);
		/*$("select[name='subcategories[]']").each(function() {
			if ($(this). val() != '') {
				$(this).parents(':eq(2)').find('.help-block').html('');
				subcategories_values.push($(this). val());
		    } else {
		    	$(this).parents(':eq(2)').find('.help-block').html('Cannot be blank.');
		    	$('.field-subcategories').addClass('has-error');
		    }
		});
		alert(subcategories_values);*/
		if (subcategories_values.length != subcategories_lenth) {
			return false;
	    } else if (product_image_value == '') {
	    	//$('#product-image-error').find('.help-error').html('Please select atlease one image.').css("color", "#a94442"); 
	    	return false;
	    } else {
	    	$.ajax({
                type: 'GET',
                url: baseurl+"/cart/products/productsunique",
                data: {
                    'product_name': product_name,
                    'sku_name' : sku_name,
                    'request_type' : request_type,
                    'uid' : uid_hidden,
                    'company_id' : company_id,
                },
                async :false,
                success: function (data) {
                	responseData = $.parseJSON(data);
                	if (responseData['product_name_count'] > 0) {
                		$('#products-form-save').yiiActiveForm('updateAttribute', 'products-product_name', ["Product name already exist"]);
                		result = false;
                	} else if (responseData['sku_count'] > 0) {
                		$('#products-form-save').yiiActiveForm('updateAttribute', 'products-sku', ["SKU already exist"]);
                		result = false;
                	} else if (responseData['product_name_count'] == 0 && responseData['sku_count'] == 0) {
                		$('#products-form-save').yiiActiveForm('updateAttribute', 'products-product_name', '');
                		$('#products-form-save').yiiActiveForm('updateAttribute', 'products-sku', '');
                		result = true;
                	}
                }
			});
	    	return result;
	    }
	});
	/*products form submit end*/
});
function getsubcategories(obj) {
	//alert($(obj).find("option:selected").text());
	//$(obj).parent('div').nextAll('.field-subcategories').remove();
	var baseurl = $('#site-url').attr('data-url'); 
	$('#subcategories-subcategory_hidden').val($(obj).val());
	$(obj).parents('div:eq(1)').nextAll().remove();
	$(obj).parent(".select-wrapper").find(".holder").html($(obj).find("option:selected").text());
	var request_type = $("#subcategories-subcategory_hidden").attr('act-type');
	if ($(obj).val() != '') {
		jQuery(function($) {
			$.ajax({
                type: 'GET',
                url: baseurl+"/cart/subcategories/getsubcategories",
                data: {
                    'id': $(obj).val(),
                },
                async :false,
                success: function (data) {
                	if (data != '') {
    					$(".cat-class").append( data );
    					var lenth = $('.field-subcategories').length;
    					if (request_type == 'create') {
    						var cat_len = lenth+1;
    					} else {
    						var cat_len = lenth;
    					}
                		$('.cat-class .control-label:last').html('Sub Category '+ cat_len +' <span style="color: red;"> *</span> :');
    					
    				} else {
    					$('#subcategories-subcategory_hidden').val($(obj).val());
    				}
                }
			});
			
			/*$.get("getsubcategories?id="+$(obj).val(), function( data ) {
				if (data != '') {
					$(".cat-class").append( data );
				} else {
					$('#subcategories-subcategory_hidden').val($(obj).val());
				}
			});*/
		}); 
	} else {
		$('#subcategories-subcategory_hidden').val('');
	}
}
/*cart sub category create and update functionalities end*/
/*cart product sub category create and update functionalities start*/
function getproductsubcategories(obj) {
	//alert($(obj).find("option:selected").text());
	//$(obj).parent('div').nextAll('.field-subcategories').remove();
	var baseurl = $('#site-url').attr('data-url'); 
	$('#subcategories-subcategory_hidden').val($(obj).val());
	$(obj).parents('div:eq(1)').nextAll().remove();
	$(obj).parent(".select-wrapper").find(".holder").html($(obj).find("option:selected").text());
	var request_type = $("#subcategories-subcategory_hidden").attr('act-type');
	if ($(obj).val() != '') {
		jQuery(function($) {
			$.ajax({
                type: 'GET',
                url: baseurl+"/cart/products/getsubcategories",
                data: {
                    'id': $(obj).val(),
                },
                async :false,
                success: function (data) {
                	if (data != '') {
    					$(".cat-class").append( data );
    					var lenth = $('.field-subcategories').length;
                		//var cat_len = lenth;
    					if (request_type == 'create') {
    						var cat_len = lenth;
    						$('.cat-class .control-label:last').html('Sub Category '+ cat_len +' <span style="color: red;"> *</span> :');
    					} else {
    						var cat_len = lenth-1;
    						$('.cat-class .control-label:last').html('Sub Category '+ cat_len +' <span style="color: red;"> *</span> :');
    					}
    				} else {
    					$('#subcategories-subcategory_hidden').val($(obj).val());
    				}
                }
			});
			
			/*$.get("getsubcategories?id="+$(obj).val(), function( data ) {
				if (data != '') {
					$(".cat-class").append( data );
				} else {
					$('#subcategories-subcategory_hidden').val($(obj).val());
				}
			});*/
		}); 
	} else {
		$('#subcategories-subcategory_hidden').val('');
	}
}
/*cart product sub category create and update functionalities end*/