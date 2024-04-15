
import { Connect } from "./components/connect";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Technologies } from "./components/technologies";
export default function Home() {
  return (
    <main>
      <Hero />
      <Technologies/>
      <Projects/>
      <Connect/>
    </main>
  );
}

