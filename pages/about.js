import Head from "next/head";
import React from "react";
import AboutUs from "../components/AboutPage/aboutUs";
import Hero from "../components/AboutPage/hero";
import Leadership from "../components/AboutPage/leadership";
import Vision from "../components/AboutPage/vision";
import CommunitySection from "../components/HomePage/communitySection";
import Navbar from "../components/Navbar";
import NewsSection from "../components/newsSection";

export default function About() {
  return (
    <>
      <Head>
        <title>Who we are</title>
        <meta name="description" content="About Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar transparent />
      <Hero />
      <AboutUs />
      <Vision />
      <Hero />
      <Leadership />
      <NewsSection />
      <CommunitySection />
    </>
  );
}
