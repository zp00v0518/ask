const ws  = new WebSocket("ws://localhost:3001");
ws.addEventListener("message", handlerMessage);
 
  
function handlerMessage(event){ 
	let message = JSON.parse(event.data);
	if (message.type === "change"){
		location.reload();
	}

}