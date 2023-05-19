import Link from "next/link";
import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <header className="p-4 grid items-center grid-cols-2">
      <Link href={"/"} className="font-title text-4xl">
        GLC
      </Link>
      <nav className="ml-auto">
        <ol className="flex justify-between">
          <li>
            <HeaderButton href="test" text="test" />
          </li>
        </ol>
      </nav>
    </header>
  );
}
