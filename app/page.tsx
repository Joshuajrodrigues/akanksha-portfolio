import Navmenu from "@/components/navmenu/navmenu";
import Cursor from "@/components/typewriter/cursor";
import TypeText from "@/components/typewriter/typeText";
import Accent from "@/components/typography/accent";
import Typography from "@/components/typography/typography";

export default function Home() {
  return (
    <main className=" flex flex-col h-svh items-center justify-center">
      <Navmenu />
      <TypeText/>
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
