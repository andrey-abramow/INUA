define(['./module'],function(directives){
    directives.directive('shadow',function(){
    return{
      restrict: 'EA',

      link: function (scope,element,attrs) {

           window.onscroll = function (event) {
              // called when the window is scrolled.
              if(document.body.scrollTop>0){
                   element.addClass('shadow');
               }else{
                  element.removeClass('shadow');
              }
          }

        }

    }
  });
});
