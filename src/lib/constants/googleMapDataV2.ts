import { get } from "http";
import {
  filteredPolygonCoordinates,
  generateRandomCoordinatesInsidePolygon,
  getCenterOfGeofence,
} from "../helpers/googleMapHelpers";

export const polygonOptions = {
  strokeColor: "#1e1e1e",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#1e1e1e",
  fillOpacity: 0.25,
  editable: false,
  draggable: false,
  pickable: false,
};

export const rawPolygonOptions = {
  strokeColor: "#1e1e1e",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#1e1e1e",
  fillOpacity: 0.25,
};

// export const torontoGeofenceCoordinates = [
//   [-79.39650851083591, 43.661414899893465],
//   [-79.4002880635671, 43.657800018942076],
//   [-79.40048024422576, 43.653188412605644],
//   [-79.39407422226995, 43.646374637547524],
//   [-79.38379255703092, 43.64943397911018],
//   [-79.37053209158239, 43.64662958862927],
//   [-79.3664002074209, 43.652609040035415],
//   [-79.36761735159251, 43.65854155072651],
//   [-79.37613736079372, 43.661160011573905],
//   [-79.38315195483533, 43.66076609113338],
//   [-79.38960276889779, 43.664152075176084],
//   [-79.39650851083591, 43.661414899893465],
// ];

export const torontoGeofenceCoordinates = [
  [-79.46159008422022, 43.658301287157734],
  [-79.36099489461193, 43.67570210037898],
  [-79.33801024903755, 43.647717356111045],
  [-79.4214507121532, 43.6240649264971],
  [-79.46159008422022, 43.658301287157734],
];

export const torontoCityHallCoordinates = [
  { lng: -79.38488733675071, lat: 43.65387649058549 },
  { lng: -79.3833917282924, lat: 43.654194283326255 },
  { lng: -79.38269674294929, lat: 43.652862760731125 },
  { lng: -79.38451482460682, lat: 43.65282655577701 },
  { lng: -79.38488733675071, lat: 43.65387649058549 },
];

export const torontoMetroPolianUniversityCoordinates = [
  { lng: -79.38072173583474, lat: 43.65930428184628 },
  { lng: -79.37863194512482, lat: 43.65974164414275 },
  { lng: -79.37796022668236, lat: 43.65824595989803 },
  { lng: -79.38018436108077, lat: 43.65775998948871 },
  { lng: -79.38072173583474, lat: 43.65930428184628 },
];
export const torontoMossParkCoordinates = [
  { lng: -79.37383999070289, lat: 43.65537613942656 },
  { lng: -79.37010374949845, lat: 43.656168587010185 },
  { lng: -79.36941432403812, lat: 43.65451127353021 },
  { lng: -79.37324508324922, lat: 43.653710758647044 },
  { lng: -79.37383999070289, lat: 43.65537613942656 },
];

export const torontoCityHallGeoFenceData = {
  id: "torontoCityHall",
  coordinates: torontoCityHallCoordinates,
  color: [241, 196, 15, 100],
  zoom: 18,
  bounds: {
    south: 43.651472047988925,
    west: -79.3869940633136,
    north: 43.65549968816616,
    east: -79.38067934244435,
  },
  center: getCenterOfGeofence(filteredPolygonCoordinates(torontoCityHallCoordinates)),
  properties: {
    group: "Golfers",
    name: "Toronto City Hall",
    category: "Law, Gov’t & Politics",
    subCategory: "U.S. Government Resources",
    city: "Toronto",
    isPublic: true,
    color: "#f1c40f",
  },
};

export const torontoMetroPolianUniversityGeoFenceData = {
  id: "torontoMetroPolitanUniversity",
  coordinates: torontoMetroPolianUniversityCoordinates,
  color: [0, 0, 255, 100],

  zoom: 17.65,
  bounds: {
    south: 43.65775998948871,
    west: -79.38018436108077,
    north: 43.65974164414275,
    east: -79.37796022668236,
  },
  center: getCenterOfGeofence(filteredPolygonCoordinates(torontoMetroPolianUniversityCoordinates)),
  properties: {
    group: "Stadiums",
    name: "Toronto MetroPolitan University",
    category: "Education",
    subCategory: "College Life",
    city: "Toronto",
    isPublic: true,
    color: "#0000FF",
  },
};

export const torontoMossParkGeoFenceData = {
  id: "torontoMossPark",
  coordinates: torontoMossParkCoordinates,
  color: [0, 255, 0, 100],

  zoom: 17.65,
  bounds: {
    south: 43.653710758647044,
    west: -79.37324508324922,
    north: 43.656168587010185,
    east: -79.36941432403812,
  },
  center: getCenterOfGeofence(filteredPolygonCoordinates(torontoMossParkCoordinates)),
  properties: {
    group: "Stadiums",
    name: "Toronto Moss Park",
    category: "Home & Garden",
    subCategory: "Environmental Safety",
    city: "Toronto",
    isPublic: true,
    color: "#00FF00",
  },
};

export const torontoScatterplotData = {
  id: "torontoScatterplotData",
  name: "Toronto points",
};

export const newyorkGeofenceCoordinates = [
  [-74.01263038658126, 40.71306586088923],
  [-74.01096482088731, 40.71687745497977],
  [-74.00609624424347, 40.71869820316112],
  [-73.99924180081067, 40.71915945146123],
  [-73.99402089296234, 40.716464745135596],
  [-73.99411698329082, 40.71313869594236],
  [-73.99523803712327, 40.710759376330444],
  [-74.00036285464314, 40.70874417179431],
  [-74.00551970227248, 40.708477091917494],
  [-74.01106091121582, 40.70983676013598],
];

export const newyorkCityHallCoordinates = [
  [-74.00635248511946, 40.714206934234305],
  [-74.00420692715497, 40.71316235435913],
  [-74.00493089031607, 40.712387307073456],
  [-74.00747595668655, 40.71168013927017],
  [-74.00817752923442, 40.71204221012375],
  [-74.00635248511946, 40.714206934234305],
];

export const newyorkColumbusPark = [
  [-74.00012290033858, 40.71617708265909],
  [-73.99933772278047, 40.71590402450116],
  [-73.9996432028601, 40.715142798548065],
  [-73.99956193165829, 40.71396664888119],
  [-74.0004917640688, 40.71440759303232],
  [-74.00053467941083, 40.71512683173342],
  [-74.00076346828409, 40.71530825743149],
  [-74.00015471125523, 40.71620238728488],
  [-74.00012290033858, 40.71617708265909],
];

export const newyorkStarbucks = [
  [-74.00241996347111, 40.71159477522774],
  [-74.00087770741008, 40.7116901508804],
  [-74.00047147213061, 40.7110252434869],
  [-74.001158117603, 40.710210450373616],
  [-74.00199575317926, 40.7109816427701],
  [-74.00241996347111, 40.71159477522774],
];

export const Movies_ScotiabankTheatre_Toronto = [
  { lng: -79.39199487137975, lat: 43.64874726858226 },
  { lng: -79.39169608005108, lat: 43.64803213823984 },
  { lng: -79.39052389868475, lat: 43.648314865206835 },
  { lng: -79.39080545205215, lat: 43.64904662294174 },
  { lng: -79.39199487137975, lat: 43.64874726858226 },
];

export const Movies_Cineplex_Cinemas_Yonge = [
  { lng: -79.38004923784561, lat: 43.657334950123534 },
  { lng: -79.38117545131524, lat: 43.65716035102705 },
  { lng: -79.38084218406404, lat: 43.65640790625518 },
  { lng: -79.37973320855568, lat: 43.656594979040484 },
  { lng: -79.38004923784561, lat: 43.657334950123534 },
];

export const Movies_Jackman_Hall = [
  { lng: -79.39215713304027, lat: 43.65413258821345 },
  { lng: -79.39144513573967, lat: 43.654267385706184 },
  { lng: -79.39124334604823, lat: 43.65384155506227 },
  { lng: -79.39198324158343, lat: 43.65370772195055 },
  { lng: -79.39215713304027, lat: 43.65413258821345 },
];

export const Movies_Imagine_Cinemas = [
  { lng: -79.37354646973691, lat: 43.64959796661394 },
  { lng: -79.3725891043834, lat: 43.64978151371618 },
  { lng: -79.37237589939484, lat: 43.649370883839595 },
  { lng: -79.37339667755273, lat: 43.64918918230732 },
  { lng: -79.37354646973691, lat: 43.64959796661394 },
];

export const Movies_TIFF_Lightbox = [
  { lng: -79.39101748612826, lat: 43.64637800307011 },
  { lng: -79.3911936819437, lat: 43.64677924439657 },
  { lng: -79.38999525312425, lat: 43.64705003457687 },
  { lng: -79.38986863764987, lat: 43.64664831634673 },
  { lng: -79.39101748612826, lat: 43.64637800307011 },
];

// new geofences

export const Movies_Imagine_Cinemas_Carlton_Cinema = [
  { lng: -79.3817206582652, lat: 43.661475189842356 },
  { lng: -79.38189597199897, lat: 43.66170770646721 },
  { lng: -79.38144794801269, lat: 43.661827487407336 },
  { lng: -79.3812580248011, lat: 43.66157735634905 },
  { lng: -79.3817206582652, lat: 43.661475189842356 },
];

export const Movies_Cineplex_Cinemas_Varsity = [
  { lng: -79.3893109518104, lat: 43.66938856493023 },
  { lng: -79.38789858347005, lat: 43.66968333912339 },
  { lng: -79.38753572203875, lat: 43.66893630581939 },
  { lng: -79.38907090501736, lat: 43.66863748989444 },
  { lng: -79.3893109518104, lat: 43.66938856493023 },
];

export const Movies_Hot_Docs_Ted_Rogers_Cinema = [
  { lng: -79.41136217938377, lat: 43.66565958536932 },
  { lng: -79.41019342112382, lat: 43.66591020266582 },
  { lng: -79.4100348039314, lat: 43.66543916206301 },
  { lng: -79.41117016909823, lat: 43.66523081600199 },
  { lng: -79.41136217938377, lat: 43.66565958536932 },
];

export const Movies_The_Royal = [
  { lng: -79.41482289284721, lat: 43.65553229790322 },
  { lng: -79.41414555781667, lat: 43.655665336485214 },
  { lng: -79.41398029737965, lat: 43.655288112397095 },
  { lng: -79.41459296531544, lat: 43.65509924265466 },
  { lng: -79.41482289284721, lat: 43.65553229790322 },
];

export const Movies_Revue_Cinema = [
  { lng: -79.4514850021528, lat: 43.65106738678344 },
  { lng: -79.45105439397184, lat: 43.65114317392474 },
  { lng: -79.45091706487631, lat: 43.65088044475938 },
  { lng: -79.45142215663448, lat: 43.65080465728654 },
  { lng: -79.4514850021528, lat: 43.65106738678344 },
];

export const Movies_DGLT_CINE = [
  { lng: -79.39896637647125, lat: 43.64458102951835 },
  { lng: -79.39845475827217, lat: 43.64471547946195 },
  { lng: -79.39823934008308, lat: 43.64408999238531 },
  { lng: -79.39875903646424, lat: 43.64396333533082 },
  { lng: -79.39896637647125, lat: 43.64458102951835 },
];

export const Movies_Cine_Cycle = [
  { lng: -79.39548036566859, lat: 43.647525977710956 },
  { lng: -79.3948835952534, lat: 43.64765344335967 },
  { lng: -79.39472901014585, lat: 43.64732827535332 },
  { lng: -79.39532937556355, lat: 43.64725543747859 },
  { lng: -79.39548036566859, lat: 43.647525977710956 },
];

export const tornotoImagineCinemasCarltonCinemaGeoFenceData = {
  id: "tornotoImagineCinemasCarltonCinema",
  coordinates: Movies_Imagine_Cinemas_Carlton_Cinema,
  color: [255, 0, 0, 100],

  zoom: 18.78,
  bounds: {
    south: 43.66075645511917,
    west: -79.38534436639205,
    north: 43.66244181613073,
    east: -79.37737112811814,
  },

  center: getCenterOfGeofence(filteredPolygonCoordinates(Movies_Imagine_Cinemas_Carlton_Cinema)),
  properties: {
    group: "Movie Halls",
    name: "Toronto Imagine Cinemas",
    category: "Arts & Entertainment",
    subCategory: "Movies",
    city: "Toronto",
    isPublic: false,
    color: "#FF0000",
  },
};

export const torontoCineplexCinemasVarsityGeoFenceData = {
  id: "torontoCineplexCinemasVarsity",
  coordinates: Movies_Cineplex_Cinemas_Varsity,
  color: [255, 0, 0, 100],
  zoom: 18.57,
  bounds: {
    south: 43.66759104857903,
    west: -79.39247876870951,
    north: 43.66954116471538,
    east: -79.38325193530149,
  },
  center: getCenterOfGeofence(filteredPolygonCoordinates(Movies_Cineplex_Cinemas_Varsity)),
  properties: {
    group: "Movie Halls",
    name: "Toronto Cineplex Cinemas Varsity",
    category: "Arts & Entertainment",
    subCategory: "Movies",
    city: "Toronto",
    isPublic: false,
    color: "#FF0000",
  },
};

export const torontoHotDocsTedRogersCinemaGeoFenceData = {
  id: "torontoHotDocsTedRogersCinema",
  coordinates: Movies_Hot_Docs_Ted_Rogers_Cinema,
  color: [255, 0, 0, 100],
  zoom: 18.784,
  bounds: {
    south: 43.66474278625954,
    west: -79.41401815172419,
    north: 43.66642814297161,
    east: -79.40604440433253,
  },

  center: getCenterOfGeofence(filteredPolygonCoordinates(Movies_Hot_Docs_Ted_Rogers_Cinema)),
  properties: {
    group: "Movie Halls",
    name: "Toronto Hot Docs Ted Rogers Cinema",
    category: "Arts & Entertainment",
    subCategory: "Movies",
    city: "Toronto",
    isPublic: false,
    color: "#FF0000",
  },
};

export const torontoRoyalGeoFenceData = {
  id: "torontoRoyal",
  coordinates: Movies_The_Royal,
  color: [255, 0, 0, 100],
  zoom: 18.784,
  bounds: {
    south: 43.654470721230574,
    west: -79.41835660851325,
    north: 43.65615608176504,
    east: -79.41038420713873,
  },

  center: getCenterOfGeofence(filteredPolygonCoordinates(Movies_The_Royal)),
  properties: {
    group: "Movie Halls",
    name: "Toronto The Royal",
    category: "Arts & Entertainment",
    subCategory: "Movies",
    city: "Toronto",
    isPublic: false,
    color: "#FF0000",
  },
};

export const torontoRevueCinemaGeoFenceData = {
  id: "torontoRevueCinema",
  coordinates: Movies_Revue_Cinema,
  color: [255, 0, 0, 100],
  zoom: 19.2056,
  bounds: {
    south: 43.65041481903572,
    west: -79.45417835790708,
    north: 43.65167362883539,
    east: -79.44822412830713,
  },

  center: getCenterOfGeofence(filteredPolygonCoordinates(Movies_Revue_Cinema)),
  properties: {
    group: "Movie Halls",
    name: "Toronto Revue Cinema",
    category: "Arts & Entertainment",
    subCategory: "Movies",
    city: "Toronto",
    isPublic: false,
    color: "#FF0000",
  },
};

export const torontoDGLTCINEGeoFenceData = {
  id: "torontoDGLTCINE",
  coordinates: Movies_DGLT_CINE,
  color: [255, 0, 0, 100],
  zoom: 19.2058,
  bounds: {
    south: 43.64371661007568,
    west: -79.40160751495624,
    north: 43.6449754220253,
    east: -79.3956539391286,
  },

  center: getCenterOfGeofence(filteredPolygonCoordinates(Movies_DGLT_CINE)),
  properties: {
    group: "Movie Halls",
    name: "Toronto DGLT CINE",
    category: "Arts & Entertainment",
    subCategory: "Movies",
    city: "Toronto",
    isPublic: false,
    color: "#FF0000",
  },
};

export const torontoCineCycleGeoFenceData = {
  id: "torontoCineCycle",
  coordinates: Movies_Cine_Cycle,
  color: [255, 0, 0, 100],
  zoom: 18.784,
  bounds: {
    south: 43.64662806143321,
    west: -79.399012075498,
    north: 43.64831342434938,
    east: -79.39104070385524,
  },

  center: getCenterOfGeofence(filteredPolygonCoordinates(Movies_Cine_Cycle)),
  properties: {
    group: "Movie Halls",
    name: "Toronto Cine Cycle",
    category: "Arts & Entertainment",
    subCategory: "Movies",
    city: "Toronto",
    isPublic: false,
    color: "#FF0000",
  },
};

export const torontoScotiabankTheatreGeoFenceDataz = {
  id: "torontoScotiabankTheatre",
  coordinates: Movies_ScotiabankTheatre_Toronto,
  color: [255, 0, 0, 100],

  zoom: 17.94,
  bounds: {
    south: 43.64736976127629,
    west: -79.39556890895891,
    north: 43.650390831032446,
    east: -79.38697859104104,
  },
  center: getCenterOfGeofence(filteredPolygonCoordinates(Movies_ScotiabankTheatre_Toronto)),
  properties: {
    group: "Movie Halls",
    name: "Toronto Scotiabank Theatre",
    category: "Arts & Entertainment",
    subCategory: "Movies",
    city: "Toronto",
    isPublic: false,
    color: "#FF0000",
  },
};

export const torontoCineplexCinemasYongeGeoFenceData = {
  id: "torontoCineplexCinemasYonge",
  coordinates: Movies_Cineplex_Cinemas_Yonge,
  color: [255, 0, 0, 100],

  zoom: 17.94,
  bounds: {
    south: 43.655163411275275,
    west: -79.38472131639439,
    north: 43.6581844810314,
    east: -79.37612988360563,
  },
  center: getCenterOfGeofence(filteredPolygonCoordinates(Movies_Cineplex_Cinemas_Yonge)),
  properties: {
    group: "Movie Halls",
    name: "Toronto Cineplex Cinemas Yonge",
    category: "Arts & Entertainment",
    subCategory: "Movies",
    city: "Toronto",
    isPublic: false,
    color: "#FF0000",
  },
};

export const torontoJackmanHallGeoFenceData = {
  id: "torontoJackmanHall",
  coordinates: Movies_Jackman_Hall,
  color: [255, 0, 0, 100],

  zoom: 17.94,
  bounds: {
    south: 43.652471861275615,
    west: -79.39645222385779,
    north: 43.65549293103178,
    east: -79.38786117614217,
  },
  center: getCenterOfGeofence(filteredPolygonCoordinates(Movies_Jackman_Hall)),
  properties: {
    group: "Movie Halls",
    name: "Toronto Jackman Hall",
    category: "Arts & Entertainment",
    subCategory: "Movies",
    city: "Toronto",
    isPublic: false,
    color: "#FF0000",
  },
};

export const torontoImagineCinemasGeoFenceData = {
  id: "torontoImagineCinemas",
  coordinates: Movies_Imagine_Cinemas,
  color: [255, 0, 0, 100],

  zoom: 17.94,
  bounds: {
    south: 43.6478640112762,
    west: -79.37662654430318,
    north: 43.650885081032364,
    east: -79.3680361556968,
  },
  center: getCenterOfGeofence(filteredPolygonCoordinates(Movies_Imagine_Cinemas)),
  properties: {
    group: "Movie Halls",
    name: "Toronto Imagine Cinemas",
    category: "Arts & Entertainment",
    subCategory: "Movies",
    city: "Toronto",
    isPublic: false,
    color: "#FF0000",
  },
};

export const torontoTIFFLightboxGeoFenceData = {
  id: "torontoTIFFLightbox",
  coordinates: Movies_TIFF_Lightbox,
  color: [255, 0, 0, 100],

  zoom: 17.94,
  bounds: {
    south: 43.6449895112766,
    west: -79.39476448875787,
    north: 43.64801058103279,
    east: -79.38617451124212,
  },
  center: getCenterOfGeofence(filteredPolygonCoordinates(Movies_TIFF_Lightbox)),
  properties: {
    group: "Movie Halls",
    name: "Toronto TIFF Lightbox",
    category: "Arts & Entertainment",
    subCategory: "Movies",
    city: "Toronto",
    isPublic: false,
    color: "#FF0000",
  },
};

export const torontoGeofences = [
  torontoCityHallGeoFenceData,
  torontoMetroPolianUniversityGeoFenceData,
  torontoMossParkGeoFenceData,
  torontoScotiabankTheatreGeoFenceDataz,
  torontoCineplexCinemasYongeGeoFenceData,
  torontoJackmanHallGeoFenceData,
  torontoImagineCinemasGeoFenceData,
  torontoTIFFLightboxGeoFenceData,
  tornotoImagineCinemasCarltonCinemaGeoFenceData,
  torontoCineplexCinemasVarsityGeoFenceData,
  torontoHotDocsTedRogersCinemaGeoFenceData,
  torontoRoyalGeoFenceData,
  torontoRevueCinemaGeoFenceData,
  torontoDGLTCINEGeoFenceData,
  torontoCineCycleGeoFenceData,
];

export const coffeeSecondCupCafé = [
  { lng: -79.69432509481246, lat: 43.61293858475622 },
  { lng: -79.69322551352116, lat: 43.61229582813216 },
  { lng: -79.69438627140683, lat: 43.61130152442429 },
  { lng: -79.69538899182295, lat: 43.612027525576416 },
];

export const coffeeRCCoffeeRoboCafe = [
  { lng: -79.37419761686013, lat: 43.64924543103259 },
  { lng: -79.3740721010156, lat: 43.648983653388996 },
  { lng: -79.3745077148307, lat: 43.648903517147524 },
  { lng: -79.37464799724607, lat: 43.64919200711634 },
];

export const coffeeGoldstruckCoffeeatDowntown = [
  { lng: -79.38454843314008, lat: 43.650386870498714 },
  { lng: -79.38448198357493, lat: 43.65011441320703 },
  { lng: -79.38495451381608, lat: 43.65002359383513 },
  { lng: -79.38505787980635, lat: 43.650301393834376 },
];

export const coffeeMosMosCoffee = [
  { lng: -79.38449868270524, lat: 43.657796910277106 },
  { lng: -79.38409998531424, lat: 43.657941134075166 },
  { lng: -79.38394493631782, lat: 43.65769541924858 },
  { lng: -79.38442484985556, lat: 43.6576206362757 },
];

export const coffeePilotCoffeeRoasters = [
  { lng: -79.41971361613713, lat: 43.646848322126566 },
  { lng: -79.41923370259937, lat: 43.647003257398005 },
  { lng: -79.41913033660666, lat: 43.646816266503244 },
  { lng: -79.41967669971118, lat: 43.646672015986695 },
];

export const coffeeDineenCoffeeCo = [
  { lng: -79.37888076628158, lat: 43.65141646888564 },
  { lng: -79.37877001701003, lat: 43.65106388290558 },
  { lng: -79.3791317979398, lat: 43.650999776141354 },
  { lng: -79.37922778063543, lat: 43.651379073501055 },
];
