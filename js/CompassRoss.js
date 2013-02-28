/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

;(function($, window, undefined) {
    $.fn.extend({
        CompassRose: function(settings){   
            
            var sett = $.extend({
                pos: 0
            }, settings);
            
            var img = '<img class="imgA1" src="img/rose.png" usemap="#locations"  height="162" width="162"/>';
           
            var map = '<map name="locations">\n\
                        <area shape="rect" coords="67,14,98,30" href="#" alt="North" id="l1"/>\n\
                        <area shape="rect" coords="26,36,57,52" href="#" alt="NorthWest" id="l2"/> \n\
                        <area shape="rect" coords="12,79,43,95" href="#" alt="West" id="l3"/>\n\
                        <area shape="rect" coords="25,123,56,139" href="#" alt="SouthWest" id="l4"/>\n\
                        <area shape="rect" coords="67,139,98,155" href="#" alt="South" id="l5"/>\n\
                        <area shape="rect" coords="117,123,148,139" href="#" alt="SouthEast" id="l6"/>\n\
                        <area shape="rect" coords="133,79,164,95" href="#" alt="East" id="l7"/>\n\
                        <area shape="rect" coords="112,36,143,52" href="#" alt="NorthEast" id="l8"/>\n\
                       </map>';
            
            var img1 = '<img class="imgB1" src="http://teeworlds.com/images/dl_arrow.png"/>';
            var input = '<input type="text" id="location" value="" />';
            
            $(this).append(img);
            $(this).append(map);
            $(this).append(img1);
            $(this).append(input);
            
            $(map).find('area').each(function(i){
                $('#'+$(this).attr('id')).bind("click", function(){
                    var pos = - 45*i + 180;
                    $('.'+$(img1).attr('class')).rotate({ angle:0,animateTo:pos,easing: $.easing.easeInOutExpo });                    
                    $('#'+$(input).attr('id')).val( pos );
               //     console.log($('#'+$(input).attr('id')).val( ));
                })
            });
//                 console.log(sett.pos);
            //Initial
            $('.imgB1').rotate({ angle:0,animateTo:sett.pos,easing: $.easing.easeInOutExpo });                    
            
            return true;
        }
//        ,
//        sizeImage: function(img, pic_real_width){
//           $(img).attr("src", $('img').attr("src"))
//                .load(function() {
//                    pic_real_width = this.width;   // Note: $(this).width() will not
//
//    //                pic_real_height = this.height; // work for in memory images.
//    //       console.log(pic_real_width);         
//           },
//           function(response, status, xhr){
//                       pic_real_width = this.width;   // Note: $(this).width() will not
//           });
//           console.log(pic_real_width);
//           return pic_real_width;
//        }
     });
})(jQuery, window)
