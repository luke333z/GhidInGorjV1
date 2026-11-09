$("#descripitorBack").click(function() {
      $("#map").click();
  });

$(document).keydown(function(event) {
    if (event.key === "Escape") {
        $("#map").click();
    }
});

let mapDetailsExtended = false;

function descriptorOpen(){
    mapTimeline.play();
    $("#navbarLogo").fadeOut();
    $("#navbarTitle").fadeOut();

    mapDetailsExtended = true;
}

function descriptorClose(){
    mapTimeline.reverse();
    
    $("#navbarLogo").fadeIn();
    $("#navbarTitle").fadeIn();

    setTimeout(() => {
        document.getElementById("content").scrollTop = 0;
    }, 500);   

    mapDetailsExtended = false;
}


