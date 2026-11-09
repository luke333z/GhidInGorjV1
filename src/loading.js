//debug
const debugMode = false  ;


//loading screen workaround
$(document).ready(function() {
    setTimeout(() => {
        $('#loading').fadeOut(200);
    }, 700);
   
    if(debugMode)
        $('#title').html(`Debug Mode`);

    const userLang = navigator.language || navigator.userLanguage;
    const defaultLang = (userLang === 'ro' || userLang === 'en' || userLang === 'fr') ? userLang : 'en';


    
    $('head').append('<script src="src/animations.js"></script>');    
    $('head').append('<script src="src/utils.js"></script>');
    $('head').append('<script src="src/poi.js"></script>'); 
    $('head').append('<script src="src/map.js"></script>');
    $('head').append('<script src="src/settings.js"></script>');
    $('head').append('<script src="src/descriptor.js"></script>'); 
    $('head').append('<script src="src/route.js"></script>');
    
    if(defaultLang === 'ro')
        $('.EN').each(function() {
            $(this).css('display', 'none');
        }),
        $('.FR').each(function() {
            $(this).css('display', 'none');
        }),
        $('html').attr('lang', 'ro'),
        $('#language').val('ro');
    else if(defaultLang === 'en')
        $('.RO').each(function() {
            $(this).css('display', 'none');
        }),
        $('.FR').each(function() {
            $(this).css('display', 'none');
        }),
        $('html').attr('lang', 'en'),
        $('#language').val('en');
    else if(defaultLang === 'fr')
        $('.RO').each(function() {
            $(this).css('display', 'none');
        }),
        $('.EN').each(function() {
            $(this).css('display', 'none');
        }),
        $('html').attr('lang', 'fr'),
        $('#language').val('fr');
});