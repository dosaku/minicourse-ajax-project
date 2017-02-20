
function loadStreetView(address) {

    var baseURL = 'http://maps.googleapis.com/maps/api/streetview?';
    var size = 'size=600x400';
    var location = 'location=' + address
    var streetViewURL = baseURL + size + '&' + location;
    $('.bgimg').attr('src', streetViewURL);
}

function loadNYTArticles(city) {

    var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    var apiKey = 'd6102fe0fcc8476dadd38d660ab1d619';
    var data = {'api-key': apiKey,
                'q': city,
                'fl': 'headline,snippet,web_url'};
    var articleList = $('.article-list');

    $.getJSON(url, data, function(data) {
        $.each(data.response.docs, function(index, article) {
           articleList.append(buildArticle(article));
        });
    });
}

function buildArticle(article) {

    var headline = article.headline.main;
    var snippet = article.snippet;
    var $li = $('<li>', {class: 'article'});
    var $a = $('<a>', {href: article.web_url, html: headline});
    var $p = $('<p>', {html: snippet});

    return $li.append($a).append($p);
}

function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ', ' + city;

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // update information based on input
    $greeting.text('So, you want to live at ' + address + '?');
    $nytHeaderElem.text('New York Times Articles for ' + city);
    loadStreetView(address);
    loadNYTArticles(city);

    return false;
};

$('#form-container').submit(loadData);
