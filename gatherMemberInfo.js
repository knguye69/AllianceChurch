$(document).ready(function(){
    $.getJSON("teammember.json", function (data) {
        $.each(data,function () {

                $.each(this,function (key,value) {
                    $("#member").append(
                        "<div class='column'>" +
                        "<div class='card'>" +
                        "<img src='"+ value.image+"'>"  +

                        "<div class='teamContainer'" +
                        "<h3 class='teamName'>" + value.full_name + "</h3>" +

                        "<h3 class='teamTitle'>" + value.title + "</h3>" +
                        //"<p>"+ value.tag_line + "</p>" +
                        "</div>" +
                        "</div>" +
                        "</div>"


                    );
                });

        });
    });



});