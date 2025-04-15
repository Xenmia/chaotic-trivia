import Link from "next/link";

interface Props {
  children?: React.ReactNode;
}

const StartButton: React.FC<Props> = ({ children }) => {
  return (
    <Link
      className="w-46 h-32 cursor-pointer bg-[#ffd900d0] hover:scale-105 transition-all active:scale-95 duration-150 
      bg-[url(./pictures/play.png)] bg-contain bg-no-repeat bg-center"
      href="/trivia"
    >
      {children}
    </Link>
  );
};

export default StartButton;
