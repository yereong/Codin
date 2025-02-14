import { ComponentProps } from 'react';

type RateBarType = {
  score: number;
  barWidth: number;
} & ComponentProps<"div">;

const generateBars = (coloredBarCnt: number, barWidth: number) => {
  const bars = [];
  for (let i = 0; i < 20; i++) {
    if (coloredBarCnt > i) {
      bars.push(
        <div
          key={`coloredBar_${i}`}
          className={`h-7 mr-[0.15rem] bg-[#0D99FF]`}
          style={{width: `${barWidth}rem`}}
        />
      );
    } else {
      bars.push(
        <div
          key={`grayBar_${i}`}
          className={`h-7 mr-[0.15rem] bg-[#EBF0F7]`}
          style={{ width: `${barWidth}rem` }}
        />
      );
    }
  }
  return bars;
};

const RateBar = ({score, barWidth, className = ''}: RateBarType) => {
  const coloredBarCnt = score / 0.25;
  const barAry = generateBars(coloredBarCnt, barWidth);
  return (
    <div className={`flex content-center ${className}`}>
      {
        barAry.map(bar => {
          return bar
        })
      }
    </div>
  );
}

export { RateBar };