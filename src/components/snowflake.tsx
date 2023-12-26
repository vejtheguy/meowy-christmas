import SnowflakeSVG from "./snowflakeSVG";

interface SnowflakeProps {
  left: number;
  top: number;
}

const Snowflake: React.FC<SnowflakeProps> = ({ left, top }) => {
  return (
    <div className="absolute" style={{ left: `${left}px`, top: `${top}px` }}>
      <SnowflakeSVG />
    </div>
  );
};

export default Snowflake;
