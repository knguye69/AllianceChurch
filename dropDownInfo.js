$(document).ready(function(){
    $('.info h2').click(function () {
        $(this).toggleClass("fa fa-minus");
        $(this).next().slideToggle(500);

        }
    );
});