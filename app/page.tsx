import { Logo } from "./logo";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center m-5">Bienvenido a Megasur</h1>
      <div className="flex flex-row items-center justify-center border-2 border-solid w-120 h-80 mx-auto rounded-lg">
        <Logo />
        <p className="text-center">Somos una gran empresa granadina</p>
      </div>
    </>
  );
}