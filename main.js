var map = L.map('map').setView([51.505, -0.09], 13);

map.on('locationfound', function(data) {
	var accuracy = data.accuracy;
	var latlng = data.latlng;

	setMapScale(latlng,[32.0, 12.0]);
});

function setMapScale(userLatLng, pointLatLng){
	var distance = userLatLng.distanceTo(pointLatLng);
	L.marker(userLatLng).addTo(map);
	L.marker(pointLatLng).addTo(map);
	map.fitBounds([userLatLng, pointLatLng]);
	map.panTo(pointLatLng);
}

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({setView: true});
