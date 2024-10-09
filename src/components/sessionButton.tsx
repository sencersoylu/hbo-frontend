import React, { ReactNode } from "react";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "black",
  className,
}) => {
  const iconStyles = {
    fontSize: size,
    color,
  };

  return (
    <div>
      <div className="absolute left-[calc(50%_-_48px)] top-[calc(50%_-_48px)] box-border hidden h-full w-full rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100" />
      <img
        className="absolute left-[calc(50%_-_32px)] top-[calc(50%_-_25px)] z-[1] h-[50px] w-16"
        loading="lazy"
        alt=""
        src="/o2-icon.svg"
      />
    </div>
  );
};

export default Icon;
