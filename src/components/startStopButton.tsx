//import { MobileSidebar } from './mobile-sidebar';
import { useSessionModalStore } from "@/hooks/useSessionModal";
import useSessionStore from "@/store/session";

export default function startStopButton() {
  const sessionStore = useSessionStore();

  const sessionModalStore = useSessionModalStore();

  const { sessionStatus } = sessionStore;

  const startStopButton = (id) => {
    if (id == 0) {
      sessionModalStore.setOpen(true);
    } else if (id == 1) {
      sessionStore.sessionStatus.pause = true;
    } else if (id == 2) {
      sessionStore.sessionStatus.pause = false;
    }
    // }
    // if (sessionStatus.status == 0) {
    //   sessionModalStore.setOpen(true);
    // } else if (sessionStatus.status == 1) {
    //   sessionStore.changeStatus(0);
    // }
    console.log(sessionStatus.status);
  };

  if (sessionStatus.status == 0) {
    return (
      <div
        className="absolute left-[0px] top-[0px] z-[4] box-border h-24 w-24 rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100"
        onClick={() => {
          startStopButton(0);
        }}
      >
        <div className="absolute left-[calc(50%_-_48px)] top-[calc(50%_-_48px)] box-border hidden h-full w-full rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100" />
        <img
          className="absolute left-[calc(50%_-_24px)] top-[calc(50%_-_24px)] z-[1] h-12 w-12"
          alt=""
          src="/play.svg"
        />
      </div>
    );
  } else if (sessionStatus.status == 1 && sessionStatus.pause == false) {
    return (
      <div
        className="absolute left-[0px] top-[0px] z-[4] box-border h-24 w-24 rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100"
        onClick={() => {
          startStopButton(1);
        }}
      >
        <div className="absolute left-[calc(50%_-_48px)] top-[calc(50%_-_48px)] box-border hidden h-full w-full rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100" />
        <img
          className="absolute left-[calc(50%_-_24px)] top-[calc(50%_-_24px)] z-[1] h-12 w-12"
          alt=""
          src="/pause.svg"
        />
      </div>
    );
  } else if (sessionStatus.status == 1 && sessionStatus.pause == true) {
    return (
      <div
        className="absolute left-[0px] top-[0px] z-[4] box-border h-24 w-24 rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100"
        onClick={() => {
          startStopButton(2);
        }}
      >
        <div className="flex flex-row items-start justify-start rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100 pb-[23px] pl-[13px] pr-3 pt-[22px]">
          <div className="relative box-border hidden h-24 w-24 rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100" />
          <img
            className="relative z-[1] h-[49px] w-[70.8px]"
            loading="lazy"
            alt=""
            src="/play-pause-icon.svg"
          />
        </div>
      </div>
    );
  }
}
