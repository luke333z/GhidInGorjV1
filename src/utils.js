//prevents tab navigation
$(document).keydown(function(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
    }
});


//xs display
let xsDisplay = $(window).width() >= 640 ? false : true;

function closeAll()
{
    if(settingsOpen)
        settingsTimeline.reverse(), settingsOpen = false;
    if( mapDetailsExtended)
        descriptorClose(),
        openInMapsTimeline.reverse();

    if(routeSelectorOpen)
    {
        setTimeout(() => {
            openRouteTimeline.reverse();
        }, 200);
        routeSelectorOpen = false;
    }
    if(eventSelectorOpen)
        {
            setTimeout(() => {
                openEventsTimeline.reverse();
            }, 200);
            eventSelectorOpen = false;
            console.log("closed");
        }
        if(erasmusSelectorOpen)
            {
                setTimeout(() => {
                    openErasmusTimeline.reverse();
                }, 200);
                erasmusSelectorOpen = false;
                console.log("closed");
            }
    if(guideOpened)
        $("#openGuideBttn").click();

    document.getElementById("mapSettings").scrollTop = 0;
    carousel.goTo(0);
}

$("#map").click(function() {
    if(!debugMode)
        closeAll();
    
});

$("#github").click(function() { 
    curtainTimeline.play();
    setTimeout(() => {
        window.location.href = "https://github.com/luke333z/GhidInGorj";
    }, 2000);
});

//helper for fulscreen
var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

var fullscreenMode = false;
var navbarShown = true;  

//maximize clicked
$("#maximize").click(function() { 
    if(!fullscreenMode) 
    {
        closeAll();
        openFullscreen();
        if(!settingsOpen)
            setTimeout(() => {
                navbarTimeline.play();
                navbarShown = false;
            }, 200);
        fullscreenMode = true;
        $("#maximize").attr('src', "./assets/icons/minimize.png");
    }
    else
    {
        closeAll();
        closeFullscreen();
        fullscreenMode = false;
        $("#maximize").attr('src', "./assets/icons/maximize.png");
    }
});
$(document).mousemove(function(e) {
    if(fullscreenMode)
    {
        var currentMousePos = { x: e.pageX, y: e.pageY };
    
        if(currentMousePos.y<=25 && !navbarShown)
            navbarTimeline.reverse(), navbarShown = true;
        if(currentMousePos.y>=150 && navbarShown && !settingsOpen)
            navbarTimeline.play(), navbarShown = false;
    }
});

let guideOpened = false;
$("#openGuideBttn").click(function() {
    if(!guideOpened)
        timeout = mapDetailsExtended ? 500 : 0,
        $("#map").click(),
        setTimeout(() => {
            descriptorOpen();
            $("#content").load(`/assets/info/${currentLanguage}/guides.html`);
        }, timeout);
    else
        descriptorClose();
        
  
        
    guideOpened = !guideOpened;
});

let currentLanguage = $("#language").val();

$("#language").change(function() {
    var selectedLanguage = $(this).val();
    if(selectedLanguage === 'ro')
    {
        $('.EN').each(function() {
            $(this).css('display', 'none');
        }),
        $('.FR').each(function() {
            $(this).css('display', 'none');
        }),
        $('html').attr('lang', 'ro'),
        $('.RO').each(function() {
            $(this).css('display', 'block');
        });
    }
    else if(selectedLanguage === 'en')
    {
        $('.RO').each(function() {
            $(this).css('display', 'none');
        }),
        $('.FR').each(function() {
            $(this).css('display', 'none');
        }),
        $('html').attr('lang', 'en'),
        $('.EN').each(function() {
            $(this).css('display', 'block');
        });
    }
    else if(selectedLanguage === 'fr')
    {
        $('.RO').each(function() {
            $(this).css('display', 'none');
        }),
        $('.EN').each(function() {
            $(this).css('display', 'none');
        }),
        $('html').attr('lang', 'fr'),
        $('.FR').each(function() {
            $(this).css('display', 'block');
        });
    }
    currentLanguage = selectedLanguage;
});

function setupCollapsible(titleId, contentId, collapseId) {
    let iconCollapse = "assets/icons/collapse.png";
    let iconExpand = "assets/icons/expand.png";
    let iconCollapseDark = "assets/icons/collapse_dark.png";
    let iconExpandDark = "assets/icons/expand_dark.png";

    $(collapseId).attr("src", isDarkMode ? iconExpandDark : iconExpand);

    if (window.innerWidth < 640) {
        $(collapseId).attr("src", isDarkMode ? iconCollapseDark : iconCollapse);
        $(contentId).hide();
    }

    

    $(titleId).click(function() {
        if ($(contentId).css("display") === "block") {
            $(contentId).slideUp();
            $(collapseId).attr("src", isDarkMode ? iconCollapseDark : iconCollapse);
        } else {
            $(contentId).slideDown();
            $(collapseId).attr("src", isDarkMode ? iconExpandDark : iconExpand);
        }
    });
}

$("#closeRouteBttn").click(function() {
    $("#map").click();
});

$("#closeEventsBttn").click(function() {
    $("#map").click();
});

$("#closeErasmusBttn").click(function() {
    $("#map").click();
});

$("#erasmus1").click(function() {
    erasmusClick(1);
});

$("#erasmus2").click(function() {
    erasmusClick(2);
});

$("#erasmus3").click(function() {
    erasmusClick(3);
});


function erasmusClick(index) {
    if ($(`#erasmus${index}`).html() === "Hide") {
        $(`#erasmus${index}`).html("Show");
    } else {
        $(`#erasmus${index}`).html("Hide");
        //map.panTo(poi[index + 58].coords);
        Object.keys(poi).forEach(i => {
            if(poi[i].id == 58 + index)
              map.panTo(poi[i].coords);
          });
    }

    

    for (let i = 1; i <= 3; i++) {
        if (i !== index) {
            $(`#erasmus${i}`).html("Show");
        }
    }
}

