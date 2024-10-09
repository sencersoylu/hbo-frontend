//import { MobileSidebar } from './mobile-sidebar';
import { useSensorStore } from "@/store/sensor";
import { UserNav } from "./user-nav";
import Link from "next/link";
import useSessionStore from "@/store/session";

export default function Header() {
  const sensorStore = useSensorStore();
  const sessionStore = useSessionStore();

  return (
    <div className=" supports-backdrop-blur:bg-background/60 fixed left-[92px] right-0 top-0 z-20  h-[85px] w-[1188px]  border-b-2	 bg-slate-900">
      <nav className="flex h-32 items-center justify-between px-4">
        <div className="hidden lg:block">
          <div className="Humidity21 absolute left-[1000px] top-[10px] h-[65.24px] w-[151.56px] text-right">
            <span className="text-base font-['Raleway'] font-bold uppercase leading-tight tracking-tight text-white">
              humidity
              <br />
            </span>
            <span className="font-['Raleway'] text-[31.76px] font-bold leading-10 text-white">
              {sensorStore.getValue("humidity").value}%
            </span>
          </div>
          <div className="Temperature21 absolute left-[825px] top-[10px] h-[65.24px] w-[151.56px] text-right">
            <span className="text-base font-['Raleway'] font-bold uppercase leading-tight tracking-tight text-white">
              Temperature
              <br />
            </span>
            <span className="font-['Raleway'] text-[31.76px] font-bold leading-10 text-white">
              {sensorStore.getValue("temperature").value}°C
            </span>
          </div>
          <div className="O2212 absolute left-[625px] top-[10px] h-[65.24px] w-[151.56px] text-right">
            <span className="text-base font-['Raleway'] font-bold uppercase leading-tight tracking-tight text-white">
              o2
              <br />
            </span>
            <span className="font-['Raleway'] text-[31.76px] font-bold leading-10 text-white">
              {sensorStore.getValue("o2").value}%
            </span>
          </div>
          <div className="Depth124Fsw absolute left-[30px] top-[10px] h-[65.24px] w-[151.56px] text-left">
            <span className="text-base font-['Raleway'] font-bold uppercase leading-tight tracking-tight text-white">
              Depth
              <br />
            </span>
            <span className="font-['Raleway'] text-[31.76px] font-bold leading-10 text-white">
              {sensorStore.getValue("pressure").value} fsw
            </span>
          </div>
          <div className="Depth124Fsw absolute left-[200px] top-[10px] h-[65.24px] w-[151.56px] text-left">
            <span className="text-base font-['Raleway'] font-bold uppercase leading-tight tracking-tight text-white">
              Target
              <br />
            </span>
            <span className="font-['Raleway'] text-[31.76px] font-bold leading-10 text-white">
              {sessionStore.sessionStatus.targetPressure} fsw
            </span>
          </div>
          <div className="Depth124Fsw absolute left-[400px] top-[10px] h-[65.24px] w-[151.56px] text-left">
            <span className="text-base font-['Raleway'] font-bold uppercase leading-tight tracking-tight text-white">
              Difference
              <br />
            </span>
            <span className="font-['Raleway'] text-[31.76px] font-bold leading-10 text-white">
              {sessionStore.sessionStatus.differencePressure} fsw
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
        </div>
      </nav>
    </div>
  );
}
