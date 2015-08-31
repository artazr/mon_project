var mapsLoader =function(){
  var handler = Gmaps.build('Google');

  handler.buildMap({ internal: {id: 'map'} }, function(){

  if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(displayOnMap);

    var coords = [];

      $.each($("tbody > tr"), function(i, elem){
        var newAirport = {};
        console.log(i, $(elem).find("td.lat").text(), $(elem).find("td.lng").text());
        newAirport.lat = parseFloat($(elem).find("td.lat").text());
        newAirport.lng = parseFloat($(elem).find("td.lng").text());
        coords[coords.length] = newAirport;
      });
      console.log(coords);
/*coords = [
    { lat: 43, lng: 3.5},
    { lat: 45, lng: 4},
    { lat: 47, lng: 3.5},
    { lat: 49, lng: 4},
    { lat: 51, lng: 3.5}
  ]*/
  console.log(coords);
  var markers = handler.addMarkers(
    coords);

  handler.bounds.extendWith(markers);
  handler.fitMapToBounds();
});

  function displayOnMap(position){
    var marker = handler.addMarker({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
    handler.map.centerOn(marker);
  };
};
