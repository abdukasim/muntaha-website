import Head from "next/head";
import AboutSection from "../components/HomePage/aboutSection";
import ActivitySection from "../components/HomePage/activitySection";
import CommunitySection from "../components/HomePage/communitySection";
import DonationSection from "../components/HomePage/donationSection";
import Header from "../components/HomePage/header";
import NewsSection from "../components/newsSection";
import StatSection from "../components/HomePage/statSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Muntaha Foundation</title>
        <meta name="description" content="A hunger free Ethiopia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        className="md:flex md:flex-col hero-pattern  bg-center lg:bg-no-repeat bg-cover"
        style={{ height: "90vh" }}
      >
        <Navbar transparent />
        <Header />
      </header>
      <AboutSection />
      <ActivitySection />
      <StatSection />
      <DonationSection />
      <NewsSection />
      <CommunitySection />
    </div>
  );
}
