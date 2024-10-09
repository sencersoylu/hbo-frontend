import { FunctionComponent } from "react";

export type NavigationIconsType = {
  className?: string;
  gisprofile?: string;
  profiles?: string;
};

const NavigationIcons: FunctionComponent<NavigationIconsType> = ({
  className = "",
  gisprofile,
  profiles,
}) => {
  return (
    <div
      className={`w-[146.7px] flex flex-col items-start justify-start gap-[15.8px] text-center text-7xl-7 text-white font-raleway ${className}`}
    >
      <div className="rounded-[6.67px] bg-midnightblue-100 flex flex-row items-start justify-start py-[17px] pr-[17px] pl-[18px] z-[8] border-[1.3px] border-solid border-white">
        <div className="h-[146.7px] w-[146.7px] relative rounded-[6.67px] bg-midnightblue-100 box-border hidden border-[1.3px] border-solid border-white" />
        <img
          className="h-[109.4px] w-[109.4px] relative z-[9]"
          loading="lazy"
          alt=""
          src={gisprofile}
        />
      </div>
      <b className="self-stretch h-11 relative leading-[130%] inline-block shrink-0 z-[8] mq450:text-2xl mq450:leading-[28px]">
        {profiles}
      </b>
    </div>
  );
};

export default NavigationIcons;
