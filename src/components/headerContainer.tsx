import kittyHead from "../imgs/worthlessKitty.png";

const HeaderContainer = () => {
  return (
    <header className="flex justify-center items-center sm:p-8 p-2 w-full text-center bg-black bg-opacity-50 rounded-xl backdrop-blur-sm mb-20">
      <img
        src={kittyHead}
        alt="Kitty cat head with bow"
        className="size-1/4 -rotate-12 drop-shadow-lg"
      />
      <h1 className="font-bold text-white lg:text-8xl sm:text-6xl text-3xl drop-shadow-lg">
        Meowy Christmas
      </h1>
      <img
        src={kittyHead}
        alt="Kitty cat head with bow"
        className="size-1/4 rotate-12 drop-shadow-lg scale-x-[-1]"
      />
    </header>
  );
};

export default HeaderContainer;
