import Navmenu from "@/components/navmenu/navmenu";
import TypeText from "@/components/typewriter/typeText";
import Accent from "@/components/typography/accent";
import Typography from "@/components/typography/typography";

export default function Home() {
  return (
    <main className=" flex flex-col h-svh items-center justify-center">
      <Navmenu  />
      <header className="text-start w-full p-2 m-1">

      <TypeText hideCursor={true} text="Hello!"/>
      <TypeText delay={1}/>
      </header>
      <section>
      <Typography>
       i&apos;m a <Accent>uiux designer</Accent> passionate about crafting and <Accent>exploring experiences</Accent>  that stay with you.
      </Typography>
      <Typography>
      This is a showcase of my professional and personal work. i hope you enjoy it.
      </Typography>
      </section>
    </main>
  );
}
