import { ThreeCanvas } from "@/components/Canvas";
import Customizer from "@/components/Customizer";
import { Inter } from "next/font/google";
import "../style.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main id="root" className={`h-screen w-screen ${inter.className}`}>
      <div className="absolute top-3 left-3 font-bold text-3xl">
        Paper Bag Customizer
      </div>
      <ThreeCanvas />
      <Customizer />
    </main>
  );
}
