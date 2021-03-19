var jocs = new Array();
jocs[0] = new Array("Assasin's Creed Valhalla","Ubisoft Montreal","Acció",150,59.90);
jocs[1] = new Array("Age of Mythology","Ensemble Studios","Estrategia",12,5.77);
jocs[2] = new Array("Battlefield 1","DICE","FPS",75,5.99);

var ventas = [0, 0, 0];

function mostrarJocs(){
	for (i=0;i<jocs.length;i++){
		document.getElementsByTagName("p")[0].append("El producte nº " + (i + 1) + " és " + jocs[i][0] + " i tenim " + jocs[i][3] + " unitats. ");
		document.getElementsByTagName("p")[0].append(document.createElement("br"));
	}
}
function afegirJoc(){
	var joc=[];
	var nom=prompt("Digues el nom del joc");
	var creador=prompt("Digues el creador del joc");
	var tipus=prompt("Digues el tipus de joc");
	var stock=prompt("Digues el stock de jocs");
	var preu=prompt("Digues el preu del joc");
	joc.push(nom,creador,tipus,stock,preu);
	jocs.splice(jocs.length, 0, joc);
	ventas.push(0)
	mostrarJocs();
}

//Inrementa el stock de el juego que se le indique
function incrementarStock(){
	var joc=prompt("Digues a quin joc (numero) vols afegirli stock")-1;
	var afegir=prompt("Digues quantes unitats vols demanar al proveidor");
	afegir = parseInt(afegir);
	jocs[joc][3]+=afegir;//me posiciono en el juego que ha indicado el usuario y en la posición del 
	mostrarJocs();
}

function eliminarJoc(){
	mostrarJocs();//Primero muestro los juegos y el numero de cada uno para saber cual se está marcando
	var joc=prompt("Digues quin joc (numero) vols eliminar")-1;
	jocs.splice(joc,1);
	mostrarJocs();
}

//5. Hem de poder consultar en detall la informació de tots els productes ja que al llistat sols veiem una part. 
//Mostra aquesta informació de forma ordenada en una nova finestra en format taula.

function mostrarEnDetall(){

	ventana = window.open("", "ventana", "width=500, height=200");
	ventana.document.write("<table border=1><tr><th>Nom</th><th>Creador</th><th>Tipus</th><th>Stock</th><th>Preu</th></tr>");
	for (var i=0;i<jocs.length;i++){
		ventana.document.write("<tr><td>"+jocs[i][0]+"</td><td>"+jocs[i][1]+"</td><td>"+jocs[i][2]+"</td><td>"+jocs[i][3]+"</td><td>"+jocs[i][4]+"</td></tr>");
	}
	ventana.document.write("</table>");
}

//6 array paralela donde el contador del array de contadores se corresponda en posicion con la array de juegos
function comprarProducte(){
	mostrarJocs();//Primero muestro los juegos y el numero de cada uno para saber cual se está marcando
	var joc=prompt("Digues quin joc (numero) vols comprar")-1;
	jocs[joc][3]+=-1;
	ventas[joc]+=+1;
	document.getElementsByTagName("p")[0].append("S'han venut "+ventas[joc]+" copies de "+jocs[joc][0]);
	document.getElementsByTagName("p")[0].append(document.createElement("br"));
}

//7. S'ha de poder ordenar el llistat de videojocs segons la quantitat de estoc disponible. A més a més per no crear confusió als comprador quan un producte 
//es quedi sense estoc no es mostrarà al llistat. El botiguer ha de poder veure quins productes estan esgotats per per poder demanar mes exemplars als proveïdors. 
function ordenarJocs(){
	for(var i = 0; i < jocs.length; i++) {
			for(var j = i; j < jocs.length; j++){
				if(jocs[i][4] > jocs[j][4]){
					var variableauxiliar = jocs[i];
					jocs[i]=jocs[j];
					jocs[j]=variableauxiliar;
				}
			}
	}
	console.log(mostrarJocs());
}

///////////////////////////////////////////////////////////////////////////////////APARTADO CLIENTES////////////////////////////////////////////////////////////////////////////////////

//Cliente 1
function mostrarJocsC(){
	for (i=0;i<jocs.length;i++){
		document.getElementsByTagName("p")[1].append("El producte nº " + (i + 1) + " és " + jocs[i][0] + " i tenim " + jocs[i][3] + " unitats. ");
		document.getElementsByTagName("p")[1].append(document.createElement("br"));
	}
}

//Cliente 3
function clientComprar(){
	mostrarJocsC();
	var joc=prompt("Digues quin joc (numero) vols comprar")-1;
	var nomjoc=jocs[joc][0];
	var confirmacio=confirm("Segur que vols comprar el joc "+nomjoc+" ?");
	if (confirmacio==true){
		jocs[joc][3]+=-1;
	ventas[joc]+=+1;
	document.getElementsByTagName("p")[1].append("S'han venut "+ventas[joc]+" copies de "+jocs[joc][0]);
	document.getElementsByTagName("p")[1].append(document.createElement("br"));
	}
}

function ordenarJocsC(){
	for(var i = 0; i < jocs.length; i++) {
			for(var j = i; j < jocs.length; j++){
				if(jocs[i][4] > jocs[j][4]){
					var variableauxiliar = jocs[i];
					jocs[i]=jocs[j];
					jocs[j]=variableauxiliar;
				}
			}
	}
	for (i=0;i<jocs.length;i++){
		if(jocs[i][3]>0){
			document.getElementsByTagName("p")[1].append("El producte nº " + (i + 1) + " és " + jocs[i][0] + " i tenim " + jocs[i][3] + " unitats.");
			document.getElementsByTagName("p")[1].append(document.createElement("br"));
		}
		
	}
}


