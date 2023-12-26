import { useRef, useState } from "react";
import VideoFrame from "../components/videoFrame";
import ScrollIntoView from "react-scroll-into-view";

interface VideoDropdownProps {
  src: string;
  name: string;
}

const VideoDropdown: React.FC<VideoDropdownProps> = ({ src, name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block container w-full">
      <button
        onClick={handleOpen}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 border-b-2 border-black border-opacity-50 transition duration-300 w-full"
      >
        {name}
      </button>
      {/* {isOpen && <VideoFrame src={src} title/>} */}
    </div>
  );
};

export default VideoDropdown;
