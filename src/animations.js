// Check for reduced motion preference
$("#reduceMotion").prop('checked', window.matchMedia("(prefers-reduced-motion: reduce)").matches); 
$("#reduceMotion").change(gsap.matchMediaRefresh);

// gsap.matchMedia() to make animations responsive
let mm = gsap.matchMedia();

// Declare every timeline then pause it
let settingsTimeline = gsap.timeline();
settingsTimeline.pause();

let navbarTimeline = gsap.timeline();
navbarTimeline.pause();

let curtainTimeline = gsap.timeline();
curtainTimeline.pause();

var mapTimeline = gsap.timeline();
mapTimeline.pause();

var openRouteTimeline = gsap.timeline();
openRouteTimeline.pause();

var openEventsTimeline = gsap.timeline();
openEventsTimeline.pause();

var openErasmusTimeline = gsap.timeline();
openErasmusTimeline.pause();


var openInMapsTimeline = gsap.timeline();
openInMapsTimeline.pause();

let breakPoint = 640;

mm.add(
  {
    // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
    isDesktop: `(min-width: ${breakPoint}px)`,

    //dummy
    isMobile: `(max-width: ${breakPoint - 1}px)`,
  },
  (context) => {
    let { isDesktop } = context.conditions;
    
    let prefersReducedMotion = $("#reduceMotion").is(":checked");
    let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    settingsTimeline.clear();
    settingsTimeline.to('#settingsMenu', {
        x: isDesktop ? -$("#settingsMenu").width() : 0,
        y: isDesktop ? 0 : -$("#settingsMenu").height(),
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: "power2.in",
    }, 'start')
    .to('#map', {
        x: isDesktop ? -$("#map").width() * 0.02 : 0,
        y: isDesktop ? 0 : -$("#map").height() * 0.03,
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: "power2.in"
    }, 'start');

    // Update navbarTimeline
    navbarTimeline.clear();
    navbarTimeline.to('#navbar', {
        y: -$("#navbar").height(),
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: "power2.in"
    }, 'start');

    curtainTimeline.clear();
    curtainTimeline.to('#githubCurtain', {
        y: $("#githubCurtain").height(), 
        ease: "power2.in"
    }, 'start')
    .to('#githubCurtain', {
        background: darkMode ? 'rgb(13, 17, 23)' : 'rgb(255, 255, 255)',
        ease: "power2.in", 
        delay: 0.4
    }, 'start');

    mapTimeline.clear();
    mapTimeline.to('#map', {
      width: isDesktop ? $("#map").width() * 0.4 : $("#map").width(),
      height: isDesktop ? $("#map").height()  : $("#map").height() * 0.4,
      duration: prefersReducedMotion ? 0 : 0.4,
      ease: "power2.in",
      delay: 0.02
     }, 'start')
    .to('#descriptor', {
      x: isDesktop ? -$("#descriptor").width() : 0,
      y: isDesktop ? 0 : -$("#descriptor").height(),
      duration: prefersReducedMotion ? 0 : 0.4,
      ease: "power2.in",
      }, 'start');
      
    openRouteTimeline.clear();
    openRouteTimeline.to('#openRoute', {
      width: '20rem',
      height: '25rem',
      borderBottomRightRadius: '1rem',
      duration: prefersReducedMotion ? 0 : 0.2,
      ease: "power2.in",
    }, 'start')
    .to('#openRouteBttn', {
      opacity: 0,
      duration: prefersReducedMotion ? 0 : 0.1,
      ease: "power2.in",
    }, 'start')
    .to('#routeSelector', {
      display: 'block',
      duration: prefersReducedMotion ? 0 : 0.2,
    })


    openEventsTimeline.clear();
    openEventsTimeline.to('#openEvents', {
      width: '20rem',
      height: '25rem',
      borderBottomRightRadius: '1rem',
      borderTopRightRadius: '1rem',
      duration: prefersReducedMotion ? 0 : 0.2,
      ease: "power2.in",
    }, 'start')
    .to('#openEventsBttn', {
      display: 'none',
      duration: prefersReducedMotion ? 0 : 0.1,
      ease: "power2.in",
    }, 'start')
    .to('#eventSelector', {
      display: 'block',
      duration: prefersReducedMotion ? 0 : 0.2,
      
    })

    openErasmusTimeline.clear();
    openErasmusTimeline.to('#openErasmus', {
      width: '20rem',
      height: '10rem',
      borderTopRightRadius: '1rem',
      duration: prefersReducedMotion ? 0 : 0.2,
      ease: "power2.in",
    }, 'start')
    .to('#openErasmusBttn', {
      display: 'none',
      duration: prefersReducedMotion ? 0 : 0.1,
      ease: "power2.in",
    }, 'start')
    .to('#erasmusSelector', {
      display: 'block',
      duration: prefersReducedMotion ? 0 : 0.2,
      
    })
    
    openInMapsTimeline.clear();
    openInMapsTimeline.to('#openInMaps', {
      left: '20px',
      duration: prefersReducedMotion ? 0 : 0.2,
      ease: "power2.in",
    }, 'start')
});
 
//mapTimeline.play();

// Run gsap.matchMediaRefresh on window resize
$(window).resize(function(){
    closeAll();
    openRouteTimeline.reverse();
    openEventsTimeline.reverse();
    setTimeout(function() {
      gsap.matchMediaRefresh();
    }, 500);
  });

  // Run gsap.matchMediaRefresh on orientation change
  $(window).on("orientationchange", function() {
    closeAll();
    gsap.matchMediaRefresh();
  });



