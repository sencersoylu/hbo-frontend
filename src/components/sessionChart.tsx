//import { MobileSidebar } from './mobile-sidebar';
import { useSocket } from "@/providers/SocketIOProvider";
import { useSessionStore } from "@/store/session";
import profileToArr from "@/lib/profile";
import React, { useEffect, useRef, useState } from "react";
import * as Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";

type ComponentProps = {
  profileData: any[];
  liveData?: any[];
  pauseData: any[];
  liveManualData?: any[];
};

export default function SessionChart({
  profileData,
  liveData,
  pauseData,
  liveManualData,
}: ComponentProps) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  //const [liveData, setLiveData] = useState([{ x: 0, y: 0 }]);

  const lineData = profileData.chartLineData;

  let duration = 0;

  const bandData = profileData.profile?.map((x, i) => {
    if (x.gas === "o2") {
      const arr = {
        color: "rgba(132,188,39,0.8)",
        from: duration,
        to: duration + x.duration,
      };
      duration += x.duration;
      return arr;
    } else {
      const arr = {
        color: "rgba(132,188,39,0)",
        from: duration,
        to: duration + x.duration,
      };
      duration += x.duration;
      return arr;
    }
  });

  const options: Highcharts.Options = {
    chart: {
      backgroundColor: "#111B52",
      borderColor: "#F6F6F6",
      marginTop: 30,
      type: "line",

      borderWidth: 2,
      style: {
        font: "22px Raleway",
        color: "#f00",
      },
    },
    plotOptions: {
      series: {
        lineWidth: 8,
        connectNulls: false,
        color: "#F6F6F6",
        cropThreshold: 100000,
        turboThreshold: 100000,
        marker: {
          enabled: false,
        },
      },
    },
    legend: {
      enabled: false,
    },
    yAxis: {
      gridLineColor: "#F6F6F6",
      gridLineWidth: 1,
      min: 0,

      title: {
        text: "",
        align: "high",
      },
      labels: {
        formatter: function () {
          return this.value + " fsw";
        },
        style: {
          fontSize: "22px",
          fontFamily: "22px Raleway",
          color: "#F6F6F6",
        },
      },
    },
    xAxis: {
      gridLineColor: "#F6F6F6",
      gridLineWidth: 1,
      tickmarkPlacement: "on",
      ordinal: false,
      plotBands: bandData,
      labels: {
        style: {
          fontSize: "22px",
          fontFamily: "22px Raleway",
          color: "#F6F6F6",
        },
      },
    },
    title: {
      text: "",
    },
    series: [
      {
        type: "line",
        showInLegend: false,
        data: lineData,
        lineWidth: 12,
      },
      {
        type: "line",
        showInLegend: false,
        lineWidth: 12,
        color: "#FF0000",
        data: liveData,
        zIndex: 9999,
      },
      {
        type: "line",
        showInLegend: false,
        lineWidth: 12,
        color: "#0ABAB5",
        data: liveManualData,
        zIndex: 9999,
      },
    ],
  };

  return (
    <HighchartsReact
      containerProps={{ style: { height: "100%" } }}
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
}
