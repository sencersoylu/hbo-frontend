//import { MobileSidebar } from './mobile-sidebar';

import useSessionStore from "@/store/session";
import GasSelectionButton from "./gasSelectionButton";
import StartStopButton from "./startStopButton";
import { useEffect } from "react";
import StopButton from "./StopButton";

export default function InformationBar() {
  const sessionStore = useSessionStore();

  const remaningTime =
    typeof sessionStore.sessionStatus.profileData === "undefined"
      ? 0
      : sessionStore.sessionStatus.profileData?.chartLineData.length -
        sessionStore.sessionStatus.sessionTime;

  return (
    <div className="Group82 absolute  left-[23px] top-[570px] h-24 w-[1139px]">
      <div className="ProfileNameAntiAging absolute left-[300px] top-[0px] w-[180px] text-right">
        <span className="text-base font-['Raleway']  text-[18px] font-bold uppercase leading-tight text-white">
          Profile name
          <br />
        </span>
        <span className="font-['Raleway'] text-[26.97px] font-bold uppercase leading-[33.71px] text-white">
          {sessionStore.sessionStatus.profileData?.profileName}
        </span>
      </div>
      <div className="TreatmentTMe011020 absolute left-[650px] top-[0px] w-[180px] text-right">
        <span className="mq450:text-3xl mq450:leading-[27px] font-['Raleway'] text-[18px] font-bold uppercase leading-tight text-white">
          Treatment tıme
          <br />
        </span>
        <span className="font-['Raleway'] text-8xl  font-bold uppercase leading-[33.71px] text-white">
          {[
            String(parseInt(sessionStore.sessionStatus.sessionTime / 60 / 60)),
            String(
              parseInt((sessionStore.sessionStatus.sessionTime / 60) % 60),
            ),
            String(parseInt(sessionStore.sessionStatus.sessionTime % 60)),
          ]
            .join(":")
            .replace(/\b(\d)\b/g, "0$1")}
          <br />
          {[
            String(parseInt(remaningTime / 60 / 60)),
            String(parseInt((remaningTime / 60) % 60)),
            String(parseInt(remaningTime % 60)),
          ]
            .join(":")
            .replace(/\b(\d)\b/g, "0$1")}
        </span>
      </div>
      <div className="PhaseTMe011020 absolute left-[900px] top-[0px] w-[115px] text-right">
        <span className="text-base font-['Raleway'] text-[18px] font-bold  uppercase leading-tight text-white">
          Phase time
          <br />
        </span>
        <span className="leading-[33.71px]mq450:text-3xl mq450:leading-[27px font-['Raleway'] text-[26.97px] font-bold uppercase text-white">
          {[
            String(parseInt(sessionStore.sessionStatus.phaseTime / 60 / 60)),
            String(parseInt((sessionStore.sessionStatus.phaseTime / 60) % 60)),
            String(parseInt(sessionStore.sessionStatus.phaseTime % 60)),
          ]
            .join(":")
            .replace(/\b(\d)\b/g, "0$1")}
        </span>
      </div>

      <GasSelectionButton />
      <StartStopButton />
      <StopButton />
    </div>
  );
}
