
NYTkey = 'd6102fe0fcc8476dadd38d660ab1d619';

function loadStreetView(address) {

    var baseURL = 'http://maps.googleapis.com/maps/api/streetview?';
    var size = 'size=600x400';
    var location = 'location=' + address
    var streetViewURL = baseURL + size + '&' + location;
    $('.bgimg').attr('src', streetViewURL);
}

function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    var address = $('#street').val() + ', ' + $('#city').val();
    console.log(address);

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    $greeting.text('So, you want to live at ' + address + '?');
    loadStreetView(address);


    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
