import Link from "next/link";

export default function HeaderButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="border-2 py-2 px-4 text-2xl font-medium border-black rounded-full"
    >
      {text}
    </Link>
  );
}
