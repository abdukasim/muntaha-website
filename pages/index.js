import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/aboutSection";
import ActivitySection from "../components/activitySection";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Muntaha Foundation</title>
        <meta name="description" content="A hunger free Ethiopia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <AboutSection />
      <ActivitySection />
    </div>
  );
}
