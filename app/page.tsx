import Navmenu from "@/components/navmenu/navmenu";
import TypeText from "@/components/typewriter/typeText";
import Accent from "@/components/typography/accent";
import Typography from "@/components/typography/typography";

export default function Home() {
  return (
    <main className=" m-8 flex h-svh flex-col">
      <div>
        <Navmenu />
      </div>
      <header className="mt-8 flex h-24 w-full flex-col justify-center p-2 text-start">
        <TypeText hideCursor={true} text="HELLO!" />
        <TypeText delay={1} />
      </header>
      <section className="mt-8">
        <Typography>
          i&apos;m a <Accent>uiux designer</Accent> passionate about crafting
          and <Accent>exploring experiences</Accent> that stay with you.
        </Typography>
        {/* <Typography>
          This is a showcase of my professional and personal work. i hope you
          enjoy it.
        </Typography> */}
      </section>
    </main>
  );
}
