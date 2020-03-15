$(document).ready(function (){
   var header = $('header');
   
   $(window).scroll(function() {
      console.log($(window).scrollTop());
      if ($(window).scrollTop() === 0) {
         header.css({
            'background':'none'
         });
      } else {
         header.css({
            'background':'linear-gradient(to left,  #00498B, #002A5F)'
         });
      }
   });
   
   processSpace('#product-space', header);
   $('#home-space').height(header.height());
});

function processSpace(element, header) {
   $(element).height(header.height());
   $(element).css({
      'margin-top' : '-' + header.height() + 'px'
      });
}
