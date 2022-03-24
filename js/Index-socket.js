            //var socket = io.connect("ws://127.0.0.1:2021");
			var socket = io.connect('https://gusphpsocketio-b.herokuapp.com', { 'forceNew': true });
			//var socket = io.connect('https://gusphpsocketio-b.herokuapp.com:2021');

            $('.message').on('change', function(){
                socket.emit('send message', $(this).val()); //mando al backend
                $(this).val('');
            });

            socket.on('new message', function(data){ //recibo del backend
                $('#chat-messages').append('<p>' + data +'</p>');
            });