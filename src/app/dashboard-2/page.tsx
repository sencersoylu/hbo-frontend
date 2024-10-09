"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

import "chart.js/auto";

import { Line } from "react-chartjs-2";

import { useEffect, useState } from "react";

import React, { useRef } from "react";
import { options } from "prettier-plugin-tailwindcss";
import { scales } from "chart.js/auto";
import { off } from "process";

export default function page() {
  const [chartData, setChartData] = useState(null);

  const data = {
    type: "linear",
    scales: {
      x: {
        ticks: {
          display: true,
          autoSkip: true,
          maxTicksLimit: 15,
        },
      },
    },
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        data: [
          { x: 1, y: 20 },
          { x: 2, y: 10 },
        ],
      },
    ],
  };
  return (
    <ScrollArea className="h-full">
      <div className="LineChart3 absolute left-[23px] top-[19px] inline-flex items-center justify-start border-2 ">
        <div className="LineChart relative h-[516px] w-[1139px]">
          <Line data={data} />
        </div>
      </div>
      <div className="Group82 absolute  left-[23px] top-[555px] h-24 w-[1139px]">
        <div className="ProfileNameAntiAging absolute left-[220.61px] top-[26px] w-[180px] text-right">
          <span className="text-base font-['Raleway'] font-bold uppercase leading-tight text-white">
            Profile name
            <br />
          </span>
          <span className="font-['Raleway'] text-[26.97px] font-bold uppercase leading-[33.71px] text-white">
            Anti aging
          </span>
        </div>
        <div className="TreatmentTMe011020 absolute left-[521.61px] top-[26px] w-[180px] text-right">
          <span className="text-base font-['Raleway'] font-bold uppercase leading-tight text-white">
            Treatment tıme
            <br />
          </span>
          <span className="font-['Raleway'] text-[26.97px] font-bold uppercase leading-[33.71px] text-white">
            01:10:20
          </span>
        </div>
        <div className="PhaseTMe011020 absolute left-[805.61px] top-[26px] w-[115px] text-right">
          <span className="text-base font-['Raleway'] font-bold uppercase leading-tight text-white">
            Phase time
            <br />
          </span>
          <span className="font-['Raleway'] text-[26.97px] font-bold uppercase leading-[33.71px] text-white">
            01:10:20
          </span>
        </div>
        <div className="absolute right-[0px] top-[0px] z-[4] box-border h-24 w-24 rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100">
          <div className="absolute left-[calc(50%_-_48px)] top-[calc(50%_-_48px)] box-border hidden h-full w-full rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100" />
          <img
            className="absolute left-[calc(50%_-_32px)] top-[calc(50%_-_25px)] z-[1] h-[50px] w-16"
            loading="lazy"
            alt=""
            src="/o2-icon.svg"
          />
        </div>
        <div className="absolute left-[0px] top-[0px] z-[4] box-border h-24 w-24 rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100">
          <div className="absolute left-[calc(50%_-_48px)] top-[calc(50%_-_48px)] box-border hidden h-full w-full rounded-[4.04px] border-[0.9px] border-solid border-white bg-midnightblue-100" />
          <img
            className="absolute left-[calc(50%_-_24px)] top-[calc(50%_-_24px)] z-[1] h-12 w-12"
            alt=""
            src="/pause.svg"
          />
        </div>
      </div>
    </ScrollArea>
  );
}
