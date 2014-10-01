<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">
    <head>
        <title>Web Site Clamperl</title>

        <link rel="stylesheet" type="text/css" href="CSS/base.css" media="all" />
        <link rel="stylesheet" type="text/css" href="CSS/modele02.css" media="screen" />

        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <!-- Elément Google Maps indiquant que la carte doit être affiché en plein écran et
        qu'elle ne peut pas être redimensionnée par l'utilisateur -->
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <!-- Inclusion de l'API Google MAPS -->
        <!-- Le paramètre "sensor" indique si cette application utilise détecteur pour déterminer la position de l'utilisateur -->
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
        <script type="text/javascript" src="JS/clamperl.js"></script>
    </head>
    <body onload="initialiser()" >
       
        <div id="global" >
            <div id="entete"><h1>Clamperl</h1><h2>Projet Int&eacute;gration Architectures et Plates-formes</h2></div>
            <div id="navigation">
                <ul >
                    <li >
                       <span  id="tab1"> <a href="#" onclick="setActive('tab1')" >Joueurs</a></span>
                    </li>
                    <li  id="tab2">
                        <span   id="tab1"> <a href="#"onclick="setActive('tab2')">Statistiques</a></span>
                    </li>
                </ul>
            </div>
            <div id="contenu"> 
                <div id="joueurs">
                    <h2 onclick="masquer('sec1')"><a>Liste des joueurs connect&eacute;s</a></h2>
                    <section id="sec1" style="display:block">
                       
                    </section>


                    <h2 onclick="masquer('sec2')"><a>Carte des joueurs connect&eacute;s</a></h2>
                    <section id="sec2" >
                        <div id="carte" style="width:100%; height:50%"></div>
                    </section>
                     
              
                </div>
                <div id="stats" style="display:none"></div>
            </div>
            <div id="pied">2014 - Promotion Maisonnier - <a href="http://www.imerir.com" target="_blank">IMERIR<img src="img/icone_imerir.png"></a> - <a href="http://www.perpignan.cci.fr" target="_blank">CCI Pyr&eacute;n&eacute;es-Orientales<img src="img/logo_cci.png"></a></div>
        </div>
  <!--       <script type="text/javascript">
            var xhr_object = null; 
                
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
        </script> -->
    </body>
</html>