var initMap = function(){
	
	var latlng = new google.maps.LatLng(25.48302865583837, -100.95878183841705);
	var canvas= $("#map-canvas").get(0);	
	var myOptions = {
      zoom: 5,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };
	map = new google.maps.Map(canvas,myOptions);
}

var createMarker = function(lat,lng,title){
	
	var latlng = new google.maps.LatLng(lat,lng);
	var markerOptions = {
		position: latlng,
		map: map,
		title: title
	}		
	var marker= new google.maps.Marker(markerOptions);	
	map.setCenter(latlng);
	
}
