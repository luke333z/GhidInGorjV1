

// Google api shit
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyCO4nWv9wEmYzvUN9eto3MWR4V5D2nhiY4",
    v: "weekly",
  });

function Sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function Zoom(targetZoom) {
  const startZoom = map.getZoom();
  const steps = Math.abs(targetZoom - startZoom);
  let zoom = startZoom;

  for (let i = 1; i <= steps; i++) {
    zoom = startZoom * (1 - (i / steps)) + targetZoom * (i / steps);
    map.setZoom(zoom);
    await Sleep(200);
  }
}


// Routes
var directionsService;
var directionsRenderer; 

// Initialize and add the map
let map;
let lastMarkerClicked = 1;

async function initMap() {
  
  // center and starting zoom
  let startZoom = 19; // mobile
  let mapCenter = { "lat": 45.037165527344676, "lng": 23.27411997379829 };
  if ($(window).width() >= 1280) // xl >= 1280
  startZoom = 19, mapCenter = { "lat": 45.0374106779083, "lng": 23.274132826064502 };
  else if ($(window).width() >= 1024) // lg >= 1024
  startZoom = 19, mapCenter = { "lat": 45.03727810691541, "lng": 23.274341256042018 };
  else if ($(window).width() >= 768) // md >= 768
  startZoom = 19, mapCenter = { "lat": 45.03730904317577, "lng": 23.274269733452606 };
  else if ($(window).width() >= 640) // sm  >= 640
  startZoom = 19, mapCenter = { "lat": 45.0374700472814, "lng": 23.27420016284977 };
  
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  directionsService = new google.maps.DirectionsService(); //routes
  directionsRenderer = new google.maps.DirectionsRenderer({
    draggable: true,
    map,
    panel: document.getElementById("directionsPanel"),
  });
  
  
  map = new Map(document.getElementById("map"), {
    zoom: debugMode ? poiCenter.zoom : startZoom,
    minZoom: 10,
   
    center: debugMode ? poiCenter.coords : mapCenter,
    gestureHandling: 'greedy',
    restriction: {
      latLngBounds: {
        north: 47.00,
        south: 43.00,
        east: 25.80,
        west: 20.50,
      },
    },
    mapId: "mapId",
    disableDefaultUI: true,
    mapTypeId: 'satellite'
  });



  // marker loading
  var marker, i;

  //listener for settings buttons
  function addCategoryListener(category, marker) {
    $(category.id).change(function () {
      if ($(category.id).is(":checked"))
        marker.map = map,
        markerCluster.addMarker(marker);
      else
        marker.map = null,
        markerCluster.removeMarker(marker);
    });
  }

  // creating markers
  const markers = Object.keys(poi).map(i => { 
    const marker = new AdvancedMarkerElement({
      position: poi[i].markerPos,
      map: map,
      title: poi[i].name,
      content: new google.maps.marker.PinElement({
        background: "#ffffff",
        borderColor:  "#0549b5",
        glyphColor: "#0549b5",
        glyph: debugMode ? `${poi[i].id}` : poi[i].category.glyph,
        scale: 1.5
      }).element,
    });

    addCategoryListener(poi[i].category, marker);

    // listener for click open
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      let clicked = false;
      return function () {
        if (!clicked) {
          closeAll();
          
          currentPlace = poi[i];
          openInMapsTimeline.play();
          map.panTo(poi[i].coords);
          google.maps.event.addListenerOnce(map, 'idle', function () {
            Zoom(poi[i].zoom);
          });

          if (!debugMode)
            map.setOptions({
              zoomControl: false,
              gestureHandling: 'none'
            });

          google.maps.event.addListenerOnce(map, 'idle', function () {
            setTimeout(() => {
              lastMarkerClicked = poi[i].id;
              $("#content").load(`/assets/info/${currentLanguage}/${poi[i].id}.html`);
              setTimeout(() => {
                
                window.HSStaticMethods.autoInit(["carousel"]);
              }, 2000);
              descriptorOpen();
              // change clicked on map click
              $("#map").one('click', function (e) {
                if (clicked && !debugMode) {
                  map.setOptions({
                    gestureHandling: 'greedy',
                    disableDefaultUI: true
                  });
                  openInMapsTimeline.reverse();
                  currentPlace = null;
                  descriptorClose();
                  closeAll();
                  clicked = false;
                }
              });
              // change clicked on window resize
              $(window).one('resize', function (e) {
                if (clicked) {
                  openInMapsTimeline.reverse();
                  map.setOptions({
                    gestureHandling: 'greedy',
                    disableDefaultUI: true
                  });
                  descriptorClose();
                  closeAll();
                  clicked = false;
                }
              });
            }, 300);
          });
          clicked = true;
        } else {
          map.setOptions({
            gestureHandling: 'greedy',
            disableDefaultUI: true
          });
          clicked = false;
          descriptorClose();
          openInMapsTimeline.reverse();
        }
      }
    })(marker, i));

    return marker;
  });

  let renderer = {
    render({ count, position }, stats) {
      
      return new AdvancedMarkerElement({
      position: position,
      map: map,
      title: `${count}+`,
      content: new google.maps.marker.PinElement({
        background: "#ffffff",
        borderColor: "#0549b5",
        glyphColor: "#0549b5",
        glyph: `${count}+`,
        scale: 1.5
      }).element,
    });

    }
  }

  let markerCluster = new markerClusterer.MarkerClusterer({ markers, map, renderer, ignoreHidden: true });
  
  // debug mode
  if (debugMode) {
    let debugPosition;
    map.addListener("mousemove", (e) => {
      debugPosition = JSON.stringify(e.latLng);
    });
    let id = 54;
    document.onkeydown = function (e) {
      e = e || window;
      var key = e.key;
      if (key == 'e')
        console.log(map.getZoom(), JSON.stringify(map.getCenter()));
      if (key == 'w')
        Object.keys(poi).forEach(i => {
          if(poi[i].id == id)
            map.panTo(poi[i].coords);
        });
      if (key == 'q')
        id++;
      if (key == 'a')
        currentLanguage = "ro";
      if (key == 's')
        currentLanguage = "en";
      if (key == 'd')
        currentLanguage = "fr";
    }
    for (i = 0; i < debugPoi.length; i++) {
      marker = new AdvancedMarkerElement({
        position: debugPoi[i][2],
        map: map,
        content: new google.maps.marker.PinElement({
          background: "#ffffff",
          borderColor: "#0069b4",
          glyphColor: "#0069b4",
          glyph: debugPoi[i][4].glyph,
          scale: 1.5
        }).element,
      });
      addCategoryListener(debugPoi[i][4], marker);
    }
  } 
}

initMap();
