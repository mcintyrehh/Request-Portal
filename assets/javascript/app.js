

var title;
var year;
var queryURL;

var hoverFace = $(".my-face");
    
hoverFace.slideDown(3000);

function removeFace() {
   hoverFace.slideUp(3000);
   }
// hoverFace.attr("background-color", "#111");
window.setTimeout(removeFace, 4000);

$("#search-by-title-button").on('click', function () {
    $('body').find('.posters').empty();
    title = $("#t").val();
    year = $("#y").val();
    if (year && title) {
        queryURL = "https://www.omdbapi.com/?s=" + title + "&y=" + year + "&type=movie&apikey=e73085d6";
    }
    else if (!year) {
        queryURL = "https://www.omdbapi.com/?s=" + title + "&y=&type=movie&apikey=e73085d6";
    }
    else {

    }
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var array = response;
        console.log(response);
        console.log(array.Search[0].Title);

        function newCard(x) {
            // var cardTitle = array.Search[x].Title;
            // var cardYear = array.Search[x].Year;
            var cardPoster = array.Search[x].Poster;
            $(".posters").append('<div class="card m-2 bg-dark text-center text-white">' +
                '<img class="card-img" src="' + cardPoster + '" alt="test poster">' +
                '<div class="card-img-overlay d-flex flex-column justify-content-end hover-text">' +
                '<h5 class="card-title movie-name hide">' + array.Search[x].Title + '</h5>' +
                '<p class="card-text movie-year hide">' + array.Search[x].Year + '</p>' +
                '<p class="card-text col-small movie-IMDb hide"> IMDb id: ' + array.Search[x].imdbID + '</p>' +
                '<button  class="btn btn-success hide add-movie" data-title="' + array.Search[x].Title + '" data-id="' + array.Search[x].imdbID + '" data-url="' + array.Search[x].Poster + '">Add Movie</button>' +
                '</div>' +
                '</div>');
            $(".hide").hide();

        }
        for (var i = 0; i < 10; i++) {
            newCard(i);
        }
        $(".card").hover(
            function () {
                $(this).find(".card-img").css("opacity", "0.2");
                $(this).find(".hide").show();
            }, function () {
                $(this).find(".card-img").css("opacity", "1");
                $(this).find(".hide").hide();
                //   $(this).find(".movie-year").hide();
            }
        );
    });
    // $("body").on("click", ".add-movie", function () {
    //     console.log("gotcha!");
    //     var newObj = {
    //         title: $(this).data("title"),
    //         imdb_id: $(this).data("id"),
    //         poster_url: $(this).data("url")
    //     }
    //     var stringNewObj = JSON.stringify(newObj);
    //     console.log(stringNewObj);
    //     fs.appendFile(fileJSON, stringNewObj, function (err) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         else {
    //             console.log("Movie Added!")
    //         }
    //     })
    // })
});


