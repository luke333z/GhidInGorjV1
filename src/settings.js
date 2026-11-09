
var settingsOpen = false;

$("#settings").click(function() {
    if(settingsOpen == false) //if closed close all and open
    {
        if(fullscreenMode)
            navbarTimeline.reverse(), navbarShown = true;
        closeAll();
        settingsOpen = true;
        settingsTimeline.play();
        
    }
   else closeAll();
});

$("#settingsBack").click(function() {
  closeAll();
});


var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

$("#darkMode").prop('checked', isDarkMode); 
if(isDarkMode)
  $('html').attr('data-theme', 'dark');
else 
  $('html').attr('data-theme', 'light');

$("#darkMode").change(function() {
  if(isDarkMode)
    $('html').attr('data-theme', 'light');
  else 
    $('html').attr('data-theme', 'dark');
  isDarkMode = !isDarkMode;
});


window.HSStaticMethods.autoInit();

const carousel = new HSCarousel(document.querySelector('#settingsCarousel'));

$("#license").click(() => {
  carousel.goTo(1);
  $("#licenseText").css("display", "flex");
});
$("#help").click(() => {
  carousel.goTo(2);
  $("#licenseText").css("display", "none");
});
$("#contact").click(() => {
  carousel.goTo(3);
  $("#licenseText").css("display", "none");
});
