var Map = (function($) {

	var googleMapStyle;
	var googleMapType;
	var googleMapOptions;
	var googleMapIcon;
	var map;

	var init = function() {
		/*
    var locations = [
	//["1303 Walnut Hill Lane, Suite#229, Irving, TX 75038","32.8855305","-96.9688193"],
	["17304 Preston Rd, Dallas, TX 75252","32.9862662","-96.8016328"],
	//["17304 Preston Rd, Suite 800 Dallas, TX 75001","32.986266","-96.801633"],
	["Plot No 27, Sagacity Heights,Kavuri Hills, Madhapur,Hyderabad, Telangana-500081","17.440463","78.396528"]
	];
	   var iconURLPrefix = 'img/';
    var stylez = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: -100 } // <-- THIS
      ]
    }
];
    var icons = [
      iconURLPrefix + 'marker.png',
      // iconURLPrefix + 'green-dot.png',
      // iconURLPrefix + 'blue-dot.png',
      // iconURLPrefix + 'orange-dot.png',
      // iconURLPrefix + 'purple-dot.png',
      // iconURLPrefix + 'pink-dot.png',   
iconURLPrefix + 'marker3.png',	  
      iconURLPrefix + 'marker2.png'
    ]
    var iconsLength = icons.length;

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(32.885531, -96.968819),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
	  scrollwheel:false,
      streetViewControl: false,
      panControl: false,
      zoomControlOptions: {
         position: google.maps.ControlPosition.LEFT_BOTTOM
      }
    });
	map.set('styles',stylez);
    var infowindow = new google.maps.InfoWindow({
      maxWidth: 160
    });
	

 
  var markers = new Array();
    var infos = new Array();
    
    var iconCounter = 0;
    
    // Add the markers and infowindows to the map
    for (var i = 0; i < locations.length; i++) {  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: icons[iconCounter]
      });

      markers.push(marker);
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
		          }
      })(marker, i));
  
      iconCounter++;
      // We only have a limited number of possible icon colors, so we may have to restart the counter
      if(iconCounter >= iconsLength) {
      	iconCounter = 0;
      }
    }

    function autoCenter() {
      //  Create a new viewpoint bound
      var bounds = new google.maps.LatLngBounds();
      //  Go through each...
      for (var i = 0; i < markers.length; i++) {  
				bounds.extend(markers[i].position);
      }
      //  Fit these bounds to the map
      map.fitBounds(bounds);
    }
    autoCenter();
	*/
	
	};


	
	return {
		init: init
	};

}(jQuery));