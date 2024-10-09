import * as polylinearScale from "polylinear-scale";

// {
//     "duration": "15",
//     "pressure": 30,
//     "gas": "air"}
export default function profileToArr(profile) {
  const totalTime = profile.reduce((acc, { duration }) => acc + duration, 0);
  const maxPressure = profile.reduce(
    (acc, { pressure }) => Math.max(acc, pressure),
    0,
  );

  const chartData = [{ time: 0, pressure: 0, gas: "air" }];

  let t = 0;
  const profileData = profile.reduce(
    (acc, { duration, pressure, gas }, currentIndex, array) => {
      t = t + duration;

      acc.push({
        time: t,
        pressure,
        gas,
        slope: (pressure - acc[currentIndex]?.pressure || 0) / duration,
      });
      return acc;
    },
    [{ time: 0, pressure: 0, gas: "air", slope: 0 }],
  );

  const linear = polylinearScale(
    profileData.map((x) => x.time),
    profileData.map((x) => x.pressure),
  );

  const chartLineData = [];

  for (let i = 0; i < totalTime * 60; i++) {
    const pressure = linear(i / 60);
    const time = i / 60;
    chartLineData.push([Number(time.toFixed(2)), Number(pressure.toFixed(2))]);
  }

  return {
    profile,
    profileData,
    chartLineData,
  };
}
