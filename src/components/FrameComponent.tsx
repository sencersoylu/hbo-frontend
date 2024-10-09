import { type FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
  gisprofile?: string;
  profiles?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  gisprofile,
  profiles,
}) => {
  return (
    <div
      className={`text-7xl-7 font-raleway flex w-[146.7px] flex-col items-start justify-start gap-[15.7px] text-center text-white ${className}`}
    >
      <div className="bg-midnightblue-100 z-[2] flex flex-row items-start justify-start self-stretch rounded-[6.67px] border-[1.3px] border-solid border-white py-[17px] pl-[18px] pr-[17px]">
        <div className="bg-midnightblue-100 relative box-border hidden h-[146.7px] w-[146.7px] rounded-[6.67px] border-[1.3px] border-solid border-white" />
        <img
          className="relative z-[3] h-[109.4px] w-[109.4px]"
          loading="lazy"
          alt=""
          src={gisprofile}
        />
      </div>
      <b className="mq450:text-2xl mq450:leading-[28px] relative z-[2] inline-block h-11 shrink-0 self-stretch leading-[130%]">
        {profiles}
      </b>
    </div>
  );
};

export default FrameComponent;
