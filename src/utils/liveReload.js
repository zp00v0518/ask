const portWs = 3001;
const ws  = new WebSocket(`ws://${location.hostname}:${portWs}`);
ws.addEventListener("message", handlerMessage);
ws.addEventListener('open', ()=>{
	console.log(`Connect to websocket: ws://${location.hostname}:${portWs} `)
});
ws.addEventListener('error', (e)=>{
	console.log(e)
})
 
function handlerMessage(event){ 
	let message = JSON.parse(event.data);
	console.log(message)
	if (message.type === "change"){
		location.reload();
	}

}