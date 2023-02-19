import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({ type, isLoading, onClick }: ButtonProps) {
  const loading = () => {
    return (
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      </div>
    );
  };

  return (
    <>
      <button
        type={type}
        className="bg-black hover:bg-zinc-800 text-white font-bold py-1 px-3 rounded"
      >
        {isLoading ? loading() : <MagnifyingGlassIcon className="h-5 w-5" />}
      </button>
    </>
  );
}
