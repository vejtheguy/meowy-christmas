import "./App.css";
import FallingSnow from "./components/fallingSnow";
import Homepage from "./pages/home";

function App() {
  const snowflakes = Array.from({ length: 50 }, (_, index) => index); // Adjust the number of snowflakes

  return (
    <div className="App min-h-screen flex flex-col justify-center items-center mx-4">
      <Homepage />
      {snowflakes.map((index) => (
        <FallingSnow
          key={index}
          left={Math.random() * window.innerWidth}
          top={Math.random() * window.innerHeight}
          animationDuration={`${Math.random() * 50 + 10}s`}
        />
      ))}
    </div>
  );
}

export default App;
