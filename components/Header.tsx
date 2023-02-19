import Logo from "../public/logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Image src={Logo} alt="Logo" width={100} height={100} />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Search Github</h1>
        <p className="text-sm">
          Search Github user with <span className="font-bold">Next.js</span>
        </p>
      </div>
    </div>
  );
}
