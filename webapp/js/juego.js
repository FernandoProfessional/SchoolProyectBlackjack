var baraja = [];
var valorbaraja = [];
nuevaBaraja();
//Trevoles C --> Clover, Corazones H --> Heart. Picas S --> Spider, Rombos D -->Diamon
//As --> A, Rey --> K, Dama --> Q, Jota --> J

var datosCarta;
var puntuacionmaquina;

function nuevaBaraja(){
    baraja = [];
        
    for(let i = 2; i<=10;i++)
    {
        for(let o = 1; o<=4;o++)
        {
            baraja.push(i+getletratipo(o));
            valorbaraja.push(i); 
        }
    }
    for(let i = 1; i<=4;i++)
    {
        for(let o = 1; o<=4;o++)
        {
            if(i==4){
            baraja.push(getValortipo(i)+getletratipo(o));
            valorbaraja.push(11); }
            else{
            baraja.push(getValortipo(i)+getletratipo(o));
            valorbaraja.push(10); }
        }
    }
}
function retirarcarta(){
    let numeroazar =getRandomInt(0, baraja.length);
    let cartabaraja=baraja[numeroazar];
    let valorcartabaraja=valorbaraja[numeroazar];
    let arraytemporal1 = baraja.slice(0,numeroazar);
    let arraytemporal2 = baraja.slice(numeroazar+1,baraja.length+1);
    baraja=arraytemporal1.concat(arraytemporal2);
    arraytemporal1 = valorbaraja.slice(0,numeroazar);
    arraytemporal2 = valorbaraja.slice(numeroazar+1,baraja.length+1);
    valorbaraja=arraytemporal1.concat(arraytemporal2);
    imprimirPorConsola();//Imprime la baraja de cartas restante por consola
    //alert(cartabaraja + " tiene un valor de " + valorcartabaraja);//comunica al usuario que carta le a tocado
    let datosDevolver = [cartabaraja, valorcartabaraja];
    return datosDevolver;//devuelve que carta a tocado en caso de que se use este metodo
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
function imprimirPorConsola(){
    for (let index = 0; index < baraja.length; index++) {
        console.log(baraja[index] + " tiene valor de " + valorbaraja[index]);
  }
  console.log("------------------------------------------");
}
function getletratipo(numero){
    switch (numero) {
        case 1: return "C";case 2: return "H";case 3: return "S";case 4: return "D";
        default: break;
    }
}
function getValortipo(numero){
    switch (numero) {
        case 1: return "J";case 2: return "Q";case 3: return "K";case 4: return "A";
        default:
            break;
    }
}
function pedirCarta(){
    let datosCarta = retirarcarta();
    document.getElementById('jugador-cartas').innerHTML += '<img class="carta" src="webapp/cartas/'+datosCarta[0]+'.png">';
    let puntuacionjugador =  parseInt(document.getElementById('puntuacionJugadors').innerHTML);
    puntuacionjugador += datosCarta[1];
    document.getElementById('puntuacionJugadors').innerHTML=puntuacionjugador;

}

function imprimirCartaMaquina(){
    document.getElementById('computadora-cartas').innerHTML += '<img class="carta" src="webapp/cartas/'+datosCarta[0]+'.png">';
    document.getElementById('puntuacionmaquina').innerHTML=puntuacionmaquina;

}

function detener(){
    if(comprobarjugadorderrotapormuchospuntos()){
        alert("Has perdido, mas puntos que 21");
      
    }
    else{
        var puntuacionusuario;
        var puntuacionmaquina2;
        var repeticion = false;
        var repeticion2 = false;
        var myVar = setInterval(pedirCartaMaquina, 500);
       

       
    }
    function pedirCartaMaquina(){
        if(repeticion==false && repeticion2 ==false){

        if(repeticion==false){
        datosCarta = retirarcarta();
        document.getElementById('computadora-cartas').innerHTML += '<img class="carta" src="webapp/cartas/'+datosCarta[0]+'.png">';
        puntuacionmaquina =  parseInt(document.getElementById('puntuacionmaquina').innerHTML);
        puntuacionmaquina += datosCarta[1];
        document.getElementById('puntuacionmaquina').innerHTML=puntuacionmaquina;
        
      
       puntuacionusuario =  parseInt(document.getElementById('puntuacionJugadors').innerHTML);
       puntuacionmaquina2 =  parseInt(document.getElementById('puntuacionmaquina').innerHTML);
    }
       if(puntuacionmaquina2 >21 || puntuacionmaquina2>puntuacionusuario){
        if(puntuacionmaquina2 >21){
            alert("felicidades, has ganado");
        }
        else if(puntuacionmaquina2 <puntuacionusuario){
            alert("felicidades, has ganado");
        }
        else if(puntuacionmaquina2 >puntuacionusuario){
            alert("has perdido");
        }
            repeticion=true;
            document.getElementById('basura').innerHTML = '';
            if(repeticion==true)repeticion2=true;
    }
    }
    else{
        document.getElementById('basura').innerHTML = '';
        clearInterval(myVar);
    }
        
        
    
    }
}

function comprobarjugadorderrotapormuchospuntos(){
    let puntuacionjugador =  parseInt(document.getElementById('puntuacionJugadors').innerHTML);
    if(puntuacionjugador>21) return true;
    else return false;
}
function nuevoJuego(){
    nuevaBaraja();
    document.getElementById('puntuacionJugadors').innerHTML=0;
    document.getElementById('jugador-cartas').innerHTML = '';
    document.getElementById('puntuacionmaquina').innerHTML=0;
    document.getElementById('computadora-cartas').innerHTML = '';

}