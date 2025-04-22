import ReactSpeedometer from "react-d3-speedometer";

const SEGMENTS = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const COLORS = [
  "#E5FEFD", // 0 -5
  "#ACFBF7", // 5 - 10
  "#6AF7F1", // 10 - 15
  "#3BFA8B", // 15 - 20
  "#9FF600", // 20 - 25
  "#FAF000", // 25 - 30
  "#FFBD0C", // 30 - 35
  "#FF5724", // 35 - 40
  "#FF2368", // 40 - 45
  "#EC09FF", // 45 - 50
]

const MAX_VALUE = 50
const MIN_VALUE = 0

function limitNumber({ val, min, max }: { val: number, min: number, max: number }) {
  return Math.max(min, Math.min(val, max));
}

export const Speedometer = ({ value }: { value: number }) => {

  const limitedValue = limitNumber({ val: value, min: MIN_VALUE, max: MAX_VALUE })

  return (
    <ReactSpeedometer
      needleHeightRatio={0.9}
      needleColor="black"
      maxSegmentLabels={SEGMENTS.length}
      segments={SEGMENTS.length}
      customSegmentStops={SEGMENTS}
      minValue={MIN_VALUE}
      maxValue={MAX_VALUE}
      segmentColors={COLORS}
      value={limitedValue}
      ringWidth={20}
      valueTextFontSize="24px"
      height={200}
      width={290}
    />
  );
}


