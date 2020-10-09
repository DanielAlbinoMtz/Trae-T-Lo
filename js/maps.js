function iniciarMap(){

    var coord = { lat:19.5421979 , lng:-96.9549489 };
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 14,
        center: coord
    });




var marker = new google.maps.Marker({
    position: {lat:19.5424344, lng: -96.9466848},
    map: map
})

};