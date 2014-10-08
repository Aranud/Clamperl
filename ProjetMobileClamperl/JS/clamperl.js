/**
*JavaScript File
*\author Cyril Py
*\param carte This is the map of the site.
*\param markers This is the array that contains all the markers.
*\param userData This is the user data JSON string parsed.
*\param statsData This is the statistics data JSON string parsed.
*/
var carte;
var markers = [];
var userData;
var statsData;

/**
*Function initialize()
*\brief Function that initializes the map with the imerir marker. 
*/
function initialize() {
  var latlng = new google.maps.LatLng(46.60611,1.87528);
  var options = {
        center: latlng,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true

    };
   
  carte = new google.maps.Map(document.getElementById("carte"),options); 

  var imerir = new google.maps.Marker({
        position: new google.maps.LatLng(42.6745549,2.8478487),
        icon: "./img/icone_imerir.png",
        map: carte
    });
  google.maps.event.addListener( imerir, "click", function( evenement ){carte.panTo(evenement.getPosition())});
  google.maps.event.addDomListener(document.getElementById("reset_map"), 'click', function () {carte.setZoom(5);carte.panTo(latlng);});
  google.maps.event.addDomListener(document.getElementById("toggle_map"), 'click', function () {toggle_map();});
  google.maps.event.addDomListener(document.getElementById("zoomin_map"), 'click', function () {setZoom("+");});
  google.maps.event.addDomListener(document.getElementById("zoomout_map"), 'click', function () {setZoom("-");});
  
  refresh();
}
/**
*Function setZoom(value)
*\brief Function that adjusts the zoom on the map depending on the parameter. When the parameter contains "+", the function zoom in the map, else it zoom out the map.
*\param value The paremeter can be "+" or "-".
*/
function setZoom (value){
  if (value == "+"){
    carte.setZoom(carte.getZoom() + 1);
  }else{
    carte.setZoom(carte.getZoom() - 1);
  }
}
/**
*Function refresh()
*\brief Function that deletes all marker on the map, and calls the function communicate.
*/
function  refresh(){
  deleteMarkers();
  communicate("user", users, "");
  communicate("hit", stats, "stats");
}
/**
*Function toggle_map()
*\brief Function that switches the type of the map between road and satellite.
*/
function toggle_map(){
                    if (document.getElementById("toggle_map").className == "btn btn-success")
                    {
                      document.getElementById("toggle_map").className = "btn";
                      document.getElementById("toggle_map0").className = "glyphicon glyphicon-road";
                      carte.setMapTypeId(google.maps.MapTypeId.HYBRID);
                    }else{
                      document.getElementById("toggle_map").className = "btn btn-success";
                      document.getElementById("toggle_map0").className = "glyphicon glyphicon-globe";
                      carte.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                    }
}
/**
*Function toggle_markers(user)
*\brief Function that hides or shows the marker corresponding to the user (passed as a parameter) on the map.
*\param user Id of the user whose function must hide or show the marker.
*/
function toggle_markers (user) {
                  if (document.getElementById("eye"+user).className == "glyphicon glyphicon-eye-open")
                  {
                    document.getElementById("eye"+user).className = "glyphicon glyphicon-eye-close";
                    document.getElementById("action_markers_"+user).className = "btn btn-danger";
                    showMarkers(user);
                  }else{
                    document.getElementById("eye"+user).className = "glyphicon glyphicon-eye-open";
                    document.getElementById("action_markers_"+user).className = "btn btn-primary";
                    clearMarkers(user);
                  }
}
/**
*Function reshape()
*\brief Function that resets the width of the global div depending on the width and height of the window.
*/
function reshape() {
              if (document.body)
              {
                var larg = (document.body.clientWidth);
                var haut = (document.body.clientHeight);
              }else{
                var larg = (window.innerWidth);
                var haut = (window.innerHeight);
              }
              
              if (larg <= 750)
              {
                  document.getElementById("global").style.width = "100%";
                }else{
                  document.getElementById("global").style.width = "750px";
                }}
/**
*Function fillBarChart()
*\brief Function that fills the array with the name and the distance of all the users, and return the array at the function that draws the chart.
*/
function fillBarChart (){
              var data = new google.visualization.DataTable();
              data.addColumn('string', 'Users');
              data.addColumn('number', 'Distance (km)');

              for ( var i = 0; i < userData.users.length; i++)
              {
                var row = [userData.users[i].fName, userData.users[i].distance];
                data.addRow(row);
              }
              return data;
}
/**
*Function fillColumnChart()
*\brief Function that fills the array passed as parameter, and return the array at the function that draws the chart.
*\param chart This is the name of the chart that the function must fill.
*/
function fillColumnChart (chart){
  var data;
              switch (chart)
              {
                case "user" : data = new google.visualization.DataTable();
                              data.addColumn('number', 'Game');
                              data.addColumn('number', 'Users');

                              for ( var i = 0; i < statsData.stats.length; i++)
                              {
                                var row = [statsData.stats[i].id_game,  statsData.stats[i].nbUser];
                                data.addRow(row);
                              };
                  break;
                case "hit" : data = new google.visualization.DataTable();
                              data.addColumn('number', 'Game');
                              data.addColumn('number', 'Hits');

                              for ( var i = 0; i < statsData.stats.length; i++)
                              {
                                var row = [statsData.stats[i].id_game,  statsData.stats[i].nbHit];
                                data.addRow(row);
                              };
                break;
                case "avg" : data = new google.visualization.DataTable();
                              data.addColumn('number', 'Game');
                              data.addColumn('number', 'Average Distance');

                              for ( var i = 0; i < statsData.stats.length; i++)
                              {
                                var row = [statsData.stats[i].id_game,  statsData.stats[i].avgDist];
                                data.addRow(row);
                              };
                break;
              }
              return data;
}
/**
*Function stats(data)
*\brief Function that receives a JSON string, calls the function that parses it, and calls the function that draws the chart.
*\param data JSON String.
*/
function stats (data) {
              statsData = JSONParse(data);
              
             drawUser();
             drawHit();
             drawAvg();
}
/**
*Function users(data)
*\brief Function that fills the array of the users with their name, their distance and the two buttons for hide/show the marker of the user and locate him on the map.
*\brief The function calls JSONParse() and receives an object that it will be used to fill the array of users.
*\param data JSON String.
*/
function users (data) {
              userData = JSONParse(data);
              $("#tabUser").empty();
              if (userData.users[0].id_usr == "null"){
                  $("#tabUser").append("<tr><td><b>No game running to display.</b></td></tr>" );
                  document.getElementById("listOfUsers").innerHTML = "List of connected players";
                  $('#udicg').fadeOut();
                  $('#stats_dist').fadeOut();
              }else{
                  $('#udicg').fadeIn();
                  $('#stats_dist').fadeIn();
                  for ( var i = 0; i < userData.users.length; i++)
                  {
                      $("#tabUser").append("<tr id=\""+userData.users[i].id_usr+"\"><td>" + userData.users[i].fName + " " + userData.users[i].lName + "</td><td>" + userData.users[i].distance + '</td><td><button id="action_markers_'+userData.users[i].id_usr+'" class="btn btn-primary" title="Show/Hide the user on map" style="height:25px; width:29px;"><i id="eye'+userData.users[i].id_usr+'" class="glyphicon glyphicon-eye-open"></i></button><button id="locate'+userData.users[i].id_usr+'" class="btn btn-info" title="Show on map"style="height:25px; width:29px;"><i class="glyphicon glyphicon-screenshot"></i></button></td></tr>' );
                      addMarker(userData.users[i].latitude, userData.users[i].longitude, userData.users[i].fName + " " + userData.users[i].lName, userData.users[i].id_usr);
                  } 
                  document.getElementById("listOfUsers").innerHTML = "List of connected players (" + userData.users.length + ")";
                 drawChart();
               }
}
/**
*Function communicate(keyword, method)
*\brief Function that sends a request to the server in AJAX. The request is an HTTPRequest in GET. The string answered by the server is send to the method passed as a parameter.
*\brief The URL is build like: "http://ip:port/golfTourism/" + the keyword passed as a parameter and the variable is id and its value is null.
*\param keyword This is the keyword that is used to request the server about users or others.
*\param method This is the function that will be called 
*\param value This is the value of the id.
*/
 function communicate (keyword, method, value){
                      $.ajax({
                      type: "POST",
                      url: "http://172.31.1.92:8080/golfTourism/"+ keyword,
                      data: { id: value}
                      })
                      .done(function( msg ) {method(msg);});
}
/**
*Function addMarker (latitude, longitude, info, iduser)
*\brief Function that add a marker on the map and creates the listeners on the marker.
*\param latitude This is the latitude of the marker that the function must add.
*\param longitude This is the longitude of the marker that the function must add.
*\param info This is the name of the user that will be displayed on the marker when the marker will be hovered.
*\param iduser This is the id of the marker, that is the same as the user.
*/
function addMarker (latitude, longitude, info, iduser) {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(latitude,longitude),
                        map: carte,
                        title:info,
                        visible: false
                    });
                      marker.setValues({id: iduser});
                        google.maps.event.addListener(marker, 'click', function() {carte.setZoom(12);carte.panTo(marker.getPosition());});
                        google.maps.event.addDomListener(document.getElementById("locate"+iduser), 'click', function () {carte.setZoom(12);marker.setAnimation(google.maps.Animation.DROP);carte.panTo(marker.getPosition()); showMarkers(iduser);document.getElementById("eye"+iduser).className = "glyphicon glyphicon-eye-close";document.getElementById("action_markers_"+iduser).className = "btn btn-danger";});
                        google.maps.event.addDomListener(document.getElementById(iduser), 'mouseover', function () {marker.setAnimation(google.maps.Animation.BOUNCE)});
                        google.maps.event.addDomListener(document.getElementById(iduser), 'mouseout', function () {marker.setAnimation(null)});
                        google.maps.event.addDomListener(document.getElementById("action_markers_"+ iduser), 'click', function () {toggle_markers(iduser)});
                        
                        markers.push(marker);
                }
/**
*Function masquer(section)
*\brief Function that hide or display the section passed as parameter.
*\param section This is the section that will be hidden or shown.
*/
function masquer(section) { 
                $('#'+section).slideToggle('slow');

                if ($("#"+section+"0").attr("class") == "glyphicon glyphicon-chevron-down")
                  {
                    $("#"+section+"0").removeClass('glyphicon glyphicon-chevron-down');
                    $("#"+section+"0").addClass('glyphicon glyphicon-chevron-right');
                  }else{
                    $("#"+section+"0").removeClass('glyphicon glyphicon-chevron-right');
                    $("#"+section+"0").addClass('glyphicon glyphicon-chevron-down');
                  }
}                     
/**
*Function setActive(onglet)
*\brief Function that allow to navigate in the site by showing the page passed as parameter and hiding all the other pages.
*\param onglet This is the page that will be shown.
*/
function setActive(onglet) { 
                  if (onglet == 'tab1') {
                      $('#stats').fadeOut(function(){$('#about').fadeOut(function(){ $('#joueurs').fadeIn(); });});
                      
                  }else if (onglet == 'tab2'){ 
                      $('#joueurs').fadeOut(function(){  $('#about').fadeOut(function(){ $('#stats').fadeIn(refresh());})});
                     
                  }else{
                      $('#joueurs').fadeOut(function(){ $('#stats').fadeOut(function(){ $('#about').fadeIn();});});
                      
                  }
}
/**
*Function JSONParse(json)
*\brief Function that parse the JSON string and return the result.
*\param json This is the JSON string that will be parsed.
*/
function JSONParse(json){
                  if (json != ""){
                    jsonobj = JSON.parse(json);
                    return jsonobj;
                  }else{alert('No JSON to parse !');}
}
/**
*Function clearMarkers(user)
*\brief Function that hides the marker from the map, but keeps them in the array.
*\param user This is the id of the marker that will be hidden on the map.
*/
function clearMarkers(user) {
                  for (var i = 0; i < markers.length; i++) {
                    if (markers[i].get("id") == user )
                        {markers[i].setVisible(false);}
                  }
}
/**
*Function showMarkers(user)
*\brief Function that shows the marker on the map.
*\param user This is the id of the marker that will be shown on the map.
*/
function showMarkers(user) {
                   for (var i = 0; i < markers.length; i++) {
                      console.log(markers[i].get("id"));
                    if (markers[i].get("id") == user )
                        {
                          markers[i].setVisible(true);}
                  }
}
/**
*Function deleteMarkers()
*\brief Function that removes all the markers from the map and empty the array of markers.
*/
function deleteMarkers() {
                  for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                  }
                  markers = [];
}