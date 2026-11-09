let routeSelectorOpen = false;
let eventSelectorOpen = false;
let erasmusSelectorOpen = false;

let currentRoute = null;
let currentPlace = null;

// Generate routes and append them to the route list
routes.forEach((route, index) => {
    $('#routeList').append(`
       <li class="flex-col items-center">
            <li class="flex items-center justify-between p-3">
                <div class="ml-2 font-sans text-xl text-neutral text-balance"><span class="RO">${route.nameRO}</span><span class="EN">${route.nameEN}</span><span class="FR">${route.nameFR}</span></div>     
                <button id="route${index}" type="button" class="btn btn-primary rounded-full">Show</button>
            </li>
            <div id = "wrapper${index}" class = "hidden">
            <ul id = "waypoints${index}" class=" flex-col mx-3 mb-3 rounded-3xl duration-300 bg-base-200">
                        
            </ul></div>
        </li>
    `);

    route.waypoints.forEach((waypoint, windex) => {
        $(`#waypoints${index}`).append(`
            <li class="z-0 flex items-center justify-between p-5">
                <div id="${index}goTo${windex}" class="flex items-center justify-center w-8 h-8 p-[0.5rem] text-xl text-primary-content duration-100 bg-error rounded-full hover:scale-125 active:scale-100">${String.fromCharCode(65 + windex)}</div>
                <div class="ml-2 font-sans text-xl text-neutral text-right text-balance">${waypoint.name}</div>     
            </li>
        `);
        $(`#${index}goTo${windex}`).click(function() {
                        map.panTo(waypoint.coords);
            google.maps.event.addListenerOnce(map, 'idle', function () {
              Zoom(waypoint.zoom);
            });
        });
    });


    // Add click event to each route button
    $(`#route${index}`).click(function() {
        routeClick(index);
    });
});



// Open route selector
$('#openRouteBttn').click(function() {
    closeAll();
    setTimeout(() => {
        openRouteTimeline.play();
    }, 300);
    routeSelectorOpen = true;
  
});

$('#openEventsBttn').click(function() {
    closeAll();
    setTimeout(() => {
        openEventsTimeline.play();
    }, 300);
    eventSelectorOpen = true;
  
});

$('#openErasmusBttn').click(function() {
    closeAll();
    setTimeout(() => {
        openErasmusTimeline.play();
    }, 300);
    erasmusSelectorOpen = true;
  
});


// Handle route button click
function routeClick(index) {
    if ($(`#route${index}`).html() === "Hide") {
        $(`#route${index}`).html("Show");
        $(`#wrapper${index}`).slideUp("linear");
        hideRoute();
    } else {
        $(`#route${index}`).html("Hide");
        $(`#wrapper${index}`).slideDown("linear");
        displayRoute(routes[index]);
    }

    

    routes.forEach((_, i) => {
        if (i !== index) {
            $(`#route${i}`).html("Show");
            $(`#wrapper${i}`).slideUp("linear");
        }
    });
}

function generateRouteURLbyCoords(route) {
    //https://www.google.com/maps/dir/?api=1&origin=Coloana+Infinitului&destination=Poarta+Sarutului&travelmode=walking
    let url = "https://www.google.com/maps/dir/?api=1";

    //get origin
    url += `&origin=${route.waypoints[0].coords.lat}+${route.waypoints[0].coords.lng}`;

    //get destination
    url += `&destination=${route.waypoints[route.waypoints.length - 1].coords.lat}+${route.waypoints[route.waypoints.length - 1].coords.lng}`;

    //get waypoints
    url+=`&waypoints=`;
    way = route.waypoints.slice(1, -1);
    way.forEach(waypoint => {
        url += `${waypoint.coords.lat}+${waypoint.coords.lng}%7C`;
    });

    //get travel mode
    url += `&travelmode=${route.isWalking ? 'walking' : 'driving'}`;

    //redirect to google maps
    window.location.href = url;
}

function generatePlaceURLbyCoords(place) {
    //https://www.google.com/maps/search/?api=1&query=centurylink+field
    let url = `https://www.google.com/maps/search/?api=1&query=${place.coords.lat}+${place.coords.lng}`;
    
    window.location.href = url;
}

function generatePlaceURLbyName(place) {
    //https://www.google.com/maps/search/?api=1&query=centurylink+field
    let url = `https://www.google.com/maps/search/?api=1&query=${place.name}`;
    
    window.location.href = url;
}

function generateRouteURLbyName(route) {
    //https://www.google.com/maps/dir/?api=1&origin=Coloana+Infinitului&destination=Poarta+Sarutului&travelmode=walking
    let url = "https://www.google.com/maps/dir/?api=1";

    //get origin
    url += `&origin=${route.waypoints[0].name}`;
    
    //get destination
    url += `&destination=${route.waypoints[route.waypoints.length - 1].name}`;

    //get waypoints
    url += `&waypoints=`;
    way = route.waypoints.slice(1, -1);
    way.forEach(waypoint => {
        url += `${waypoint.name}+${waypoint.name}%7C`;
    });

    url += `&travelmode=${route.isWalking ? 'walking' : 'driving'}`;

    //redirect to google maps
    window.location.href = url;
}

$('#openInMaps').click(function() {
    if(currentRoute != null && currentPlace === null) 
        generateRouteURLbyName(currentRoute);
    else if(currentPlace != null)
        generatePlaceURLbyName(currentPlace);
});   


// Display the selected route on the map
function displayRoute(route) {
    directionsRenderer.setMap(map);
    currentRoute = route;
    openInMapsTimeline.play();
    directionsService
    .route({
            origin: route.waypoints[0].coords,
            destination: route.waypoints[route.waypoints.length - 1].coords,
            waypoints: route.waypoints.slice(1, -1).map(waypoint => ({ location: waypoint.coords })),
            travelMode: route.isWalking ? google.maps.TravelMode.WALKING : google.maps.TravelMode.DRIVING,
            avoidTolls: false,
            provideRouteAlternatives: false,
            optimizeWaypoints: false,
        })
        .then((result) => {
            directionsRenderer.setDirections(result);
            directionsRenderer.setOptions({
                suppressMarkers: false,
                suppressInfoWindows: true,
                preserveViewport: false,
                draggable: false,
                hideRouteList: true,
                suppressPolylines: false,
                polylineOptions: { strokeColor: 'blue' },
            });
        })
        .catch((e) => {
            console.error(e)
        });
}

// Hide the route from the map; kinda shitty making a hidden route instead of closing it
function hideRoute() {
    currentRoute = null;
    openInMapsTimeline.reverse();
    directionsService
        .route({
            origin: poi.school_cntv.coords,
            destination: poi.school_cntv.coords,
            travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((result) => {
            directionsRenderer.setDirections(result);
            directionsRenderer.setOptions({
                suppressMarkers: true,
                suppressInfoWindows: true,
                preserveViewport: true,
                suppressPolylines: true,
                hideRouteList: true,
            });
        })
        .catch((e) => {
            console.error(e);
        });
}




let i = 1
Object.keys(poi).forEach((poi1, index) => {
  
    if(poi[poi1].category == categories.EVENT)
    {
    $('#eventList').append(`
       <li class="flex-col items-center">
            <li class="flex items-center justify-between p-3">
                <div class="ml-2 font-sans text-xl text-neutral text-balance"><span>${poi[poi1].name}</span></div> 
                <button id="event${i}" type="button" class="btn btn-primary rounded-full">Show</button>
            </li>
        </li>
    `);
        console.log();
    $(`#event${i}`).click(function() {
        map.panTo(poi[poi1].coords);
        
    });
    i++;
    }
});