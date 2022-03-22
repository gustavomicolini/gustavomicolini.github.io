<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">        
    </head>
    <body>
        <div id="chat-messages" style="overflow-y: scroll; height: 100px; "></div>        
        <input type="text" class="message">
				<div>
					<span>BITSTAMP(USD):</span>
					<span id="bitstamp">0</span>
				</div>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>    
    <script src="socket.io-client/socket.io.js"></script>  
    <script>
            var socket = io.connect("ws://127.0.0.1:2021");

            $('.message').on('change', function(){
                socket.emit('send message', $(this).val()); //mando al backend
                $(this).val('');
            });

            socket.on('new message', function(data){ //recibo del backend
                $('#chat-messages').append('<p>' + data +'</p>');
            });
    </script>
</html>