function artistOrigin(artist){
	var envelope ={"query":[{
		"name":artist,
		"type":"/music/artist",
		"origin":[{ "geolocation" : { "latitude":null ,"longitude":null },
              		"name":null
						}],
		"/common/topic/image" : [{ "id":null, "optional":true, "limit":1 }]
		
		}]
	};
	
	$.getJSON("http://api.freebase.com/api/service/mqlread?callback=?",
	{query: JSON.stringify(envelope) },   // URL parameters
   function(response){		// Request Function		
   	
   	if(response.code == "/api/status/ok" && response.result.length > 0){
   			var origen = response.result[0].origin[0];
				var url="https://usercontent.googleapis.com/freebase/v1/image";
				url+= 				response.result[0]["/common/topic/image"][0].id;
				$("#app-bar-status").get(0).innerHTML=response.result[0].origin[0].name; //Test
				
				map.createMarker(origen.geolocation.latitude, 
				origen.geolocation.longitude,
				response.result[0].name,url);	
		}	
		
	});                    
	
}

