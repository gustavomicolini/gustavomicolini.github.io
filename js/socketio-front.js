//----------------------------------
//----GusMonitor-Node/Frontend--------
//----------------------------------
//En el navegador http://localhost/GusMonitor-Node/frontend/index.html

//Inicio conexion al servidor mediante socket.io
//var socket = io(); //cuando cliente en el mismo Node.js
//var socket = io('192.168.100.152:3000'); //En xampp
var socket = io('https://gusmonitor-back.herokuapp.com'); //En GitHub


//en conectar
socket.on('connect',function(){
    console.log('Gustavo intentando conectar con socket.io');
    });
//escuchando solo en conectar
socket.on('ioInicio',function(mensaje){
    console.log('respuesta Backend:', mensaje);
    //const obj = JSON.parse(text);
    const myJSON = JSON.stringify(mensaje);
    document.getElementById("estado").innerHTML = myJSON;
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
socket.on('ioTraider', function(dato){
	document.getElementById("traider").innerHTML = dato;
});
socket.on('ioCompra', function(dato){
	document.getElementById("compra").innerHTML = dato;
});
socket.on('ioVenta', function(dato){
	document.getElementById("venta").innerHTML = dato;
});
socket.on('ioTime', function(dato){
	document.getElementById("time").innerHTML = dato;
});


//recibiendo de API cada x segundos
socket.on('ioCompra2', function(dato){
	document.getElementById("compra2").innerHTML = dato;
});
socket.on('ioVenta2', function(dato){
	document.getElementById("venta2").innerHTML = dato;
});
socket.on('ioTime2', function(dato){
	document.getElementById("time2").innerHTML = dato;
});