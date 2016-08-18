$(function() {
        var params = {
            // Request parameters
            "q": "cats",
            "count": "10",
            "offset": "0",
            "mkt": "en-us",
            "safeSearch": "Moderate",
        };

        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","c92a135e4f8e4d71a99076a9877f2258");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            console.log(data);
        	$('#searchResults').html("<img src=" + data.value[0].contentUrl + ">");
        })
        .fail(function() {
            console.log('error');
        });
    });


//c92a135e4f8e4d71a99076a9877f2258
