import { FunctionComponent } from "react";
import NavigationIcons from "./NavigationIcons";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1111.2px] rounded-lg bg-midnightblue-200 flex flex-row items-start justify-between pt-[122.7px] pb-[82.3px] pr-[42px] pl-[34px] box-border gap-[20px] max-w-full z-[7] text-center text-7xl-7 text-white font-raleway mq450:pt-20 mq450:pb-[53px] mq450:box-border mq1025:flex-wrap mq1025:justify-center mq1100:pr-[21px] mq1100:box-border ${className}`}
    >
      <div className="h-[411.5px] w-[1111.2px] relative rounded-lg bg-midnightblue-200 hidden max-w-full" />
      <NavigationIcons gisprofile="/gisprofile.svg" profiles="Profiles" />
      <NavigationIcons
        gisprofile="/heroiconssoliddocumentreport.svg"
        profiles="Sessions"
      />
      <NavigationIcons gisprofile="/mdipatient.svg" profiles="Patients" />
      <NavigationIcons gisprofile="/galasettings.svg" profiles="Settings" />
      <NavigationIcons gisprofile="/materialsymbolshelp.svg" profiles="Help" />
    </div>
  );
};

export default Navigation1;
