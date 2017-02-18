/**
 * Created by Henry on 18.02.17.
 */
$(document).ready(function () {
    //trigger getArticles when press ENTER
    $("#search-text").keypress(function (key) {
        if (key.which === 13) {
            getArticles($("#search-text").val());
        }
    });

    //trigger getArticles when hit the submit button
    $("#submit").click(function () {
        getArticles($("#search-text").val());
    });
});

function getArticles(searchText) {
    console.log(searchText);

    if (searchText.length > 0) {
        $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchText + "&origin=*",
            function (data) {
                console.log(data);
                displayArticles(data);
            });
    }
}

function displayArticles(articles) {
    let url = "https://en.wikipedia.org/wiki/";
    for (let i = 0; i < articles.query.search.length; i++) {
        let actualTitle = articles.query.search[i].title;
        let actualUrl = url + actualTitle.replace(" ", "_");

        $("#results-section").append("<div class='row'><div class='col-xs-12 article'><a href='" + actualUrl + "'>" + actualTitle + "</a></div></div>");

    }
}