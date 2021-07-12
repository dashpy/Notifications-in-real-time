import React, { useEffect,useCallback } from 'react'; 
import useWebSocket from 'react-use-websocket';
const socketUrl = 'ws://127.0.0.1:3030';

 
function App(config){
 
const {
  sendMessage,
  sendJsonMessage,
  lastMessage,
  lastJsonMessage,
  readyState,
  getWebSocket
} = useWebSocket(socketUrl, {
  onOpen: () =>{
    console.log('opened')
    sendMessage('Gelou ...')
  },
  onMessage: (event) => {
    console.log(event)
  },
  //Will attempt to reconnect on all close events, such as server shutting down
  shouldReconnect: (closeEvent) => true,
});
 
 
    return (
      <React.Fragment>
        <h1>Hello</h1>
      </React.Fragment>
    ); 
}

 

export default App;