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
	this.reset(); // Whole Map
	
	var latlng = new google.maps.LatLng(lat,lng);
	if(imgUrl!=""){	
		var markerOptions = {
			position: latlng,
			map: this,
			title: title,
			icon:imgUrl,
			animation: google.maps.Animation.DROP 
		}
	}else{
		var markerOptions = {
			position: latlng,
			map: this,
			title: title,
			animation: google.maps.Animation.DROP 
		}
	}
	var marker= new google.maps.Marker(markerOptions);	
	return marker;

}

google.maps.Map.prototype.reset= function(){
	var options = {
      zoom: 2,
      center: new google.maps.LatLng(44.08758502824516, 7.03125),
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   
	this.setOptions(options);
}

