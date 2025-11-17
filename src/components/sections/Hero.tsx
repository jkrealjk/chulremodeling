import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-[calc(100dvh-5rem)]">
      <div className="grid grid-cols-2 h-full">
        <h1>Hero</h1>
        <div className="relative">
          <Image
            src="/images/hero.jpg"
            alt="Hero"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
