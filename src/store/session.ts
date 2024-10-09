import { create } from "zustand";
import moment from "moment";
import { persist, createJSONStorage } from "zustand/middleware";
import { useEffect } from "react";
import zustymiddleware from "zustymiddleware";
import { persistNSync } from "persist-and-sync";

interface SessionState {
  status: number; // seans durumu
  pause: boolean; // seans duraklatıldı mı
  totalTime: number; // toplam süre
  remainingTime: number; // kalan süre
  sessionTime: number;
  sessionName: string;
  patientName: string;
  doctorName: string;
  operatorName: string;

  profile?: [];

  currentStep: number; // mevcut adım
  nextStepStartTime: number; // sonraki adım başlangıç zamanı
  stepStatus: number; // adım durumu

  maxPressure: number; // maksimum basınç
  stepTime: number; // adım süresi
  stepRemainingTime: number; // adım kalan süresi
  stepMaxPressure: number; // adım maksimum basınç
  stepMinPressure: number; // adım minimum basınç

  compValve: number;
  decompValve: number;

  ventilationStatus: boolean;
  ventilationLevel: number;
  pauseTime: number;
  startTime: number;

  targetPressure: number;
  differencePressure: number;

  gas: string;
  doorClosed: boolean;

  sessionStartTime?: moment.Moment;
  phaseStartTime?: moment.Moment;

  profileData: null;
  phaseTime: number;

  activePhase?: any;
  sessionFinished: boolean;

  olcumcarpan: number;
  lastcontrol: number;

  pressureArray: number[];
  differenceArray: number[];
  liveData: any[];
  liveManualData: any[];
}

// Remove the unused linearConversion function

interface SessionStore {
  sessionStatus: SessionState;
  changeStatus: (status: number) => void;
  changeGas: (gas: string) => void;
  getSessionTime: () => string;
  startSession: (profileData: any) => void;
  stepStatus: () => number;
  pushPressure: (pressure: number) => void;
  pushDifference: (difference: number) => void;
}

const useSessionStore = create<SessionStore>(
  persistNSync(
    (_set, get) => ({
      sessionStatus: {
        status: 0,
        pause: false,
        totalTime: 0,
        remainingTime: 0,
        currentStep: 0,
        nextStepStartTime: 0,
        stepStatus: 0,
        maxPressure: 0,
        stepTime: 0,
        stepRemainingTime: 0,
        stepMaxPressure: 0,
        stepMinPressure: 0,
        compValve: 0,
        decompValve: 0,
        ventilationStatus: false,
        ventilationLevel: 0,
        pauseTime: 0,
        startTime: 0,
        targetPressure: 0,
        differencePressure: 0,
        gas: "air",
        sessionStartTime: undefined,
        phaseStartTime: undefined,
        sessionName: "",
        patientName: "",
        doctorName: "",
        operatorName: "",
        sessionTime: 0,
        phaseTime: 0,
        doorClosed: false,
        sessionFinished: false,
        olcumcarpan: 0,
        lastcontrol: 0,
        pressureArray: [],
        differenceArray: [],
        liveData: [],
        liveManualData: [],
      },
      changeStatus: (status: number) => {
        const sessionStatus = get().sessionStatus;

        if (status == 1 && sessionStatus.status == 0) {
          sessionStatus.status = 1;
          sessionStatus.pause = false;
          sessionStatus.sessionStartTime = moment();
        }

        sessionStatus.status = status;
      },
      changeGas: (gas: string) => {
        const sessionStatus = get().sessionStatus;
        sessionStatus.gas = gas;
      },
      startSession: (profileData) => {
        const sessionStatus = get().sessionStatus;
        sessionStatus.status = 1;
        sessionStatus.pause = false;
        sessionStatus.sessionStartTime = moment();
        sessionStatus.profileData = profileData;
      },
      getSessionTime: () => {
        const sessionStatus = get().sessionStatus;
        const sessionStartTime = sessionStatus.sessionStartTime;
        if (!sessionStartTime) {
          return "";
        }

        const sec = moment().diff(sessionStartTime, "seconds");

        return [
          String(parseInt(sec / 60 / 60)),
          String(parseInt((sec / 60) % 60)),
          String(parseInt(sec % 60)),
        ]
          .join(":")
          .replace(/\b(\d)\b/g, "0$1");
      },
      stepStatus: () => {
        const profileData = get().sessionStatus.profileData;
        const sessionTime = get().sessionStatus.sessionTime;

        const phase = profileData.filter((x) => x.time * 60 > sessionTime);

        const activePhase = phase[0];
        if ((activePhase.slope = 0)) {
          return 2;
        } else if (activePhase.slope > 0) {
          return 1;
        } else if (activePhase.slope < 0) {
          return 0;
        }
        return 999;
      },
      pushPressure: (pressure: number) => {
        const sessionStatus = get().sessionStatus;
        sessionStatus.pressureArray.push(pressure);
      },
      pushDifference: (difference: number) => {
        const sessionStatus = get().sessionStatus;
        sessionStatus.differenceArray.push(difference);
      },
    }),
    {
      name: "session",
    },
  ),
);

export default useSessionStore;
