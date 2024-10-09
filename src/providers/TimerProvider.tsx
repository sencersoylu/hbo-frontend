import { useSensorStore } from "@/store/sensor";
import useSessionStore from "@/store/session";
import React, { createContext, useEffect, useRef, useState } from "react";

export const TimerContext = createContext();

interface Props {
  children: React.ReactNode;
}

export function TimerProvider({ children }: Props) {
  const [timer, setTimer] = useState(0);

  const sessionStore = useSessionStore();
  const sensorStore = useSensorStore();

  useEffect(() => {
    let secondsInterval;
    secondsInterval = setInterval(() => {
      //console.log("Timer");

      if (
        sessionStore.sessionStatus.status != 0 &&
        typeof sessionStore.sessionStatus.profileData != "undefined"
      ) {
        sessionStore.sessionStatus.sessionTime++;
        sessionStore.sessionStatus.phaseTime++;
      }
    }, 1000);

    return () => secondsInterval && clearInterval(secondsInterval);
  }, []);

  return (
    <TimerContext.Provider value={{ timer }}>{children}</TimerContext.Provider>
  );
}
