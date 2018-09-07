var map;
var infoWin;
var bounds;

function initMap() {
    var Seattle = {
        lat: 47.608013,
        lng: -122.335167
    };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: Seattle,
        mapTypeControl: false
    });
    infoWin = new google.maps.InfoWindow();
    bounds = new google.maps.LatLngBounds();
}