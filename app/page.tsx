import About from "@/components/about";
import InfoLayout from "@/components/infoLayout";
import Navbar from "@/components/navbar";
import Paragraph from "@/components/paragraph";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col  items-center justify-center  text-black">
        <InfoLayout>
          <About />
        </InfoLayout>
        <InfoLayout>
          <Projects/>
        </InfoLayout>

    
      </main>
    </>
  );
}
