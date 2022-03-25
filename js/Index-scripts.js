//PHPsocket.io en server Heroku

//Inicio conexion al servidor mediante socket.io
//var socket = io(); //cuando cliente en el mismo Node.js
var socket = io.connect('https://gusphpsocketio-b.herokuapp.com', { 'forceNew': true });

//----------------------------------------------------------------
/*$ io es el objeto SocketIO. $ socket es la conexión del cliente
 $ datos pueden ser números y cadenas, o una matriz. Cuando $ data es una matriz, el cliente la convertirá automáticamente en un objeto javascript.
 De la misma manera, si el cliente envía un objeto javascript a un evento emitido por el servidor, se convertirá automáticamente a una matriz php cuando el servidor lo reciba.*/

socket.emit('send message', 'ServerPHP: Cliente conectado al socket.io'); //mando al backend al inicio

$('.message').on('change', function(){ //Input texto
	socket.emit('send message', $(this).val()); //mando al backend
	$(this).val('');
});

socket.on('new message', function(data){ //recibo del backend
	$('#chat-messages').append('<p>' + data +'</p>');
	document.getElementById("demo5").innerHTML = data;
});
//----------------------------------------------------------------



//escuchar al servidorIO
socket.on('enviarMensaje',function(mensaje){
	//Imprimo respuesta
    console.log('ServerIO:', mensaje);
	const myJSON = JSON.stringify(mensaje);
	document.getElementById("demo5").innerHTML = myJSON;
});	


//recibiendo un numero random cada dos segundos
socket.on('server/random', function(num){
    //console.log(num);
	document.getElementById("bitstamp").innerHTML = num;
})
//enviando un numero random cada dos segundos
//setInterval(function(){
//    socket.emit('client/random', Math.random())
//}, 2000)