import { useState } from "react";

interface VideoFrameProps {
  src: string;
  title: string;
  presentColor: string;
  ribbon: string;
}

const VideoFrame: React.FC<VideoFrameProps> = ({
  src,
  title,
  presentColor,
  ribbon,
}) => {
  const [isUnwrap, setIsUnwrap] = useState<boolean>(false);
  const handleUnUnwrap = () => {
    setIsUnwrap(true);
  };

  return (
    <div className={`${presentColor} sm:p-4 p-2 rounded-xl relative`}>
      <button
        className={`w-full h-full absolute top-0 left-0 rounded-xl group flex flex-col justify-center items-center ${
          isUnwrap ? "invisible" : `${presentColor} visible`
        }`}
      >
        <span
          className="bg-kittyRed sm:p-10 p-4 rounded-full animate-wiggle inline-block group-hover:scale-125 group-hover:animate-none hover:bg-green-500 sm:text-6xl text-2xl"
          onClick={handleUnUnwrap}
        >
          Open Me
        </span>
      </button>

      <div>
        <h2
          className={`font-semibold text-white drop-shadow-s-md ${ribbon} p-2 sm:-mx-4 -mx-2 mb-4 flex flex-Unwrap justify-center`}
        >
          {title}
        </h2>
        <iframe
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg w-full h-full aspect-video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoFrame;
