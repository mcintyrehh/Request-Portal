

var title;
var year;
var queryURL;


$("#search-by-title-button").on('click', function() {
    title = $("#t").val();
    year = $("#y").val();
    if (year && title) {
        queryURL = "http://www.omdbapi.com/?s=" + title + "&y=" + year + "&type=movie&apikey=e73085d6";
    }
    else if (!year) {
        queryURL="http://www.omdbapi.com/?s=" + title + "&y=&type=movie&apikey=e73085d6";
    }
    else {

    }
    console.log(queryURL);
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    var array = response;
    console.log(response);
    console.log(array.Search[0].Title);
    
    function newCard(x) {
        // var cardTitle = array.Search[x].Title;
        // var cardYear = array.Search[x].Year;
        var cardPoster = array.Search[x].Poster;
        $(".posters").append('<div class="card m-2 bg-dark text-center text-white">'+
        '<img class="card-img" src="'+ cardPoster + '" alt="test poster">'+
        '<div class="card-img-overlay d-flex flex-column justify-content-end hover-text">'+
            '<h5 class="card-title movie-name">'+ array.Search[x].Title + '</h5>'+
            '<p class="card-text movie-year">' + array.Search[x].Title + '</p>'+
        '</div>'+
    '</div>');
        $(".movie-name").hide(); 
        $(".movie-year").hide();
    }   
    for (var i = 0; i<10; i++){   
        newCard(i);
    }
    $(".card" ).hover(
        function() {
          $(this).find(".card-img").css("opacity", "0.2");
          $(this).find(".movie-name").show();
          $(this).find(".movie-year").show();
        }, function() {
          $(this).find(".card-img").css("opacity", "1");
          $(this).find(".movie-name").hide();
          $(this).find(".movie-year").hide();
        }
      );
    });
   
});

$(".card" ).hover(
    function() {
      $(this).find(".card-img").css("opacity", "0.2");
      $(this).find(".movie-name").show();
      $(this).find(".movie-year").show();
    }, function() {
      $(this).find(".card-img").css("opacity", "1");
      $(this).find(".movie-name").hide();
      $(this).find(".movie-year").hide();
    }
  );