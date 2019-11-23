$(document).ready(function () {
 //$('.before-now').twentytwenty();

 $('#sunday-school-group').accordion({
  event: "click",
  heightStyle: "content",
  collapsible: true
 });
});

$(document).ready(function () {

 $('.cocoen').cocoen();

});



$(document).ready(function(){
 var url = "https://www.flickr.com/services/feeds/photos_public.gne?id=185514581@N08&format=json&jsoncallback=?&tags=father_day";

 $.getJSON(url , function (data) {
  var html= "";
  $.each(data.items, function (i,item) {
   html += "<a href='" + item.link +"'  data-title='" + item.title + "'><img alt='father-day-image' class='eachPhoto' src=" + item.media.m + "></a>";
  });
  $("#flickPhoto1").html(html);
 });

 var url = "https://www.flickr.com/services/feeds/photos_public.gne?id=185514581@N08&format=json&jsoncallback=?&tags=mother_day";
 $.getJSON( url, function (data) {
  var html= "";
  $.each(data.items, function (i,item) {
   html += "<a href='" + item.link +"'    data-title='" + item.title + "'><img alt='mother-day-image' class='eachPhoto' src=" + item.media.m + "></a>";
  });
  $("#flickPhoto2").html(html);
 });

 var url = "https://www.flickr.com/services/feeds/photos_public.gne?id=185514581@N08&format=json&jsoncallback=?&tags=thuong_kho";
 $.getJSON(url , function (data) {
  var html= "";
  $.each(data.items, function (i,item) {
   html += "<a href='" + item.link +"'  data-title='" + item.title + "'><img alt='passion-image' class='eachPhoto' src=" + item.media.m + "></a>";
  });
  $("#flickPhoto3").html(html);
 });

});



