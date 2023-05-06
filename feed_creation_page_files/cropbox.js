/**
 * Created by ezgoing on 14/9/2014.
 */

"use strict";
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {
    var cropbox = function(options, el){
        var el = el || $(options.imageBox),
            obj =
            {
                state : {},
                ratio : 1,
                updown : 0,
                rightleft : 0,
                options : options,
                imageBox : el,
                thumbBox : el.find(options.thumbBox),
                spinner : el.find(options.spinner),
                image : new Image(),
                getDataURL: function ()
                {
                    var width = this.thumbBox.width(),
                        height = this.thumbBox.height(),
                        canvas = document.createElement("canvas"),
                        dim = el.css('background-position').split(' '),
                        size = el.css('background-size').split(' '),
                        dx = parseInt(dim[0]) - el.width()/2 + width/2,
                        dy = parseInt(dim[1]) - el.height()/2 + height/2,
                        dw = parseInt(size[0]),
                        dh = parseInt(size[1]),
                        sh = parseInt(this.image.height),
                        sw = parseInt(this.image.width);

                    canvas.width = width;
                    canvas.height = height;
                    var context = canvas.getContext("2d");
                    context.drawImage(this.image, 0, 0, sw, sh, dx, dy, dw, dh);
                    var imageData = canvas.toDataURL('image/png');
                    return imageData;
                },
                getBlob: function()
                {
                    var imageData = this.getDataURL();
                    var b64 = imageData.replace('data:image/png;base64,','');
                    var binary = atob(b64);
                    var array = [];
                    for (var i = 0; i < binary.length; i++) {
                        array.push(binary.charCodeAt(i));
                    }
                    return  new Blob([new Uint8Array(array)], {type: 'image/png'});
                },
                zoomIn: function ()
                {
                    this.ratio*=1.1;
                    setBackground();
                },
                zoomOut: function ()
                {
                    this.ratio*=0.9;
                    setBackground();
                },
                up: function ()
                {
                	this.updown -= 20;
                	setBackground();
                },
                right: function ()
                {
                	this.rightleft += 20;
                	setBackground();
                },
                down: function ()
                {
                	this.updown += 20;
                	setBackground();
                },
                left: function ()
                {
                	this.rightleft -= 20;
                	setBackground();
                }
            },
            setBackground = function(e)
            {
        	
        		
                var w =  parseInt(obj.image.width)*obj.ratio;
                var h =  parseInt(obj.image.height)*obj.ratio;

                var pw = (el.width() - w) / 2;
                var ph = (el.height() - h) / 2;
                
                
                /* Added Code Start 
                var tb_width = obj.thumbBox.width() + 2;
                var tb_height = obj.thumbBox.height() + 2;
                
                if(w > tb_width && h > tb_height){
                	$('#btnZoomOut').attr('disabled', false);
                }else{
                	if(w < tb_width){
                		el.css({'background-size': tb_width +'px ' + h + 'px'});
                	}else if(h < tb_height){
                		el.css({'background-size': w +'px ' + tb_height + 'px'});
                	}
                	$('#btnZoomOut').attr('disabled', true);
                	return false;
                }
                 Added Code End */

                el.css({
                	'background-size': w +'px ' + h + 'px',
            		'background-position': (pw + obj.rightleft) + 'px ' + (ph + obj.updown) + 'px',
            		//'background-position': (pw) + 'px ' + (ph) + 'px',
                    'background-image': 'url(' + obj.image.src + ')',
                    'background-repeat': 'no-repeat'
                   });

                /* Added code start 
                var bg = el.css('background-position').split(' ');
                var bgX = parseInt(bg[0]);
                var bgY = parseInt(bg[1]);
                
                var bgs = el.css('background-size').split(' ');
                
                var tx = ((obj.imageBox.height() - (obj.thumbBox.height() + 2))/2);
                var bx = ((obj.thumbBox.height() + 2) + tx);
                var ly = ((obj.imageBox.width() - obj.thumbBox.width())/2);
                var ry = (obj.thumbBox.width() + ly);
                
                if(parseInt(bg[1]) > tx || (parseInt(bg[1])) < -(parseInt(bgs[1]) - bx) || parseInt(bg[0]) > ly || (parseInt(bg[0])) < -(parseInt(bgs[0]) - ry)){
                	if(parseInt(bg[1]) > tx){
                		el.css('background-position', bgX +'px ' + tx + 'px');
                		$('.move_down').attr('disabled', true);
                	}else{
                		$('.move_down').attr('disabled', false);
                	}
                	if((parseInt(bg[1])) < -(parseInt(bgs[1]) - bx)){
                		el.css('background-position', bgX +'px ' + -(parseInt(bgs[1]) - bx) + 'px');
                		$('.move_up').attr('disabled', true);
                	}else{
                		$('.move_up').attr('disabled', false);
                	}
                	if(parseInt(bg[0]) > ly){
                		el.css('background-position', ly +'px ' + bgY + 'px');
                		$('.move_right').attr('disabled', true);
                	}else{
                		$('.move_right').attr('disabled', false);
                	}
                	if((parseInt(bg[0])) < -(parseInt(bgs[0]) - ry)){
                		el.css('background-position', -(parseInt(bgs[0]) - ry) +'px ' + bgY + 'px');
                		$('.move_left').attr('disabled', true);
                	}else{
                		$('.move_left').attr('disabled', false);
                	}
                }
                else{
                	$('.move_right, .move_up, .move_down, .move_left').attr('disabled', false);
                }
                Added code end */
                
            },
            imgMouseDown = function(e)
            {
                e.stopImmediatePropagation();

                obj.state.dragable = true;
                obj.state.mouseX = e.clientX;
                obj.state.mouseY = e.clientY;
            },
            imgMouseMove = function(e)
            {
                e.stopImmediatePropagation();

                if (obj.state.dragable)
                {
                    var x = e.clientX - obj.state.mouseX;
                    var y = e.clientY - obj.state.mouseY;

                    var bg = el.css('background-position').split(' ');
                    var bgX = x + parseInt(bg[0]);
                    var bgY = y + parseInt(bg[1]);
                    /* Added code start 
                    var bgs = el.css('background-size').split(' '); 
                    
                    var tx = ((obj.imageBox.height() - (obj.thumbBox.height() + 2))/2);
                    var bx = ((obj.thumbBox.height() + 2) + tx);
                    var ly = ((obj.imageBox.width() - obj.thumbBox.width())/2);
                    var ry = (obj.thumbBox.width() + ly);
                    
                    if(parseInt(bg[1]) > tx || (parseInt(bg[1])) < -(parseInt(bgs[1]) - bx) || parseInt(bg[0]) > ly || (parseInt(bg[0])) < -(parseInt(bgs[0]) - ry)){
                    	if(parseInt(bg[1]) > tx){
                    		el.css('background-position', bgX +'px ' + tx + 'px');
                    	}else if((parseInt(bg[1])) < -(parseInt(bgs[1]) - bx)){
                    		el.css('background-position', bgX +'px ' + -(parseInt(bgs[1]) - bx) + 'px');
                    	}else if(parseInt(bg[0]) > ly){
                    		el.css('background-position', ly +'px ' + bgY + 'px');
                    	}else if((parseInt(bg[0])) < -(parseInt(bgs[0]) - ry)){
                    		el.css('background-position', -(parseInt(bgs[0]) - ry) +'px ' + bgY + 'px');
                    	}
                    }else{
                    	el.css('background-position', bgX +'px ' + bgY + 'px');
                    }
                     Added code end */
                    el.css('background-position', bgX +'px ' + bgY + 'px');
                    obj.state.mouseX = e.clientX;
                    obj.state.mouseY = e.clientY;
                }
            },
            imgMouseUp = function(e)
            {
                e.stopImmediatePropagation();
                obj.state.dragable = false;
            },
            zoomImage = function(e)
            {
                e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? obj.ratio*=1.1 : obj.ratio*=0.9;
                setBackground();
            }

        obj.spinner.show();
        obj.image.onload = function() {
            obj.spinner.hide();
            setBackground();

            el.bind('mousedown', imgMouseDown);
            el.bind('mousemove', imgMouseMove);
            $(window).bind('mouseup', imgMouseUp);
            //el.bind('mousewheel DOMMouseScroll', zoomImage);
        };
        obj.image.src = options.imgSrc;
        el.on('remove', function(){$(window).unbind('mouseup', imgMouseUp)});

        return obj;
    };

    jQuery.fn.cropbox = function(options){
        return new cropbox(options, this);
    };
}));


