import StartButton from "@/app/components/StartButton";

export default function Home() {
  console.log("Updated Page");
  return (
    <div className="flex flex-col items-center justify-evenly w-[100vw] h-[100vh] bg-orange-950">
      <h1 className="text-5xl font-bold text-amber-400">Chaos Trivia</h1>
      <StartButton></StartButton>
      <div className="flex flex-row justify-evenly w-[100vw] *:text-4xl *:font-bold *:text-amber-500">
        <h1>High Score: 00 pt</h1>
        <h1>Last Score: 00 pt</h1>
      </div>
    </div>
  );
}
