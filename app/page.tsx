
import { Connect } from "./components/connect";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Technologies } from "./components/technologies";
export default function Home() {
  return (
    <main className="mb-80">
      <Hero />
      <Technologies/>
      <Projects/>
      <Connect/>
    </main>
  );
}

