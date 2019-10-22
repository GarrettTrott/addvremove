$(document).ready(function(){
  $(".clickable").click(function(){
    $("h1").before("<img src='pic.jpg'>");
  });
  $("#clickable").click(function(){
    $("img").remove()
  });
});
