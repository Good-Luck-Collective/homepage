import Link from "next/link";
import HeaderButton from "./HeaderButton";
import Image from "next/image";

export default function Header() {
  return (
    <header className="p-4 flex items-center">
      <Link href={"/"} className="font-title text-3xl tracking-wide">
        <div className="hover:scale-90 transition-all flex gap-2 place-items-center">
          <div className="relative w-8 aspect-square">
            <Image src={"/images/clover.svg"} alt="Clover Icon" fill={true} />
          </div>
          GLC
        </div>
      </Link>
      <nav className="ml-auto">
        <ul className="flex justify-between">
          <li className="hover:scale-90 transition-all">
            <HeaderButton href="test" text="test" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
