//import { MobileSidebar } from './mobile-sidebar';
import { useSocket } from "@/providers/SocketIOProvider";
import useSessionStore from "@/store/session";

export default function GasSelectionButton() {
  const sessionStore = useSessionStore();

  const { sessionStatus } = sessionStore;

  const socket = useSocket();

  const changeGas = () => {
    if (sessionStatus.status == 1) {
      if (sessionStatus.gas == "air") {
        sessionStore.changeGas("o2");
        socket.socket.emit("changeGas", "o2");
      } else if (sessionStatus.gas == "o2") {
        sessionStore.changeGas("air");
        socket.socket.emit("changeGas", "air");
      }
    }
    console.log(sessionStatus.gas);
  };

  if (sessionStatus.gas == "air") {
    return (
      <div
        className="absolute right-[0px] top-[0px] z-[4] box-border h-24 w-24 rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100"
        onClick={changeGas}
      >
        <div className="absolute left-[calc(50%_-_48px)] top-[calc(50%_-_48px)] box-border hidden h-full w-full rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100" />
        <img
          className="absolute left-[calc(50%_-_32px)] top-[calc(50%_-_25px)] z-[1] h-[50px] w-16"
          loading="lazy"
          alt=""
          src="/air-icon.svg"
        />
      </div>
    );
  } else if (sessionStatus.gas == "o2") {
    return (
      <div
        className="absolute right-[0px] top-[0px] z-[4] box-border h-24 w-24 rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100"
        onClick={changeGas}
      >
        <div className="absolute left-[calc(50%_-_48px)] top-[calc(50%_-_48px)] box-border hidden h-full w-full rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100" />
        <img
          className="absolute left-[calc(50%_-_32px)] top-[calc(50%_-_25px)] z-[1] h-[50px] w-16"
          loading="lazy"
          alt=""
          src="/o2-icon.svg"
        />
      </div>
    );
  }
}
