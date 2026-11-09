//categories
class Category
{
  constructor(glyph, id)
  {
    this.glyph = glyph;
    this.id = id;
  }
}

//categories
const categories = {
  MONUMENT: new Category( new URL("https://img.icons8.com/ios-glyphs/30/monument.png"), "#showCulture" ),
  MUSEUM: new Category( new URL("https://img.icons8.com/ios-glyphs/30/museum.png"), "#showCulture" ),
  MANSION: new Category( new URL("https://img.icons8.com/ios-glyphs/30/sofa-with-buttons.png"), "#showCulture" ),
  SCHOOL: new Category( new URL("https://img.icons8.com/ios-glyphs/30/graduation-cap--v1.png"), "#showCulture" ),
  CHURCH: new Category( new URL("https://img.icons8.com/ios-glyphs/30/church.png"), "#showCulture" ),
  CINEMA: new Category( new URL("https://img.icons8.com/ios-glyphs/30/movie-projector.png"), "#showCulture" ),
  LIBRARY: new Category( new URL("https://img.icons8.com/ios-glyphs/30/courses.png"), "#showCulture" ),
  MOUNTAIN: new Category( new URL("https://img.icons8.com/ios-glyphs/30/mountain.png"), "#showLandscape" ),
  FOREST: new Category( new URL("https://img.icons8.com/ios-glyphs/30/forest.png"), "#showLandscape" ),
  RIVER: new Category( new URL("https://img.icons8.com/ios-glyphs/30/creek--v2.png"), "#showLandscape" ),
  LAKE: new Category( new URL("https://img.icons8.com/ios-glyphs/30/lake.png"), "#showLandscape" ),
  CAVE: new Category( new URL("https://img.icons8.com/ios-glyphs/30/cave.png"), "#showLandscape" ),
  NATURAL_MONUMENT: new Category( new URL("https://img.icons8.com/ios-glyphs/30/national-park.png"), "#showLandscape" ),
  WATERFALL: new Category( new URL("https://img.icons8.com/ios-glyphs/30/waterfall.png"), "#showLandscape" ),
  ERASMUS: new Category( new URL("https://img.icons8.com/ios-filled/30/flag-of-europe.png"), "#showLandscape" ),
  AERODROME: new Category( new URL("https://img.icons8.com/ios-glyphs/30/prop-plane--v1.png"), "#showIndustry" ),
  FACTORY: new Category( new URL("https://img.icons8.com/ios-glyphs/30/manufacturing.png"), "#showIndustry" ),
  POWERPLANT: new Category( new URL("https://img.icons8.com/ios-glyphs/30/power-plant.png"), "#showIndustry" ),
  HYDROELECTRIC_POWERPLANT: new Category( new URL("https://img.icons8.com/ios-glyphs/30/hydroelectric.png"), "#showIndustry" ),
  PHOTOVOLTAIC_FIELD: new Category( new URL("https://img.icons8.com/ios-glyphs/30/solar-panel.png"), "#showIndustry" ),
  QUARRY: new Category( new URL("https://img.icons8.com/ios-glyphs/30/bucket-wheel-excavator.png"), "#showIndustry" ),
  LEGEND: new Category( new URL("https://img.icons8.com/ios-glyphs/30/question-mark.png"), "#showLegend" ),
  EVENT: new Category( new URL("https://img.icons8.com/ios-glyphs/30/calendar.png"), "#showEvent" ),
  PARKING: new Category( new URL("https://img.icons8.com/ios-glyphs/30/parking.png"), "#showParking" ),
} 

class POI
{
  constructor(id, name, markerPos, coords, zoom, category)
  {
    this.id = id;
    this.name = name;
    this.markerPos = markerPos;
    this.coords = coords;
    this.zoom = zoom;
    this.category = category;
  }
}

//
const poi = { 
  
  school_cntv: new POI(1,  'Colegiul Național "Tudor Vladimirescu"', { "lat": 45.037500, "lng": 23.273950 }, { "lat": 45.037500, "lng": 23.273950 }, 20, categories.SCHOOL),
  monument_poarta: new POI(2,  'Poarta Sărutului', { "lat": 45.039536, "lng": 23.268662 }, { "lat": 45.039436, "lng": 23.268662 }, 20, categories.MONUMENT),
  monument_infinit: new POI(3,  'Coloana Infinitului', { "lat": 45.03776200333529, "lng": 23.285400900829065 }, { "lat": 45.037502, "lng": 23.285283 }, 20, categories.MONUMENT),
  monument_tacerii: new POI(4,  'Masa Tăcerii', { "lat": 45.039685, "lng": 23.266661 }, { "lat": 45.039645, "lng": 23.266631 }, 20, categories.MONUMENT),
  powerplant_rovinari: new POI(5,  'Termocentrala Rovinari', { "lat": 44.912486, "lng": 23.136237 }, { "lat": 44.909997586933855, "lng": 23.135885624648818 }, 17, categories.POWERPLANT),
  powerplant_turceni: new POI(6,  'Termocentrala Turceni', { "lat": 44.67657, "lng": 23.4064144 }, { "lat": 44.67124650231328, "lng": 23.407388439557465 }, 16, categories.POWERPLANT),
  quarry_rosia: new POI(7,  'Cariera Roșia', { "lat": 44.887874, "lng": 23.182998 }, { "lat": 44.884766507217506, "lng": 23.185210974254076 }, 15, categories.QUARRY),
  quarry_tismana: new POI(8,  'Cariera Tismana', { "lat": 44.92591449271381, "lng": 23.0962725584379 }, { "lat": 44.929448269825244, "lng": 23.093346496003456 }, 14, categories.QUARRY),
  quarry_rovinari: new POI(9,  'Cariera Rovinari', { "lat": 44.92516949077079, "lng": 23.1988276844167 }, { "lat": 44.9290426130038, "lng": 23.19057415009883 }, 15, categories.QUARRY),
  quarry_pinoasa: new POI(10, 'Cariera Pinoasa', { "lat": 44.889291043230074, "lng": 23.12072755983301 }, { "lat": 44.890171571242526, "lng": 23.120240406479027 }, 15, categories.QUARRY),
  quarry_jiltNord: new POI(11, 'Cariera Jilț-Nord', { "lat": 44.8611745430625, "lng": 23.048089999622295 }, { "lat": 44.8679782364075, "lng": 23.04596967015083 }, 15, categories.QUARRY),
  quarry_rosiuta: new POI(12, 'Cariera Roșiuța', { "lat": 44.85736889755618, "lng": 22.996347824758736 }, { "lat": 44.85453996723191, "lng": 22.999233398361667 }, 15, categories.QUARRY),
  quarry_matasari: new POI(13, 'Cariera Mătăsari', { "lat": 44.839296542583774, "lng": 23.046686114237996 }, { "lat": 44.8440171798083, "lng": 23.0462824245827 }, 16, categories.QUARRY),
  hydro_vadeni: new POI(14, 'Hidrocentrala Vădeni', { "lat": 45.05777506717202, "lng": 23.269063843743936 }, { "lat": 45.05777506717202, "lng": 23.269063843743936 }, 19, categories.HYDROELECTRIC_POWERPLANT),
  hydro_tgJiu: new POI(15, 'Hidrocentrala Târgu-Jiu', { "lat": 45.03268228896665, "lng": 23.264261898215874 }, { "lat": 45.03268228896665, "lng": 23.264261898215874 }, 19, categories.HYDROELECTRIC_POWERPLANT),
  quarry_pesteana: new POI(16, 'Cariera Peșteana', { "lat": 44.841404278622, "lng": 23.273763546520314 }, { "lat": 44.8443149899096, "lng": 23.2744214414881 }, 15, categories.QUARRY),
  quarry_runcu: new POI(17, 'Cariera Runcu', { "lat": 45.15604410849404, "lng": 23.190594272217034 }, { "lat": 45.16129627796282, "lng": 23.189215359544196 }, 16, categories.QUARRY),
  landmark_parang: new POI(18, 'Vârful Parâng', { "lat": 45.346503389804376, "lng": 23.53891118393206 }, { "lat": 45.34568775747184, "lng": 23.539853402246962 }, 16, categories.MOUNTAIN), 
  museum_alxstf: new POI(19, 'Muzeul "Alexandru Ștefulescu"' , {"lat":45.03929039307542, "lng": 23.275901538733862}, {"lat":45.03927565104365,"lng":23.276094657782938}, 20 , categories.MUSEUM), 
  museum_art: new POI(20, 'Muzeul de Artă' , {"lat":45.0428208482978, "lng":23.268546741502387} , {"lat": 45.0428208482978, "lng":23.268546741502387}, 20 , categories.MUSEUM),   
  museum_brbgnsc: new POI(21, 'Casa "Barbu Gănescu"' , {"lat":  45.04180651843157, "lng": 23.271489410908195},{"lat":45.04185403670589,"lng":23.271533928905903}, 20 , categories.MUSEUM),
  legend_torovantilor: new POI(22,'Legenda Trovanților',{"lat":45.13756198139029, "lng":24.066824815343056},{"lat":45.13757427970835,"lng":24.069270062039536}, 17, categories.LEGEND),
  cave_polovragi: new POI(23, 'Peștera Polovragi', {"lat":45.20019649712971, "lng":  23.78350965337176}, {"lat":45.20039481855663,"lng":23.78379078523994}, 16 , categories.CAVE), 
  cave_ascunsa: new POI(24,'Peștera Ascunsă',{"lat": 45.21041593914785, "lng": 23.7790518859946},{"lat":45.211405146727664,"lng":23.77907613081935}, 16 , categories.CAVE),
  cave_muierilor: new POI(25, 'Peștera Muierilor', {"lat":45.19302041284149, "lng": 23.754486739878054}, {"lat":45.193062942506934,"lng":23.75443711901129}, 20, categories.CAVE),
  museum_trovantilor: new POI(26,'Muzeul Trovanților',{"lat":45.13756198139029, "lng":24.068824815343056},{"lat":45.13757427970835,"lng":24.069270062039536}, 17, categories.MUSEUM),
  aerodrome_barza: new POI(27, 'Casa Memorială "Aerodrom Barza"', { "lat":45.001323264618065, "lng": 23.332815031088867 }, { "lat":45.001323264618065, "lng": 23.332815031088867 }, 17, categories.AERODROME),
  museum_ArhiPop: new POI(28,'Muzeul Arhitecturii Populare',{"lat":45.107810628669846, "lng": 23.355495037072014}, {"lat":45.107642417419136,"lng":23.35544588298242}, 18 , categories.MUSEUM),
  museum_eminescu: new POI(29,'Muzeul Mihai Eminescu',{"lat":44.62571413871281, "lng": 23.531547510460392},{"lat":44.62571413871281, "lng": 23.531547510460392},19 , categories.MUSEUM),
  museum_casabrancusi: new POI(30,'Casa Memoriala "Constantin Brâncuși"',{"lat":45.05379771848885, "lng": 23.05563375703781},{"lat":45.05364879457612,"lng":23.055871387101394},20,categories.MUSEUM),
  river_cheiSohodolului: new POI(31, 'Cheile Sohodolului', { "lat":45.13829970190993, "lng": 23.139661232624494}, { "lat": 45.13829970190993, "lng": 23.139661232624494 }, 16, categories.RIVER),
  natmon_inelulDoamnei: new POI(32, 'Inelul Doamnei', { "lat":45.138909297926176, "lng": 23.14238849632816}, {"lat":45.13878034246934,"lng":23.14255311286172}, 19, categories.NATURAL_MONUMENT),
  cave_garlaVacii: new POI(33, 'Peștera Gârla Vacii', { "lat":45.13466669447948, "lng": 23.143892283453397}, {"lat":45.13419481709545,"lng":23.14401994386678}, 17, categories.CAVE),
  cave_nara: new POI(34, 'Peștera de la Nară', { "lat":45.13893165229381, "lng": 23.13764828653659}, {"lat":45.13901490039532,"lng":23.137498082831755}, 18, categories.CAVE),
  river_defileuljiului: new POI(35, 'Parcul Național Defileul Jiului', { "lat":45.26920915616186, "lng":23.386227571521584 }, {"lat":45.27130821295209,"lng":23.39079805568297}, 14, categories.RIVER),
  waterfall_murga: new POI(36, 'Cascada Murga', { "lat": 45.324991684843624, "lng": 23.370686354709935 }, {"lat":45.32465523032395,"lng":23.370744577326736}, 19, categories.WATERFALL), 
  forest_sfinxulLainicilor: new POI(37, 'Pădurea Sfinxul Lainicilor', { "lat": 45.313972391304574, "lng": 23.39431404142606 }, {"lat":45.31450221422247,"lng":23.396174308393274}, 15, categories.FOREST),
  church_locurele: new POI(38, 'Schitul Locurele', { "lat": 45.25676621480222, "lng": 23.376540793884047 }, {"lat":45.25654609689834,"lng":23.37875216287306}, 17, categories.CHURCH),
  church_visina: new POI(39, 'Mănăstirea Vișina', { "lat": 45.19198798212318, "lng": 23.391537235275962 }, {"lat":45.191999024212855,"lng":23.391791209902955}, 19, categories.CHURCH),
  powerplant_bumbesti: new POI(40, 'Termocentrala Bumbești-Jiu', { "lat": 45.18986127507058, "lng": 23.39538672495331 }, {"lat":45.189549428912464,"lng":23.39544289430166}, 18, categories.POWERPLANT),
  factory_mecanicasadu: new POI(41, 'Uzina Mecanică Sadu', { "lat": 45.18928868652825, "lng": 23.393607061413448 }, {"lat":45.189549428912464,"lng":23.39544289430166}, 18, categories.FACTORY),
  factory_parcindustrialgorj: new POI(42, 'Parcul Industrial Gorj', { "lat": 45.13879654201869, "lng": 23.398203191769543 }, { "lat": 45.13879654201869, "lng": 23.398203191769543 }, 16, categories.FACTORY),
  river_oltetului: new POI(43, 'Cheile Oltețului', { "lat": 45.20379756334062, "lng": 23.779054570097042  }, {"lat":45.20245390456247,"lng":23.77752833569181}, 15, categories.RIVER),
  church_polovragi: new POI(44, 'Mănăstirea Polovragi', { "lat": 45.19303195772327, "lng": 23.789096761616797 }, {"lat":45.19330596651337,"lng":23.788774713579972}, 18, categories.CHURCH),
  monument_cruceursache: new POI(45, 'Crucea lui Ursache', { "lat": 45.202648522767625, "lng": 23.78613560257892 }, {"lat":45.202465417103575,"lng":23.78637477646801}, 18, categories.MONUMENT),
  church_lainici: new POI(46, 'Mănăstirea Lainici', { "lat": 45.263600159621966, "lng": 23.39078964742559 }, {"lat":45.264200913990656,"lng":23.39097849351233}, 17, categories.CHURCH),
  church_tismana: new POI(47, 'Mănăstirea Tismana', { "lat": 45.080838875591034, "lng": 22.927082201838438 }, {"lat":45.08054976787066,"lng":22.927185143035583}, 18, categories.CHURCH),
  ruins_bumbesti: new POI(48, 'Ruinele Castrului Roman Bumbești-Jiu', { "lat": 45.15553269469799, "lng": 23.374289509819885 }, {"lat":45.15550475718353,"lng":23.37224766104507}, 18, categories.MUSEUM),
  monument_ecaterina: new POI(49, 'Mausoleul "Ecaterina Teodoroiu"', { "lat": 45.04117144928403, "lng": 23.271840947106032 }, { "lat": 45.04117144928403, "lng": 23.271840947106032 }, 20, categories.MONUMENT),
  museum_ecaterina: new POI(50, 'Casa Memorială "Ecaterina Teodoroiu"', { "lat":45.06251382096766, "lng": 23.290891082026114 }, { "lat": 45.06251382096766, "lng": 23.290891082026114 }, 20, categories.MUSEUM),
  legend_pestPolovragi: new POI(51, 'Legende despre Peștera Polovragi',  {"lat":45.20019649712971, "lng":  23.78150965337176}, {"lat":45.20039481855663,"lng":23.78379078523994}, 16, categories.LEGEND),
  legend_ascunsa: new POI(52, 'Legende despre Peștera Ascunsă', {"lat": 45.21041593914785, "lng": 23.7770518859946},{"lat":45.211405146727664,"lng":23.77907613081935}, 16, categories.LEGEND),
  legend_muierilor: new POI(53, 'Legenda Peșterii Muierilor', {"lat":45.19302041284149, "lng": 23.752486739878054}, {"lat":45.193062942506934,"lng":23.75443711901129}, 16, categories.LEGEND),
  event_polovragi: new POI(54, 'Târgul de Sfântul Ilie de la Polovragi', { "lat": 45.16584074014762, "lng":23.80661129747973 }, { "lat": 45.16584074014762, "lng":23.80661129747973 }, 16, categories.EVENT),
  event_filminsat: new POI(55, 'Festivalul „Film în Sat”', { "lat": 45.08345331224193, "lng":23.046393372113098 }, { "lat": 45.08345331224193, "lng":23.046393372113098 }, 16, categories.EVENT),
  event_runcu: new POI(56, 'Sărbătorile Dealului la Runcu', { "lat": 45.11822217008218, "lng":23.14630504544325 }, { "lat":45.11802217008218,"lng": 23.14630504544325 }, 16, categories.EVENT),
  event_mariaapostol: new POI(57, 'Festivalul de Folclor „Maria Apostol” – Runcu, Gorj', { "lat":45.11842217008218, "lng":23.14630504544325 }, { "lat": 45.11842217008218, "lng":23.14630504544325 }, 16, categories.EVENT),
  event_tismana: new POI(58, 'Târgul de Primăvară – Tismana', { "lat": 45.064992158768675, "lng":22.95371232719213 }, { "lat": 45.064992158768675, "lng":22.95371232719213 }, 16, categories.EVENT),
  erasmus_runcu: new POI(59, 'Pădurea Erasmus+ Runcu', { "lat": 45.147964974657434,  "lng":23.10844688273203 }, { "lat": 45.147964974657434,  "lng":23.10844688273203 }, 16, categories.ERASMUS),
  erasmus_baiadefier: new POI(60, 'Pădurea Erasmus+ Baia de Fier', { "lat": 45.185939841003325, "lng":23.755833701627452 }, { "lat": 45.185939841003325, "lng":23.755833701627452 }, 16, categories.ERASMUS),
  erasmus_defileu: new POI(61, 'Pădurea Erasmus+ Defileul Jiului', { "lat": 45.20188377432958, "lng":23.383579596967476 }, { "lat": 45.20188377432958, "lng":23.383579596967476 }, 16, categories.ERASMUS),


  //   not verified
  /*manastirea_stramba: new POI(38, 'Mănăstirea Strâmba', { "lat": 44.6667, "lng": 23.3833 }, { "lat": 44.6667, "lng": 23.3833 }, 20, categories.CHURCH),
  cheile_galbenului: new POI(34, 'Cheile Galbenului', { "lat": 45.1500, "lng": 23.7000 }, { "lat": 45.1500, "lng": 23.7000 }, 16, categories.RIVER),
  biserica_sfintii_arhangheli: new POI(39, 'Biserica Sfinții Arhangheli', { "lat": 45.0333, "lng": 23.2833 }, { "lat": 45.0333, "lng": 23.2833 }, 20, categories.CHURCH),
  biserica_sfintii_petri_pavel: new POI(40, 'Biserica Sfinții Petru și Pavel', { "lat": 45.0333, "lng": 23.2833 }, { "lat": 45.0333, "lng": 23.2833 }, 20, categories.CHURCH),
  pestera_polosnita: new POI(43, 'Peștera Polosnița', { "lat": 45.2000, "lng": 23.7833 }, { "lat": 45.2000, "lng": 23.7833 }, 16, categories.CAVE),
  pestera_closani: new POI(44, 'Peștera Cloșani', { "lat": 45.1167, "lng": 23.1167 }, { "lat": 45.1167, "lng": 23.1167 }, 16, categories.CAVE),
  pestera_coroiu: new POI(45, 'Peștera Coroiu', { "lat": 45.1500, "lng": 23.7000 }, { "lat": 45.1500, "lng": 23.7000 }, 16, categories.CAVE),
  pestera_pestera: new POI(46, 'Peștera Peștera', { "lat": 45.2333, "lng": 23.7333 }, { "lat": 45.2333, "lng": 23.7333 }, 16, categories.CAVE),
  pestera_pestera_mare: new POI(47, 'Peștera Peștera Mare', { "lat": 45.2833, "lng": 23.3833 }, { "lat": 45.2833, "lng": 23.3833 }, 16, categories.CAVE),
  pestera_pestera_mica: new POI(48, 'Peștera Peștera Mică', { "lat": 45.0500, "lng": 23.2667 }, { "lat": 45.0500, "lng": 23.2667 }, 16, categories.CAVE),
  pestera_pestera_ursilor: new POI(49, 'Peștera Peștera Urșilor', { "lat": 45.2000, "lng": 23.7833 }, { "lat": 45.2000, "lng": 23.7833 }, 16, categories.CAVE),
  pestera_pestera_liliecilor: new POI(50, 'Peștera Peștera Liliecilor', { "lat": 44.6667, "lng": 23.3833 }, { "lat": 44.6667, "lng": 23.3833 }, 16, categories.CAVE),
  lake_ceauru: new POI(52, 'Lacul Ceauru', { "lat": 44.9266, "lng": 23.1950 }, { "lat": 44.9266, "lng": 23.1950 }, 17, categories.LAKE),
  lake_tismana: new POI(53, 'Lacul Tismana', { "lat": 45.0300, "lng": 23.1500 }, { "lat": 45.0300, "lng": 23.1500 }, 17, categories.LAKE),
  river_jiu: new POI(54, 'Râul Jiu', { "lat": 45.2000, "lng": 23.7000 }, { "lat": 45.2000, "lng": 23.7000 }, 16, categories.RIVER),
  waterfall_susita: new POI(55, 'Cascada Sușița', { "lat": 45.1500, "lng": 23.4000 }, { "lat": 45.1500, "lng": 23.4000 }, 16, categories.RIVER),
  cave_vacii: new POI(56, 'Peștera Vacii', { "lat": 45.2200, "lng": 23.7100 }, { "lat": 45.2200, "lng": 23.7100 }, 16, categories.CAVE),
  cave_bulba: new POI(57, 'Peștera Bulba', { "lat": 45.1600, "lng": 23.7200 }, { "lat": 45.1600, "lng": 23.7200 }, 16, categories.CAVE),
  peak_godeanu: new POI(58, 'Vârful Godeanu', { "lat": 45.2400, "lng": 23.5600 }, { "lat": 45.2400, "lng": 23.5600 }, 16, categories.MOUNTAIN),
  peak_papusa: new POI(59, 'Vârful Păpușa', { "lat": 45.3000, "lng": 23.5800 }, { "lat": 45.3000, "lng": 23.5800 }, 16, categories.MOUNTAIN),
  peak_straja: new POI(60, 'Vârful Straja', { "lat": 45.3700, "lng": 23.4600 }, { "lat": 45.3700, "lng": 23.4600 }, 16, categories.MOUNTAIN),
 // ski_parang: new POI(61, 'Domeniul Schiabil Parâng', { "lat": 45.3465, "lng": 23.5389 }, { "lat": 45.3465, "lng": 23.5389 }, 16, categories.SKI_RESORT),
  monument_vadeni: new POI(65, 'Monumentul Eroilor Vădeni', { "lat": 45.0577, "lng": 23.2690 }, { "lat": 45.0577, "lng": 23.2690 }, 20, categories.MONUMENT),
  lake_turceni: new POI(66, 'Lacul Turceni', { "lat": 44.6800, "lng": 23.4100 }, { "lat": 44.6800, "lng": 23.4100 }, 17, categories.LAKE),
  botanical_garden_tgjiu: new POI(69, 'Grădina Botanică Târgu Jiu', { "lat": 45.0350, "lng": 23.2680 }, { "lat": 45.0350, "lng": 23.2680 }, 20, categories.MUSEUM),
 // nature_reserve_vanturarita: new POI(70, 'Rezervația Naturală Vânturarița', { "lat": 45.2300, "lng": 23.5600 }, { "lat": 45.2300, "lng": 23.5600 }, 16, categories.NATURAL_RESERVE),
 // hill_piatra: new POI(71, 'Dealul Piatra', { "lat": 45.0500, "lng": 23.4000 }, { "lat": 45.0500, "lng": 23.4000 }, 16, categories.HILL),
  cave_meledic: new POI(72, 'Peștera Meledic', { "lat": 45.2200, "lng": 23.7100 }, { "lat": 45.2200, "lng": 23.7100 }, 16, categories.CAVE),
  monument_doftana: new POI(73, 'Monumentul Doftana', { "lat": 45.0500, "lng": 23.1500 }, { "lat": 45.0500, "lng": 23.1500 }, 20, categories.MONUMENT),
  bridge_tismana: new POI(74, 'Podul Tismana', { "lat": 45.0500, "lng": 23.2667 }, { "lat": 45.0500, "lng": 23.2667 }, 20, categories.MONUMENT),
  museum_gorjului: new POI(75, 'Muzeul Gorjului', { "lat": 45.0390, "lng": 23.2760 }, { "lat": 45.0390, "lng": 23.2760 }, 20, categories.MUSEUM),
  quarry_motru: new POI(76, 'Cariera Motru', { "lat": 44.8000, "lng": 23.1000 }, { "lat": 44.8000, "lng": 23.1000 }, 15, categories.QUARRY)*/
};

// Center of the map
const poiCenter = poi.school_cntv;

class Route
{
  constructor(nameRO, nameEN, nameFR, waypoints, isWalking)
  {
    this.nameRO = nameRO;
    this.nameEN = nameEN;
    this.nameFR = nameFR;
    this.waypoints = waypoints;
    this.isWalking = isWalking;
  }
}

const routes = [
  new Route(
    "Axa Brancuși", 
    "Brancuși Axis",
    "Axe Brancuși",
    [ poi.monument_tacerii, poi.monument_poarta, poi.monument_infinit], 
    true
  ),
  new Route(
    "Cultura Orașului", 
    "City Culture",
    "Culture de la Ville",
    [poi.museum_art,poi.museum_brbgnsc, poi.monument_ecaterina, poi.museum_alxstf, poi.museum_ecaterina], 
    true
  ),
  new Route(
    "Traseul Evenimentelor",
    "Events Route",
    "Route des Événements",
    [poi.event_polovragi, poi.event_filminsat, poi.event_runcu, poi.event_mariaapostol, poi.event_tismana],
    false
  ),
  new Route(
    "Traseul Spiritual",
    "Spiritual Route",
    "Route Spirituelle", 
    [poi.church_lainici, poi.church_locurele, poi.church_visina, poi.church_polovragi, poi.church_tismana], 
    false
  ),
  new Route(
    "Lista Pescarului",
    "Fisherman's List",
    "Liste des Pêcheurs",
    [poi.river_cheiSohodolului, poi.river_cheiSohodolului, poi.waterfall_murga], 
    false
  ),
  new Route(
    "Drumul Subteran", 
    "Underground Route",
    "Route Souterraine",
    [poi.cave_muierilor, poi.cave_polovragi, poi.cave_ascunsa, poi.cave_garlaVacii, poi.cave_nara], 
    false
  ),
  new Route(
    "Traseul Energetic Oltenia", 
    "Oltenia Energy Route",
    "Route Énergétique Oltenia",
    [poi.powerplant_turceni, poi.powerplant_rovinari, poi.hydro_tgJiu, poi.hydro_vadeni, poi.powerplant_bumbesti], 
    false
  ),
  new Route(
    "Traseul Carierelor", 
    "Quarries Route",
    "Route des Carrières",
    [ poi.quarry_tismana, poi.quarry_rovinari, poi.quarry_pinoasa, poi.quarry_rosia, poi.quarry_pesteana, poi.quarry_jiltNord, poi.quarry_matasari, poi.quarry_rosiuta], 
    false
  ),
];

// Debug POI
const debugPoi = [
  [1,  'debug_MONUMENT', { lat: 45.037700, lng: 23.273950 }, 20, categories.MONUMENT],
  [2,  'debug_SCHOOL', { lat: 45.037700, lng: 23.274150 }, 20, categories.SCHOOL],
  [3,  'debug_MOUNTAIN', { lat: 45.037700, lng: 23.274350 }, 20, categories.MOUNTAIN],
  [4,  'debug_FOREST', { lat: 45.037700, lng: 23.274550 }, 20, categories.FOREST],
  [5,  'debug_RIVER', { lat: 45.037700, lng: 23.274750 }, 20, categories.RIVER],
  [6,  'debug_LAKE', { lat: 45.037700, lng: 23.274950 }, 20, categories.LAKE],
  [7,  'debug_CAVE', { lat: 45.037700, lng: 23.275150 }, 20, categories.CAVE],
  [8,  'debug_CHURCH', { lat: 45.037700, lng: 23.275350 }, 20, categories.CHURCH],
  [9,  'debug_MANSION', { lat: 45.037700, lng: 23.275550 }, 20, categories.MANSION],
  [10, 'debug_LEGEND', { lat: 45.037700, lng: 23.275750 }, 20, categories.LEGEND],
  [11, 'debug_FACTORY', { lat: 45.037700, lng: 23.275950 }, 20, categories.FACTORY],
  [12, 'debug_POWERPLANT', { lat: 45.037700, lng: 23.276150 }, 20, categories.POWERPLANT],
  [13, 'debug_HYDROELECTRIC_POWERPLANT', { lat: 45.037700, lng: 23.276350 }, 20, categories.HYDROELECTRIC_POWERPLANT],
  [14, 'debug_PHOTOVOLTAIC_FIELD', { lat: 45.037700, lng: 23.276550 }, 20, categories.PHOTOVOLTAIC_FIELD],
  [15, 'debug_QUARRY', { lat: 45.037700, lng: 23.276750 }, 20, categories.QUARRY],
  [16, 'debug_CINEMA', { lat: 45.037700, lng: 23.276950 }, 20, categories.CINEMA],
  [17, 'debug_LIBRARY', { lat: 45.037700, lng: 23.277150 }, 20, categories.LIBRARY],
  [18, 'debug_NATURAL_MONUMENT', { lat: 45.037700, lng: 23.277350 }, 20, categories.NATURAL_MONUMENT],
  [19, 'debug_WATERFALL', { lat: 45.037700, lng: 23.277550 }, 20, categories.WATERFALL],
  [20, 'debug_AERODROME', { lat: 45.037700, lng: 23.277750 }, 20, categories.AERODROME],
  [21, 'debug_EVENT', { lat: 45.037700, lng: 23.277950 }, 20, categories.EVENT],
  [22, 'debug_PARKING', { lat: 45.037700, lng: 23.278150 }, 20, categories.PARKING],
  [23, 'debug_ERASMUS', { lat: 45.037700, lng: 23.278350 }, 20, categories.ERASMUS]
];
