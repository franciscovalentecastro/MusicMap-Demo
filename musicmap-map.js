var initMap = function(){
	
	var latlng = new google.maps.LatLng(44.08758502824516, 7.03125);
	var canvas= $("#map-canvas").get(0);	
	var myOptions = {
      zoom: 2,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };
	map = new google.maps.Map(canvas,myOptions);
}

google.maps.Map.prototype.createMarker = function(lat,lng,title,imgUrl){
	
	var latlng = new google.maps.LatLng(lat,lng);
	var markerOptions = {
		position: latlng,
		map: this,
		title: title,
		//icon:imgUrl,
		animation: google.maps.Animation.DROP 
	}
	var marker= new google.maps.Marker(markerOptions);	
	return marker;

}

google.maps.Map.prototype.createInfoWindow = function(lat,lng,content){
	
	var latlng = new google.maps.LatLng(lat,lng);
	var infoOptions = {
		position: latlng,
		content: content,
		pixelOffset : new google.maps.Size(0,-35),
	}
	var info= new google.maps.InfoWindow(infoOptions);	
	return info;
}

google.maps.Map.prototype.reset= function(){
	var options = {
      zoom: 2,
      center: new google.maps.LatLng(44.08758502824516, 7.03125),
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   
	this.setOptions(options);
}

