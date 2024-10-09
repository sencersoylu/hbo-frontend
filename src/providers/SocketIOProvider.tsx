import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";

import { useSensorStore } from "@/store/sensor";

import io from "socket.io-client";
import { set } from "zod";

export const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const [isConnected, setConnected] = useState(false);
  const [socket, setSocket] = useState(null);

  //const sensorStore = useSensorStore();

  const socketUrl = `http://localhost:4001`;

  const handleOnMessage = (message) => {
    console.log(message);
    // store.dispatch here
  };

  useEffect(() => {
    if (socket == null) {
      setSocket(io(socketUrl));
    }

    if (socket) {
      socket.on("connect", () => {
        console.info(`Successfully connected to socket at ${socketUrl}`);
        setConnected(true);
      });

      socket.on("disconnect", () => {
        console.info(`Successfully disconnected`);
        setConnected(false);
      });

      socket.on("error", (err) => {
        console.log("Socket Error:", err.message);
      });

      socket.on("sensorData", (data) => {
        const arr = JSON.parse(data);
        useSensorStore.getState().setValue(arr.data[0], "temperature");
        useSensorStore.getState().setValue(arr.data[1], "pressure");
        useSensorStore.getState().setValue(arr.data[2], "humidity");
        useSensorStore.getState().setValue(arr.data[3], "o2");

        //console.log(arr.data);
      });
    }

    return () => {};
  }, [socket, isConnected]);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
