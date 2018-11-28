//Hide and Show

$("#homepage").show();
$("#catering").hide();
$("#menu").hide();
$("#about").hide();

$(".home").click(function(){
  $("#homepage").show();
  $("#catering").hide();
  $("#menu").hide();
  $("#about").hide();
});

$(".cater").click(function(){
  $("#homepage").hide();
  $("#catering").show();
  $("#menu").hide();
  $("#about").hide();
  console.log ("I'm here.");
});

$(".menu").click(function(){
  $("#homepage").hide();
  $("#catering").hide();
  $("#menu").show();
  $("#about").hide();
});
$(".about").click(function(){
  $("#homepage").hide();
  $("#catering").hide();
  $("#menu").hide();
  $("#about").show();
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

