//Funciones para los click de botones
function cargoDato() {
	pidoDato();
	document.getElementById("demo").innerHTML = "Valor bitstamp actualizado!!!!";
	document.getElementById("bitstamp").innerHTML = "Valor=xxxx!!!!";
}
function reiniDato() {
	document.getElementById("demo").innerHTML = "Click the button para actualizar valor de bitstamp.";
	document.getElementById("bitstamp").innerHTML = "0";
	document.getElementById("demo4").innerHTML = 'sin datos';
	document.getElementById("demo5").innerHTML = 'sin dato';
}
function pidoDato() {
	let textoenvio = 'Hola Heroku, mandame dato';
	
	//emit = cliente envia informacion solo al servidor, otro cliente no lo recibe
	socket.emit('send message',textoenvio , function(respuesta) { //respuesta del callback	
		//Imprimo texto enviado
		console.log('usuario, ', textoenvio);
		document.getElementById("demo4").innerHTML = textoenvio;
		//Imprimo respuesta
		console.log('ServerIO:', respuesta);
		//const myJSON = JSON.stringify(respuesta);
		document.getElementById("demo5").innerHTML = respuesta;
	});
}



//Inicio conexion al servidor mediante socket.io
//var socket = io(); //cuando cliente en el mismo Node.js
//var socket = io('https://gussocketio-backend2.herokuapp.com'); //cliente en otro servidor
var socket = io.connect('https://gusphpsocketio-b.herokuapp.com', { 'forceNew': true });

socket.on('connect',function(){
    console.log('Nuevo clienteWEB, frontend pide CONECTARSE al socket.io') 
	document.getElementById("demo3").innerHTML = 'Nuevo clienteWEB, frontend pide CONECTARSE al socket.io';
});

socket.on('disconnect',function(){
    console.log('clienteWEB, frontend pide DES-CONECTARSE del socket.io') 
	document.getElementById("demo3").innerHTML = 'clienteWEB, frontend pide DES-CONECTARSE del socket.io';
});

//escuchar al servidorIO
socket.on('enviarMensaje',function(mensaje){
	//Imprimo respuesta
    console.log('ServerIO:', mensaje);
	const myJSON = JSON.stringify(mensaje);
	document.getElementById("demo5").innerHTML = myJSON;
});	


//recibiendo un numero random cada dos segundos
socket.on('server/random', function(num){
    //console.log(num)
	document.getElementById("bitstamp").innerHTML = num;
})
//enviando un numero random cada dos segundos
//setInterval(function(){
//    socket.emit('client/random', Math.random())
//}, 2000)
