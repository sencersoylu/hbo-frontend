/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useSocket } from "@/providers/SocketIOProvider";

import React, { use, useEffect, useRef, useState } from "react";
import * as polylinearScale from "polylinear-scale";

import { color } from "highcharts";
import { set } from "zod";

import { useSensorStore } from "@/store/sensor";
import useSessionStore from "@/store/session";
import StartStopButton from "@/components/startStopButton";
import GasSelectionButton from "@/components/gasSelectionButton";
import InformationBar from "@/components/informationBar";
import SessionChart from "@/components/sessionChart";
import profileToArr from "@/lib/profile";
import Swal from "sweetalert2";

export default function Page() {
  const socket = useSocket();

  const sessionStore = useSessionStore();

  const { sessionStatus } = sessionStore;

  const setTest = useSessionStore((state) => state.changeStatus);

  const sensorStore = useSensorStore();

  const sessionST = useSessionStore((state) => state.sessionStatus.status);

  const [liveData, setLiveData] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [liveManualData, setLiveManualData] = useState([]);

  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<
    { message: string; userId: string }[]
  >([]);

  //const { sensor } = useSensorStore();
  //console.log(sensor);

  const test = useSessionStore((state) => state.sessionStatus.profileData);

  const sessionTime = useSessionStore(
    (state) => state.sessionStatus.sessionTime,
  );

  const activePhase = useSessionStore(
    (state) => state.sessionStatus.activePhase,
  );

  useEffect(() => {
    if (sessionTime > 0 && sessionStatus.pause == 0) {
      console.log(sessionStore.sessionStatus.activePhase);
      if (sessionTime != 1) sessionStore.sessionStatus.phaseTime = 0;

      sessionStore.changeGas(activePhase.gas);
      if (activePhase.gas == "o2") {
        Swal.fire({
          icon: "success",
          title: "Please change the gas to O2",
          showConfirmButton: true,
          didClose: () => {
            console.log("gas changed");
          },
        });
      } else if (activePhase.gas == "air") {
        Swal.fire({
          icon: "success",
          title: "Please change the gas to air",
          showConfirmButton: true,
          didClose: () => {
            console.log("gas changed");
          },
        });
      }
    }
  }, [activePhase]);

  useEffect(() => {
    console.log(sessionTime);
    if (sessionTime > 0 && typeof profileData != "undefined") {
      if (sessionTime % 10 == 0 || sessionTime == 1) {
        if (sessionStatus.pause == 0) {
          setLiveData([
            ...liveData,
            {
              x: Number((sessionTime / 60).toFixed(2)),
              y: sessionStore.sessionStatus.targetPressure,
            },
          ]);

          setLiveManualData([
            ...liveManualData,
            {
              x: Number((sessionTime / 60).toFixed(2)),
              y: null,
            },
          ]);

          console.log("liveData", liveData);
        } else if (sessionStatus.pause == 1) {
          setLiveData([
            ...liveData,
            {
              x: Number((sessionTime / 60).toFixed(2)),
              y: null,
            },
          ]);

          setLiveManualData([
            ...liveManualData,
            {
              x: Number((sessionTime / 60).toFixed(2)),
              y: sessionStore.sessionStatus.targetPressure,
            },
          ]);
        }
      }
      if (typeof profileData.chartLineData != "undefined") {
        if (profileData.chartLineData?.length > sessionTime) {
          sessionStore.sessionStatus.targetPressure =
            profileData?.chartLineData[sessionTime][1];
          sessionStore.sessionStatus.differencePressure = Number(
            Number(
              profileData?.chartLineData[sessionTime][1] -
                Number(sensorStore.getValue("pressure").value),
            ).toFixed(2),
          ).toLocaleString("en", {
            useGrouping: false,
            minimumFractionDigits: 2,
          });

          const phase = profileData.profileData.filter(
            (x) => x.time * 60 > sessionTime,
          );
          sessionStore.sessionStatus.activePhase = phase[0];
        } else {
          sessionStore.sessionStatus.targetPressure =
            profileData?.chartLineData[
              profileData?.chartLineData.length - 1
            ][1];
          sessionStore.sessionStatus.differencePressure = Number(
            Number(
              profileData?.chartLineData[sessionTime][1] -
                Number(sensorStore.getValue("pressure").value),
            ).toFixed(2),
          ).toLocaleString("en", {
            useGrouping: false,
            minimumFractionDigits: 2,
          });

          const phase = profileData.profileData.filter(
            (x) => x.time * 60 > sessionTime,
          );
          sessionStore.sessionStatus.activePhase = phase[0];
        }
      }
      //const grafikdurum = sessionStore.stepStatus();
    }
    //sessionStatus.targetPressure = profileData[sessionTime].
  }, [sessionTime]);

  useEffect(() => {
    console.log("test", test);
    if (typeof test != "undefined") {
      setProfileData(test);
    }
  }, [test]);

  return (
    <ScrollArea className="h-full">
      <div className="LineChart3 absolute left-[23px] top-[19px] inline-flex items-center justify-start border-2 ">
        <div className="LineChart relative h-[516px] w-[1139px]">
          <SessionChart
            profileData={profileData}
            liveData={liveData}
            liveManualData={liveManualData}
          />
        </div>
      </div>
      <InformationBar />
    </ScrollArea>
  );
}
