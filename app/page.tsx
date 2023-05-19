import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-emerald-400 h-screen">
        <div className="flex justify-center gap-4 p-4 items-center">
          <div className="relative w-40 aspect-square">
            <Image src={"/images/clover.svg"} alt="Clover Icon" fill={true} />
          </div>
          <p className="font-title uppercase text-8xl leading-[0.75em]">
            Good Luck
            <br />
            Collective
          </p>
        </div>
      </section>
    </main>
  );
}
