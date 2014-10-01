var carte;
var userList = '{"users":[{"id":0,"name":"Madden Wade","location":"Orovada","latitude":-18.386962,"longitude":30.756966},{"id":1,"name":"Valdez Hebert","location":"Ballico","latitude":-51.079592,"longitude":42.332922},{"id":2,"name":"Stuart Branch","location":"Witmer","latitude":-84.005191,"longitude":-123.940054}]}';
var hitList= '{"hits":[{"id_Hit":0,"id_Usr":0,"id_game":1,"latitude_start":-78.162995,"longitude_start":87.22808,"latitude_final":41.932752,"longitude_final":49.446203,"km_ran":812},{"id_Hit":1,"id_Usr":2,"id_game":1,"latitude_start":87.913481,"longitude_start":-47.419762,"latitude_final":-82.498455,"longitude_final":112.999113,"km_ran":270},{"id_Hit":2,"id_Usr":3,"id_game":1,"latitude_start":-59.859328,"longitude_start":50.468007,"latitude_final":33.826979,"longitude_final":-172.677524,"km_ran":610}]}';
var gameList = '{"hits":[{"id_game":0,"status":0},{"id_game":1,"status":0},{"id_game":2,"status":1}]}';

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
        JSONParse(userList);---------------------------------------------------------------------------------------------------------------------------------------
      //  communicate();
}
/*
 function communicate (){
                var xhr_object = null; 
                alert(xhr_object);
               if(window.XMLHttpRequest) // Firefox 
                  xhr_object = new XMLHttpRequest(); 
               else if(window.ActiveXObject) // Internet Explorer 
                  xhr_object = new ActiveXObject("Microsoft.XMLHTTP"); 
               else { // XMLHttpRequest non supporté par le navigateur 
                  alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest..."); 
                 return; 
              } 
               
              xhr_object.open("GET", "172.31.1.20:1234", true); 
               
              xhr_object.onreadystatechange = function() { 
                 if(this.readyState == 4) alert(this.responseText); 
              } 
               
             xhr_object.send(null); 
             alert(xhr_object);
            }
*/

function addMarker (latitude, longitude, color) {
   
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude,longitude),
        icon:"./img/"+color+".png",
        map: carte
    });}
function masquer(section) { if (document.getElementById(section).style.display == 'none') 
                        document.getElementById(section).style.display = 'block';
                        else
                            document.getElementById(section).style.display = 'none'}
function setActive(onglet) { if (onglet == 'tab1') {
                            document.getElementById('joueurs').style.display = 'block';
                            document.getElementById('stats').style.display = 'none'
                            }
                        else
                           { document.getElementById('joueurs').style.display = 'none';
                            document.getElementById('stats').style.display = 'block'
                            }
                            JSONParse()
                        }

/*
function JSONParse(json){
    obj = JSON.parse(json);
    i =0;
    var buffer = "Liste des joueurs";
    while(obj.users[i])
    {
       buffer = buffer + "<br>" + obj.users[i].id + " " + obj.users[i].name + " " + obj.users[i].latitude + " " + obj.users[i].longitude;
        addMarker(obj.users[i].latitude, obj.users[i].latitude, i);
        i++;
    }
    document.getElementById("sec1").innerHTML = buffer;
    return obj;
}*/