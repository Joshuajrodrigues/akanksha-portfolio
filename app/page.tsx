import About from "@/components/about";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col h-svh items-center justify-center  text-black">
      <About/>
      </main>
    </>
  );
}
