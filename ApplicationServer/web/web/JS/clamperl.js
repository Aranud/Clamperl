var carte;

function initialiser() {
    var latlng = new google.maps.LatLng(42.6745549,2.8478487);
    //objet contenant des propriétés avec des identificateurs prédéfinis dans Google Maps permettant
    //de définir des options d'affichage de notre carte
    var options = {
        center: latlng,
        zoom: 0,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    //constructeur de la carte qui prend en paramêtre le conteneur HTML
    //dans lequel la carte doit s'afficher et les options
    carte = new google.maps.Map(document.getElementById("carte"), options);

    var imerir = new google.maps.Marker({
        position: new google.maps.LatLng(42.6745549,2.8478487),
        icon: "./img/icone_imerir.png",
        map: carte
    });
//chemin du tracé du futur polyline
var parcoursBus = [
    new google.maps.LatLng(46.781367900048, 6.6401992834884),
    new google.maps.LatLng(46.780821285011, 6.6416348016222),
    new google.maps.LatLng(46.780496546047, 6.6421830461926),
    new google.maps.LatLng(46.779835306991, 6.6426765713417),
    new google.maps.LatLng(46.777748677169, 6.6518819126808),
    new google.maps.LatLng(46.778027878803, 6.6541349682533),
    new google.maps.LatLng(46.778484884759, 6.6557324922045),
    new google.maps.LatLng(46.778752327087, 6.6573654211838),
    new google.maps.LatLng(46.778605381016, 6.6588674582321)
];
var traceParcoursBus = new google.maps.Polyline({
    path: parcoursBus,//chemin du tracé
    strokeColor: "#FF0000",//couleur du tracé
    strokeOpacity: 1.0,//opacité du tracé
    strokeWeight: 2//grosseur du tracé
});
//lier le tracé à la carte
//ceci permet au tracé d'être affiché sur la carte
traceParcoursBus.setMap(carte);
    JSONParse();
}



var json = '{"users":[{"id":0,"name":"Inez Petersen","location":"Homeland","latitude":-44.175546,"longitude":101.169136,"distance":551,"nbcoups":4,"coups":[{"id":0,"locationDep":"Carlos","latitudeDep":-30.72348,"longitudeDep":-97.062892,"locationArr":"Lemoyne","latitudeArr":-40.606384,"longitudeArr":-168.772286,"distance":863},{"id":1,"locationDep":"Allamuchy","latitudeDep":2.320417,"longitudeDep":-62.062153,"locationArr":"Venice","latitudeArr":31.586818,"longitudeArr":-140.566405,"distance":723}]},{"id":1,"name":"Theresa Wiley","location":"Bluffview","latitude":61.756238,"longitude":173.8638,"distance":215,"nbcoups":9,"coups":[{"id":0,"locationDep":"Albrightsville","latitudeDep":17.24496,"longitudeDep":57.911582,"locationArr":"Otranto","latitudeArr":-17.7676,"longitudeArr":-72.313635,"distance":232},{"id":1,"locationDep":"Emison","latitudeDep":-35.055494,"longitudeDep":132.734144,"locationArr":"Sussex","latitudeArr":27.243467,"longitudeArr":-69.454314,"distance":713}]},{"id":2,"name":"Williamson Dawson","location":"Coyote","latitude":84.492552,"longitude":-150.917687,"distance":723,"nbcoups":9,"coups":[{"id":0,"locationDep":"Kenmar","latitudeDep":-32.910857,"longitudeDep":-28.413673,"locationArr":"Statenville","latitudeArr":87.116289,"longitudeArr":37.80439,"distance":259},{"id":1,"locationDep":"Dana","latitudeDep":45.885472,"longitudeDep":-87.305983,"locationArr":"Lawrence","latitudeArr":-83.06341,"longitudeArr":-170.263978,"distance":684}]}]}';

function addMarker (latitude, longitude) {
   
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude,longitude),
        map: carte
    });
}
function masquer(section) { if (document.getElementById(section).style.display == 'none') 
                        document.getElementById(section).style.display = 'block';
                        else
                            document.getElementById(section).style.display = 'none'}
function setActive(onglet) { if (onglet == 'tab1') {
                            document.getElementById('joueurs').style.display = 'block';
                            document.getElementById('stats').style.display = 'none',
                            JSONParse()}
                        else
                           { document.getElementById('joueurs').style.display = 'none';
                            document.getElementById('stats').style.display = 'block',
                            JSONParse()}
                            }


function JSONParse(){
    obj = JSON.parse(json);
    i =0;
    var buffer = "Liste des joueurs";
    while(obj.users[i])
    {
       buffer = buffer + "<br>" + obj.users[i].id + " " + obj.users[i].name + " " + obj.users[i].latitude + " " + obj.users[i].longitude;
        addMarker(obj.users[i].latitude, obj.users[i].latitude);
        i++;
    }
    document.getElementById("sec1").innerHTML = buffer;
}