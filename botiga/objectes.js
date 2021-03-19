var Consolas = [];
function Consola (nom, gpu, cpu, ram, capacitat, preu, estoc){
    this.nom = nom;
    this.gpu = gpu;
    this.cpu = cpu;
    this.ram = ram;
    this.capacitat = capacitat;
    this.preu = preu;
    this.estoc = estoc;
    this.descompte = function (desc){ //funció anònima que rep el descompte a aplicar per paràmetre i retorna el preu amb el descompte aplicat
        this.preu = this.preu-(this.preu*desc/100);//aplico el descompte al preu de al consola, fent la formula sobre el preu original y desant-lo en la mateixa variable
        return this.preu;//mostro el preu amb el descompte aplciat 
    }


    
}

//añade una consola al array Consolas
function afegirConsola(){
	var consola= new Consola(document.forms["form"]["nom"].value, document.forms["form"]["gpu"].value, document.forms["form"]["cpu"].value, document.forms["form"]["ram"].value, document.forms["form"]["capacitat"].value, document.forms["form"]["preu"].value, document.forms["form"]["estoc"].value);
	console.log(consola);
  Consolas.push(consola);
  console.log(Consolas[0].nom);
  document.getElementsByTagName("p")[0].append("Consola afegida");
  document.getElementsByTagName("p")[0].append(document.createElement("br"));
}

//Mostra les dades dels atributs de les consoles.
function descripcio(){
    for (var i=0;i<Consolas.length;i++){
        document.getElementsByTagName("p")[0].append(document.createElement("br"));
        document.getElementsByTagName("p")[0].append("Consola "+(i+1));
        document.getElementsByTagName("p")[0].append(document.createElement("br"));
        document.getElementsByTagName("p")[0].append("El nom de la consola es: "+Consolas[i].nom);
        document.getElementsByTagName("p")[0].append(document.createElement("br"));
        document.getElementsByTagName("p")[0].append("La gpu de la consola es: "+Consolas[i].gpu);
        document.getElementsByTagName("p")[0].append(document.createElement("br"));
        document.getElementsByTagName("p")[0].append("La cpu de la consola es: "+Consolas[i].cpu);
        document.getElementsByTagName("p")[0].append(document.createElement("br"));
        document.getElementsByTagName("p")[0].append("La ram de la consola es: "+Consolas[i].ram);
        document.getElementsByTagName("p")[0].append(document.createElement("br"));
        document.getElementsByTagName("p")[0].append("La capacitat de SSD de la consola es: "+Consolas[i].capacitat);
        document.getElementsByTagName("p")[0].append(document.createElement("br"));
        document.getElementsByTagName("p")[0].append("El preu de la consola es: "+Consolas[i].preu);
        document.getElementsByTagName("p")[0].append(document.createElement("br"));
        document.getElementsByTagName("p")[0].append("Tenim "+Consolas[i].estoc+ " consolas en stock");
        document.getElementsByTagName("p")[0].append(document.createElement("br"));
    }
}

//Métode per calcular el descompte del preu d'una consola en concret, escollida per l'usuari

function aplicarDesc(){
    var id=prompt("A quina consola li vols fer un descompte");
    var desc=prompt("Indica el descompte %");
    console.log(Consolas[id].descompte(desc));//li arriba una consola y crida al atribut descompte y li passa per parametre el descompte a aplicar
    document.getElementsByTagName("p")[0].append("Precio de la consola "+id+" con descuento: "+Consolas[id].descompte(desc));
}

function grafica(){
        console.log(Consolas[0])
      var alturaBarra=0;
      var dades = [];
      for (var j=0;j<Consolas.length;j++){
           dades.push(Consolas[j].estoc);
      }
      console.log(dades);
      var dades2 = dades;
      var margen=40; 
      var canvas = document.getElementById('tutorial');
      if (canvas.getContext){
        var ctx = canvas.getContext('2d');          
      }

      var colors=["lightgreen","red","green","magenta", "blue", "yellow"];
      function Grafica (canvas ,context ,dades, titol, colors){
        this.canvas = canvas;
        this.context = context;
        this.dades = dades;
        this.titol = titol;
        this.colors = colors;      
      }

      var grafica=new Grafica(canvas,ctx,dades,'prova',colors);

      grafica.calcular=function (){
          var distUtil=500 -(margen*2);
console.log(distUtil);
          var ampleBarra=distUtil/dades.length;

console.log(dades);

        function getMaxOfArray(numArray) {
            return Math.max.apply(null, numArray);
        }
          var max=getMaxOfArray(dades);
console.log("Maxim "+max);
          for (var i=0;i<dades.length;i++){
            alturaBarra=distUtil*(dades[i]/max);
console.log("Altura barra"+alturaBarra);
            var posX=margen+(i*ampleBarra);
            var posY=500-margen-alturaBarra;  
            dibujar(this.context,posX,posY,ampleBarra,alturaBarra,colors[i]);
            //dibujar(this.context,20,20,40,300);
            alturaBarra=0;
          }
        };
        function dibujar(context, posicioX, posicioY, amplada, alcada, color){
          ctx.fillStyle=color;
          context.fillRect(posicioX,posicioY,amplada,alcada);
        };

        function llegenda() {
        var llegenda = document.getElementById("llegenda");
        var ul = document.createElement("ul");
        llegenda.append(ul);
        for (var i = 0; i < dades.length; i++) {
          var li = document.createElement("li");
          li.style.borderLeft = "20px solid " + colors[i];
          console.log(colors[i]);
          li.style.listStyle ="none";
          li.textContent = dades[i] + " "+Consolas[i].nom;
          ul.append(li);
        }
      }
        grafica.calcular();
        llegenda();
}
