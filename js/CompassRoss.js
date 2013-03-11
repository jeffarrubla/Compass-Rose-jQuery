/*  
 * CompassRoss.js
 */

;(function($, window, undefined) {
    $.fn.extend({
        CompassRose: function(settings){   
            //Settings
            var sett = $.extend({
                pos: 0,
                size: 162
            }, settings);
            
            var img1 = '<img id="#arrow" class="imgB1" src="http://teeworlds.com/images/dl_arrow.png"/>';
            var input = '<input type="text" id="location" value="" />';
            var map = '<map name="locations"></map>';

            var img = new Image();
            img.onload = function() {    
                var maxWidth = sett.size,
                    maxHeight = sett.size,
                    imageWidth = img.width,
                    imageHeight = img.height;

                if (imageWidth > imageHeight) {
                    if (imageWidth > maxWidth) {
                        imageHeight *= maxWidth / imageWidth;
                        imageWidth = maxWidth;
                    }
                }else {
                    if (imageHeight > maxHeight) {
                        imageWidth *= maxHeight / imageHeight;
                        imageHeight = maxHeight;
                    }
                }

                $(img).attr('class','imgA1');
                $(img).attr('usemap','#locations');
                $(img).attr('width',imageWidth);
                $(img).attr('height',imageHeight);

                console.log(imageWidth + ' ' + imageHeight);

                $('[name="locations"]').html(
                    '<area shape="rect" coords="'+parseInt(imageWidth*0.41)+','+parseInt(imageHeight*0.09)+','+(parseInt(imageWidth*0.41)+31)+','+(parseInt(imageHeight*0.09)+16)+'" href="#" alt="North" id="l1"/>\n\
                     <area shape="rect" coords="'+parseInt(imageWidth*0.16)+','+parseInt(imageHeight*0.2)+','+(parseInt(imageWidth*0.16)+31)+','+(parseInt(imageHeight*0.2)+16)+'" href="#" alt="NorthWest" id="l2"/> \n\
                     <area shape="rect" coords="'+parseInt(imageWidth*0.07)+','+parseInt(imageHeight*0.5)+','+(parseInt(imageWidth*0.07)+31)+','+(parseInt(imageHeight*0.5)+16)+'" href="#" alt="West" id="l3"/>\n\
                     <area shape="rect" coords="'+parseInt(imageWidth*0.15)+','+parseInt(imageHeight*0.75)+','+(parseInt(imageWidth*0.15)+31)+','+(parseInt(imageHeight*0.75)+16)+'" href="#" alt="SouthWest" id="l4"/>\n\
                     <area shape="rect" coords="'+parseInt(imageWidth*0.41)+','+parseInt(imageHeight*0.86)+','+(parseInt(imageWidth*0.41)+31)+','+(parseInt(imageHeight*0.86)+16)+'" href="#" alt="South" id="l5"/>\n\
                     <area shape="rect" coords="'+parseInt(imageWidth*0.72)+','+parseInt(imageHeight*0.76)+','+(parseInt(imageWidth*0.72)+31)+','+(parseInt(imageHeight*0.76)+16)+'" href="#" alt="SouthEast" id="l6"/>\n\
                     <area shape="rect" coords="'+parseInt(imageWidth*0.82)+','+parseInt(imageHeight*0.49)+','+(parseInt(imageWidth*0.82)+31)+','+(parseInt(imageHeight*0.49)+16)+'" href="#" alt="East" id="l7"/>\n\
                     <area shape="rect" coords="'+parseInt(imageWidth*0.7)+','+parseInt(imageHeight*0.2)+','+(parseInt(imageWidth*0.7)+31)+','+(parseInt(imageHeight*0.2)+16)+'" href="#" alt="NorthEast" id="l8"/>'
                );
            
                $('[name="locations"]').find('area').each(function(i){
                    $('#'+$(this).attr('id')).bind("click", function(){
                        var pos = - 45*i + 180;
                        $('.'+$(img1).attr('class')).rotate({ angle:0,animateTo:pos,easing: $.easing.easeInOutExpo });                    
                        $('#'+$(input).attr('id')).val( pos );
                    })
                });
            
                $(".imgB1").css('top',parseInt(imageHeight*0.4));
                $(".imgB1").css('left',parseInt(imageWidth*0.38));
                //Initial
                $('.imgB1').rotate({ angle:0,animateTo:sett.pos,easing: $.easing.easeInOutExpo });                    
            }

            img.src = 'img/rose.png';            
           
            $(this).append(img);            
            $(this).append(map);
            $(this).append(img1);
            $(this).append(input);
            
            return true;
        }
     });
})(jQuery, window)
