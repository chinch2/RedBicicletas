var mymap = L.map("mapid").setView([10.48801, -66.87919], 13);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1Ijoid2l6a2hhIiwiYSI6ImNrMHh6anNlZTBiYmszYnAxNXczaG9obWgifQ.ARk_D2HoGvIsShUrrvBGCg"
  }
).addTo(mymap);

$.ajax({
  dataType: "json",
  url: "api/bicicletas",
  success: function(result) {
    console.log(result);
    result.bicicletas.forEach(function(bici) {
      L.marker(bici.ubicacion, { title: bici.id }).addTo(mymap);
    });
  }
});
