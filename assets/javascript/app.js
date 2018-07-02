

var title;
var year;
var queryURL;
var movies = [];


$("#search-by-title-button").on('click', function() {
    title = $("#t").val();
    year = $("#y").val();
    if (year && title) {
        queryURL = "https://www.omdbapi.com/?s=" + title + "&y=" + year + "&type=movie&apikey=e73085d6";
    }
    else if (!year) {
        queryURL="https://www.omdbapi.com/?s=" + title + "&y=&type=movie&apikey=e73085d6";
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
        movies.push(array.Search[x]);
        var cardPoster = array.Search[x].Poster;
        $(".posters").append('<div class="card m-2 bg-dark text-center text-white">'+
        '<img class="card-img" src="'+ cardPoster + '" alt="test poster">'+
        '<div class="card-img-overlay col-small d-flex flex-column justify-content-end hover-text">'+
            '<h5 class="card-title col-small movie-name">'+ array.Search[x].Title + '</h5>'+
            '<p class="card-text col-small movie-year">' + array.Search[x].Year + '</p>'+
            '<p class="card-text col-small movie-IMDb">IMDb id: ' + array.Search[x].imdbID + '</p>' +
        '</div>'+
    '</div>');
        $(".movie-name").hide(); 
        $(".movie-year").hide();
        $(".movie-IMDb").hide();
    }   
    for (var i = 0; i<10; i++){   
        newCard(i);
    }
    $(".card" ).hover(
        function() {
          $(this).find(".card-img").css("opacity", "0.2");
          $(this).find(".movie-name").show();
          $(this).find(".movie-year").show();
          $(this).find(".movie-IMDb").show();
        }, function() {
          $(this).find(".card-img").css("opacity", "1");
          $(this).find(".movie-name").hide();
          $(this).find(".movie-year").hide();
          $(this).find(".movie-IMDb").hide();
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