function artistOrigin(artist){
	var envelope ={"query":[{
		"name":artist,
		"type":"/music/artist",
		"origin":[{ "geolocation" : { "latitude":null ,"longitude":null },
              		"name":null
						}]
		}]
	};
	
	$.getJSON("http://api.freebase.com/api/service/mqlread?callback=?",
	{query: JSON.stringify(envelope) },   // URL parameters
   function(response){		// Request Function		
   			var origen = response.result[0].origin[0];
				$("#app-bar-status").get(0).innerHTML=response.result[0].origin[0].name;
				
				createMarker(origen.geolocation.latitude, 
				origen.geolocation.longitude,
				response.result[0].name);	
	});                    
	
}

