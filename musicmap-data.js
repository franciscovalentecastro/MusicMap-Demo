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
				var result= response.result[0]; 			
   			var origin = result.origin[0];
				var url;  
				 			
   			if(result["/common/topic/image"][0].id != ""){ // Check Image
					
					url="https://usercontent.googleapis.com/freebase/v1/image";
					url+= result["/common/topic/image"][0].id;
				}
				$("#app-bar-status").get(0).innerHTML= origin.name; //Test
				
				map.reset();				
				
				map.createMarker(origin.geolocation.latitude, 
				origin.geolocation.longitude,
				result.name,url);	 // Create Marker
				
				var content = "<h2>"+result.name+"</h2> ";
				content+="<p>"+origin.name+"</p>";
				content+="<img src='"+url+"'>";				
				
				var info = map.createInfoWindow(origin.geolocation.latitude, 
				origin.geolocation.longitude,content);  // Create Info Window
				
				info.open(map);
				
		}	
		
	});                    
	
}

