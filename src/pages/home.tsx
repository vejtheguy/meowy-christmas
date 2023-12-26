import HeaderContainer from "../components/headerContainer";
import VideoFrame from "../components/videoFrame";

const Homepage = () => {
  const kittyVids = [
    {
      src: "https://www.youtube.com/embed/G_DEyydnl2Q?si=DbTgNF576CtyWb86",
      name: "It's Beginning to Look a Lot Like Christmas - ft. a worthless kitty",
      present: "present-green",
      ribbon: "bg-kittyGreen",
    },
    {
      src: "https://www.youtube.com/embed/VK8zSLeEnfE?si=CMGP_8r874S8lmqf",
      name: "Santa Baby - ft. a worthless kitty",
      present: "present-blue",
      ribbon: "bg-kittyBlue",
    },
    {
      src: "https://www.youtube.com/embed/bjaJz0Jq_VQ?si=d5SblRJIo6mMlQKL",
      name: "Jingle Bells - ft. a worthless kitty",
      present: "present-red",
      ribbon: "bg-kittyRed",
    },
  ];

  return (
    <div className="container my-10">
      <HeaderContainer />
      <ul className="flex flex-col w-full gap-20">
        {kittyVids.map(({ src, name, present, ribbon }) => {
          return (
            <li key={present}>
              <VideoFrame
                src={src}
                title={name}
                presentColor={present}
                ribbon={ribbon}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Homepage;
