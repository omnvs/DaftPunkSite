// $(document).ready(function () {
//    $(".MainHeader").hover(
//      function () {
//        $(this).addClass("MainHeaderInvert");
//      },
//    function () {
//        $(this).removeClass("MainHeaderInvert");
//      }
//    );
// });



// TODO
// when hovering on the text, add a class to body
// the class changes the background and text on hover
// remove class after you're done hovering

$('MainHeader').hover(
    function(){ $(this).addClass('MainHeaderInvert') },
    function(){ $(this).removeClass('MainHeaderInvert') }
)



