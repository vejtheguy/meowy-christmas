import React, { useEffect, useState } from "react";

interface ResponsiveIframeProps {
  src: string;
}

const ResponsiveIframe: React.FC<ResponsiveIframeProps> = ({ src }) => {
  const [iframeSize, setIframeSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Calculate 25% of the screen size
      const newWidth = (screenWidth * 75) / 100;
      const newHeight = (newWidth * 9) / 16; // Maintain 16:9 aspect ratio

      setIframeSize({ width: newWidth, height: newHeight });
    };

    // Initial size update
    updateSize();

    // Listen for window resize events and update the size accordingly
    window.addEventListener("resize", updateSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div className="cute-border p-4 rounded-xl">
      <iframe
        width={iframeSize.width}
        height={iframeSize.height}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default ResponsiveIframe;
