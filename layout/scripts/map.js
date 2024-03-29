function init() {
    var mapOptions = { // Set up the map options
        center: new google.maps.LatLng(35.275216, -97.457267),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 15

    };
    var venueMap; // Map() draws a map
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
    var script = document.createElement('script'); // Create <script> element
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
    document.body.appendChild(script); // Add element to page
}

window.onload = loadScript; // on load call loadScript()
