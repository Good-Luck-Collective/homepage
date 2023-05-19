import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-emerald-400 grid h-screen">
        <div className="flex gap-8 mx-auto">
          <div className="relative w-40 aspect-square">
            <Image src={"/images/clover.svg"} alt="Clover Icon" fill={true} />
          </div>
          <p className="font-title p-4 uppercase text-8xl leading-[0.75em]">
            Good Luck
            <br />
            Collective
          </p>
        </div>
      </section>
    </main>
  );
}
