import React, { useEffect, useState, useCallback, useRef } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import "./App.css";
import View from "./components/View";
import { arr } from "./constants/arr";
// import io from "socket.io-client";

// const socket = io("wss://mob.blue-version.com/hub/ws-sport");
import { initData, subscribeData, pingData } from "./constants/socketData";
const URL_WEB_SOCKET = "wss://mob.blue-version.com/hub/ws-sport";

function App() {
  const [ws, setWs] = useState<WebSocket>(new WebSocket(URL_WEB_SOCKET));
  const wsRef = useRef<any>({});

  const timeerId = 0;

  useEffect(() => {
    wsRef.current = new WebSocket(URL_WEB_SOCKET);

    wsRef.current.onopen = () => {
      setWs(wsRef.current);
      wsRef.current.send(JSON.stringify(initData));
    };

    setInterval(() => {
      wsRef.current.send(JSON.stringify(pingData));
    }, 10000);

    wsRef.current.onclose = () => console.log("ws closed");

    return () => {
      clearInterval(timeerId);
      wsRef.current.close();
    };
  }, []);

  useEffect(() => {
    if (ws) {
      ws.onmessage = (evt) => {
        const evtData: any = JSON.parse(evt.data);

        if (evtData?.data?.session) {
          console.log("suscribe");
          wsRef.current.send(JSON.stringify(subscribeData));
        }
        console.log("evn", JSON.parse(evt.data));
      };
    }
  }, [ws]);

  // console.log("connectionStatus", connectionStatus);
  return (
    <div className="App">
      <View lists={arr} />
      {/* <p>Connected: {"" + isConnected}</p>
      <p>Last pong: {lastPong || "-"}</p> */}
      {/* <button onClick={() => sendJsonMessage(obj, false)}>Send ping</button> */}
    </div>
  );
}

export default App;
