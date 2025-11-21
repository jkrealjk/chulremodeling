import { Header, Footer } from "@/components";
import { Hero, About, Projects, Contact } from "@/components/sections";

export default function Practwo() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
