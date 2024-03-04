
import { Connect } from "./components/connect";
import { Hero } from "./components/hero";
import { Technologies } from "./components/technologies";
export default function Home() {
  return (
    <main className="mb-40">
      <Hero />
      <Technologies/>
      <Connect/>
    </main>
  );
}

