$(function() {
    var params = {
        // Request parameters
        "q": "dog",
        "count": "10",
        "offset": "0",
        "mkt": "en-us",
        "safeSearch": "Moderate",
        "size": "Wallpaper",
        //"color": "Green",
        "height": 1080,
        "width": 1920,
    };

    function searchBing() {
        $.ajax({
                url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
                beforeSend: function(xhrObj) {
                    // Request headers
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "c92a135e4f8e4d71a99076a9877f2258");
                },
                type: "GET",
                // Request body
                data: "{body}",
            })
            .done(function(data) {
                console.log(data);
                $('#searchResults').text("");
                for (var i = 0; i < 10; i++) {
                    $('#searchResults').append([
                        $('<div>')
                        .addClass('thumbNail')
                        .html("<a target = '_blank' href=" + data.value[i].contentUrl + "><img src=" + data.value[i].thumbnailUrl + "></a>")
                    ]);
                };

            })
            .fail(function() {
                console.log('error');
            });
    }

    $("#button").on('click', function(event) {
        event.preventDefault();
        var searchTerm = $('#mySearch').val();
        var color = $('#color').val();
        if(color !== "Nothing"){
            if(color === "Random"){
               var colorArray = ['ColorOnly', 'Monochrome', 'Black', 'Blue', 'Brown', 'Gray', 'Green', 'Orange', 'Pink', 'Purple', 'Red', 'Teal', 'White', 'Yellow'];
               color = colorArray[Math.floor(Math.random() * colorArray.length)];
            }
          params.color = color;
        }
        params.q = searchTerm;
        searchBing();
    });
});


//<a href='http...'><img src="http://wwww.imageurl"></a>
//practice writing out structure, allows user to click on thumbnail and will lead to link
//c92a135e4f8e4d71a99076a9877f2258
