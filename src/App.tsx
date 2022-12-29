import SportLists from "components/sportList";
import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { groupByNameTournament, groupByName, groupByNameRegion } from "./utils/helpers";

import "./App.css";
import View from "components/View";
import { arr } from "constants/arr";

import { initData, subscribeData, pingData } from "./constants/socketData";
const URL_WEB_SOCKET = "wss://mob.blue-version.com/hub/ws-sport";
const UPDATE_TIME = 10000

function App() {
  const [ws, setWs] = useState<WebSocket>(new WebSocket(URL_WEB_SOCKET));
  const [gameData, setGameData] = useState<SportData[] | []>([]);
  const wsRef = useRef<any>({});
  console.log("ws", gameData);
  const timerId = 0;

  useLayoutEffect(function init() {
    wsRef.current = new WebSocket(URL_WEB_SOCKET);

    wsRef.current.onopen = () => {
      setWs(wsRef.current);
      wsRef.current.send(JSON.stringify(initData));
    };
    //for keeping ws connection
    setInterval(function pingRequest() {
      wsRef.current.send(JSON.stringify(pingData));
    }, 10000);

    wsRef.current.onclose = () => console.log("ws closed");

    return () => {
      clearInterval(timerId);
      wsRef.current.close();
    };
  }, []);

  useEffect(
    function subscribe() {
      if (ws) {
        ws.onmessage = (evt) => {
          const evtData: any = JSON.parse(evt.data);

          if (evtData?.data?.session) {
            console.log("subscribe");
            wsRef.current.send(JSON.stringify(subscribeData));
          }
          const data = JSON.parse(evt?.data);
          if (Array.isArray(data.data?.data)) {
            const _gameData = data.data.data;

            const tree = groupByNameTournament(
              groupByNameRegion(groupByName(_gameData, "sport"))
            );
            console.log("tree", tree);
            setGameData(tree);
          }
        };
      }
    },
    [ws]
  );

  // console.log("connectionStatus", connectionStatus);
  return (
    <div className="App">
      <SportLists data={gameData} />
    </div>
  );
}

export default App;
