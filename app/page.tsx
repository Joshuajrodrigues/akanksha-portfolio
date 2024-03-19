import Card from "@/components/card";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navmenu from "@/components/navmenu/navmenu";
import PageTitle from "@/components/pageTitle";
import TypeText from "@/components/typewriter/typeText";
import Accent from "@/components/typography/accent";
import Typography from "@/components/typography/typography";


export default function Home() {
  return (
    <main className=" m-8 flex  flex-col">
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
      </section>
      {/* <Typography>
          This is a showcase of my professional and personal work. i hope you
          enjoy it.
        </Typography> */}
      <section className="mt-8 min-h-svh ">
        <PageTitle title="Projects" />
        <div className="flex flex-col justify-center items-center space-y-4">

          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="mt-8 min-h-svh flex flex-col justify-between items-center">
        <div>

          <PageTitle title="SAY Hello!" />
          <Typography>
            get in touch for any inquiries or just come say hi and we can discuss some cool things.
          </Typography>
        </div>
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
