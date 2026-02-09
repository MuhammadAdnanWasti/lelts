import CTA from "../components/Home/CTA";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";


export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}
