import SnowflakeSVG from "./snowflakeSVG";

interface FallingSnowProps {
  left: number;
  top: number;
  animationDuration: string;
}

const FallingSnow: React.FC<FallingSnowProps> = ({
  left,
  top,
  animationDuration,
}) => {
  return (
    <div
      className="absolute -z-10"
      style={{
        left: `${left}px`,
        top: `${top}px`,
        animationDuration: animationDuration,
        animationName: "falling-snow",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
      }}
    >
      <SnowflakeSVG />
    </div>
  );
};

export default FallingSnow;
