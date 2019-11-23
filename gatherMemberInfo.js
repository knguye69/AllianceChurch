$(document).ready(function(){
    $.getJSON("teammember.json", function (data) {
        $.each(data,function () {

                $.each(this,function (key,value) {
                    $("#member").append(
                        "<div class='column'>" +
                        "<div class='card'>" +
                        "<img src='"+ value.image+"'>"  +

                        "<div class='teamContainer'" +



                        "<h3></h3>" +
                        "<h3 class='memberName'>" + value.fulName + "<br><br>"  + "</h3>" +
                        "<h3 class='memberTitle'>" +  value.title +  "</h3>" +

                        "</div>" +
                        "</div>" +
                        "</div>"


                    );
                });

        });
    });



});