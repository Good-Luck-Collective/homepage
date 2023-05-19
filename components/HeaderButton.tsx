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
      className="py-2 px-4 text-xl tracking-wide lowercase text-slate-900 bg-white rounded-full"
    >
      {text}
    </Link>
  );
}
