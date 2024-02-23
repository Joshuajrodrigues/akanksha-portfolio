import Navbar from "@/components/navbar";
import Paragraph from "@/components/paragraph";
import Image from "next/image";
import img from "@/public/evening-sky.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col h-svh items-center justify-center  text-black">
        <section className="w-full mt-8 p-8 items-center justify-center">
          <div className="grid grid-cols-2 ">
            <div className="grid grid-cols-2">
              <Paragraph className="col-span-2 text-balance p-4">
                im an experienced ui ux designer & art director passionate about
                crafting creative digital experiences.
              </Paragraph>
              <div></div>
              <Paragraph className="text-balance p-4">
                im a ui ux designer & art director passionate about crafting
                creative digital experiences.
              </Paragraph>
            </div>
            <Image src={img} alt="evening sky" placeholder="blur" />
          </div>
        </section>
      </main>
    </>
  );
}
