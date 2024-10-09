//import { MobileSidebar } from './mobile-sidebar';
import { useSessionModalStore } from "@/hooks/useSessionModal";
import useSessionStore from "@/store/session";
import Swal from "sweetalert2";

export default function StopButton() {
  const sessionStore = useSessionStore();

  const sessionModalStore = useSessionModalStore();

  const { sessionStatus } = sessionStore;

  const stopButton = () => {
    Swal.fire({
      icon: "warning",
      title: "Do you want to stop the session?",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log("stop");
        sessionStore.changeStatus(0);
        window.location.reload(false);
      } else if (result.isDenied) {
        console.log("cancel");
      }
    });
  };

  if (sessionStatus.status == 1) {
    return (
      <div
        className="absolute left-[125px] top-[0px] z-[4] box-border h-24 w-24 rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100"
        onClick={() => {
          stopButton();
        }}
      >
        <div className="flex flex-row items-start justify-start rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100 pb-[23px] pl-[13px] pr-3 pt-[22px]">
          <div className="relative box-border hidden h-24 w-24 rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100" />
          <img
            className="relative z-[1] h-[49px] w-[70.8px]"
            loading="lazy"
            alt=""
            src="/stop.svg"
          />
        </div>
      </div>
    );
  }
}
