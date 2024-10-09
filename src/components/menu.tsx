"use client";

import { DismissableLayer } from "@radix-ui/react-dismissable-layer";
import { useModal } from "@/hooks/useModal";
import FrameComponent from "./FrameComponent";

export function Menu() {
  const { isOpen, setModal } = useModal();
  function getState() {
    return isOpen ? "open" : "closed";
  }
  return (
    isOpen && (
      <>
        <div
          data-state={getState()}
          className={`fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`}
        ></div>
        <DismissableLayer
          role="menu"
          data-state={getState()}
          onDismiss={() => setModal(false)}
          onEscapeKeyDown={() => setModal(false)}
          onPointerDownOutside={() => setModal(false)}
        >
          <div
            data-state={getState()}
            className={`text-2xl-3 font-raleway  fixed left-[65px] top-[200px] z-50  box-border flex w-[1150.8px] max-w-full flex-col items-start justify-start gap-[16.7px] pb-[17.4px] pl-[23px] pr-4 pt-[5.6px] text-center leading-[normal] tracking-[normal] text-white `}
          >
            <img
              className="absolute bottom-[0px] left-[0px] right-[0px] top-[0px] !m-[0] h-full max-h-full w-full max-w-full overflow-hidden"
              alt=""
              src="/union.svg"
            />
            <div className="flex flex-row items-start justify-center self-stretch py-0 pl-5 pr-7">
              <div className="mq450:text-mid mq450:leading-[22px] relative z-[1] inline-block min-w-[58px] font-extrabold leading-[28px]">
                Menu
              </div>
            </div>
            <section className="bg-midnightblue-200 mq450:pt-20 mq450:pb-[53px] mq450:box-border mq1025:flex-wrap mq1025:justify-center mq1100:pr-[21px] mq1100:box-border z-[1] box-border flex max-w-full flex-row items-start justify-between gap-[20px] self-stretch rounded-lg pb-[82.3px] pl-[34px] pr-[42px] pt-[122.8px]">
              <div className="bg-midnightblue-200 relative hidden h-[411.5px] w-[1111.2px] max-w-full rounded-lg" />
              <FrameComponent
                gisprofile="/gisprofile.svg"
                profiles="Profiles"
              />
              <FrameComponent
                gisprofile="/heroiconssoliddocumentreport.svg"
                profiles="Sessions"
              />
              <FrameComponent
                gisprofile="/mdipatient.svg"
                profiles="Patients"
              />
              <FrameComponent
                gisprofile="/galasettings.svg"
                profiles="Settings"
              />
              <FrameComponent
                gisprofile="/materialsymbolshelp.svg"
                profiles="Help"
              />
            </section>
          </div>
        </DismissableLayer>
      </>
    )
  );
}
