// components/CursorTrail.tsx
import React, { useState, useEffect } from "react";
import Snowflake from "./snowflake";

const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<
    { id: number; left: number; top: number }[]
  >([]);
  const [cursorPosition, setCursorPosition] = useState<{
    left: number;
    top: number;
  }>({ left: 0, top: 0 });
  const [moveCounter, setMoveCounter] = useState(0);

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    // Add a new snowflake after every 5 mouse moves (you can adjust this number)
    if (moveCounter % 75 === 0) {
      const newSnowflake = { id: Date.now(), left: clientX, top: clientY };
      setTrail((prevTrail) => [...prevTrail, newSnowflake]);

      // Remove the snowflake after 2 seconds (adjust the time interval as needed)
      setTimeout(() => {
        setTrail((prevTrail) =>
          prevTrail.filter((snowflake) => snowflake.id !== newSnowflake.id)
        );
      }, 500);
    }

    // Update the cursor position
    setCursorPosition({ left: clientX, top: clientY });

    // Increment the move counter
    setMoveCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {trail.map((snowflake) => (
        <Snowflake
          key={snowflake.id}
          left={snowflake.left}
          top={snowflake.top}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
