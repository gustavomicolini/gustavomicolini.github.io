//----------------------------------
//----GusMonitor-Node/Frontend--------
//----------------------------------
//En el navegador http://localhost/GusMonitor-Node/frontend/index.html

//Inicio conexion al servidor mediante socket.io
//var socket = io(); //cuando cliente en el mismo Node.js
//var socket = io('192.168.100.152:3000'); //En xampp
var socket = io('https://gusmonitor-backend.herokuapp.com'); //En GitHub


//en conectar
socket.on('connect',function(){
    console.log('Gustavo intentando conectar con socket.io');
    });
//escuchando solo en conectar
socket.on('ioInicio',function(mensaje){
    console.log('respuesta Backend:', mensaje);
	//-----------------------------------------------------------------------------------
    //const inobj = JSON.parse(mensaje); //for converting JSON strings into JavaScript objects
    //const myJSON = JSON.stringify(mensaje); //for converting an object into a JSON string
	//-----------------------------------------------------------------------------------
	//Ya viene en formato JSON entonces no convierto nada
    document.getElementById("estado").innerHTML = ": Conectado. "+mensaje.mensaje;

});	
//en deconectar
socket.on('disconnect',function(){
    console.log('Gustavo desconectando con socket.io');
    document.getElementById("estado").innerHTML = 'DESCONECTADO';
    });


//-----------cuadro de texto--------------------------------------
$('.message').on('change', function(){ //Input texto
	socket.emit('ioMensaje', $(this).val()); //mando al backend
	$(this).val('');
});
socket.on('ioMensaje', function(data){ //recibo del backend
	$('#chat-messages').append('<p>' + data +'</p>');
});
//----------------------------------------------------------------


//recibiendo un numero random cada x segundos
socket.on('ioNum', function(num){
	document.getElementById("numero").innerHTML = num;
});


//recibiendo de API cada x segundos
socket.on('ioData', function(dato){
	document.getElementById("trader").innerHTML = dato.trader1;
});
socket.on('ioData', function(dato){
	document.getElementById("compra").innerHTML = dato.compra1;
});
socket.on('ioData', function(dato){
	document.getElementById("venta").innerHTML = dato.venta1;
});
socket.on('ioData', function(dato){
	document.getElementById("time").innerHTML = dato.time1;
});


//recibiendo de API cada x segundos
socket.on('ioData', function(dato){
	document.getElementById("compra2").innerHTML = dato.compra2;
});
socket.on('ioData', function(dato){
	document.getElementById("venta2").innerHTML = dato.venta2;
});
socket.on('ioData', function(dato){
	document.getElementById("time2").innerHTML = dato.time2;
});