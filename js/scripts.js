var move;
var favFoods;
var favoriteArray =[];

$(function() {
    $("#favorite-things-1").submit(function(event){
      event.preventDefault();
      var favorite1 = $("#favorite1").val();
      var favorite2 = $("#favorite2").val();
      var favorite3 = $("#favorite3").val();

      favoriteArray = [favorite1, favorite2, favorite3];

      $(".output ul").append("<li>" + favoriteArray[0] + "</li>");
      $(".output ul").append("<li>" + favoriteArray[1] + "</li>");
      $(".output ul").append("<li>" + favoriteArray[2] + "</li>");
    });

    $("#fav-things-2").submit(function(event){
      event.preventDefault();
      favFoods = $("#favorite-things-2").val().replace(' ', '').split(',');

      favFoods.forEach(function(i){
        $(".output2 ul").append("<li>" + i + "</li>");
      });

      $(".output2 ul").children("li").click(function(){
        move = $(this).text();
        favFoods.indexOf(move);
        favoriteArray.push(move);
        $(".output ul").append("<li>" + favoriteArray[favoriteArray.length-1] + "</li>");
        $(this).remove();
      });
    });
});
