var map; // Global Map

$(document).ready( function(){
	initMap(); 
	
	$("#app-bar-submit").bind('click', function(){ //Bind Button
		artistOrigin( $("#app-bar-input").get(0).value );

	});
});

