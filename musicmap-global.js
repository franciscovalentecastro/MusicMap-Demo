var map; // Global Map

$(document).ready( function(){
	initMap(); 
	bindButtons();
});

$(function() {
	$("#app-bar-input").suggest({type:'/music/artist'});
});

var bindButtons = function(){
	$("#app-bar-submit").bind('click', function(){ //Bind Button
		artistOrigin( $("#app-bar-input").get(0).value );
	});
	$("#app-bar-reset").bind('click', function(){ //Bind Button
		map.reset();
	});
}