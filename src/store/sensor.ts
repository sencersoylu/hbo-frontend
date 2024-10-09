import { create } from "zustand";

interface SensorState {
  name: string;
  highValue: number;
  lowValue: number;
  lowPlc: number;
  highPlc: number;
  value: number;
  fix: number;
  area: string;
}

export function linearConversion(
  lowValue: number,
  highValue: number,
  lowPLC: number,
  highPLC: number,
  value: number,
  fix = 1,
): string {
  const a = ((lowValue - highValue) / (lowPLC - highPLC)) * 10000;
  const b = lowValue - (lowPLC * a) / 10000;
  const result = (value * a) / 10000 + b;

  if (value < lowPLC) return "fff";
  else
    return Number(result.toFixed(fix)).toLocaleString("en", {
      useGrouping: false,
      minimumFractionDigits: fix,
    });
}

// Remove the unused linearConversion function

interface SensorStore {
  sensor: SensorState[];
  setValue: (value: number, sensorName: string) => void;
  getValue: (name: string) => void;
}

export const useSensorStore = create<SensorStore>((set, get) => ({
  sensor: [
    {
      name: "pressure",
      highValue: 100,
      lowValue: 0,
      lowPlc: 0,
      highPlc: 100,
      value: 0,
      fix: 1,
      area: "main",
    },
    {
      name: "temperature",
      highValue: 100,
      lowValue: 0,
      lowPlc: 0,
      highPlc: 100,
      value: 0,
      fix: 1,
      area: "main",
    },
    {
      name: "humidity",
      highValue: 100,
      lowValue: 0,
      lowPlc: 0,
      highPlc: 100,
      value: 0,
      fix: 1,
      area: "main",
    },
    {
      name: "o2",
      highValue: 100,
      lowValue: 0,
      lowPlc: 0,
      highPlc: 100,
      value: 0,
      fix: 1,
      area: "main",
    },
    {
      name: "co2",
      highValue: 100,
      lowValue: 0,
      lowPlc: 0,
      highPlc: 100,
      value: 0,
      fix: 1,
      area: "main",
    },
  ],
  setValue: (value: number, sensorName: string) => {
    set((state) => {
      const sensor = state.sensor.find((sensor) => sensor.name === sensorName);

      if (sensor) {
        sensor.value = linearConversion(
          sensor.lowValue,
          sensor.highValue,
          sensor.lowPlc,
          sensor.highPlc,
          value,
          sensor.fix,
        );
        //console.log(sensor.value);
        return { sensor: state.sensor };
      } else {
        console.error(`Sensor ${sensorName} not found`);
      }
    });
  },
  getValue: (name: string) => {
    const { sensor } = get();
    const sensorData = sensor.find((sensor) => sensor.name === name);
    return sensorData;
  },
}));
