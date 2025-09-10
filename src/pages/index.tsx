import Head from "next/head";
import Hero from "@/components/sections/Hero";
import Offers from "@/components/sections/Offers";
import Featured from "@/components/sections/Featured";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>LDPG</title>
        <meta
          name="description"
          content="A representative rebuild of ldpg.co.uk using Next.js and Tailwind."
        />
      </Head>
      <div className="flex flex-col bg-[url('/images/what-we-offer-bg1.jpg')] bg-center">
        <Hero />
      </div>
      <div className="max-w-5xl mx-auto">
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-4xl text-center text-[var(--color-sub-green)] font-semibold mb-8">
            What we offer
          </h2>
          <Offers />
        </section>
      </div>
      <div className="max-w-5xl mx-auto">
        <section className=" mx-auto px-4 py-16">
          <h2 className="text-5xl font-semibold mb-8 text-[var(--color-sub-green)] font-[var(--font-overpass)] font-400">
            Featured Works
          </h2>
          <p className="text-[var(--color-sub-green)] mb-8 font-[var(--font-overpass)] font-light">
            Our portfolio includes a wide range of projects
          </p>
          <Featured />
        </section>
      </div>
      <Experience />
    </>
  );
}
