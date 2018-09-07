var map;
var infoWin;
var bounds;

function initMap() {
    var Seattle = {
        lat: 47.639286,
        lng: -122.341792
    };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: Seattle,
        mapTypeControl: false
    });
    infoWin = new google.maps.InfoWindow();
    bounds = new google.maps.LatLngBounds();
}