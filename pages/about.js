import Head from "next/head";
import React from "react";
import AboutUs from "../components/AboutPage/aboutUs";
import HumanResource from "../components/AboutPage/humanResource";
import Vision from "../components/AboutPage/vision";
import CommunitySection from "../components/HomePage/communitySection";
import Navbar from "../components/Navbar";
import NewsSection from "../components/newsSection";
import Header from "../components/HomePage/header";

export default function About() {
  return (
    <>
      <Head>
        <title>Who we are</title>
        <meta name="description" content="About Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar transparent />
      <Header />
      <AboutUs />
      <Vision />
      <HumanResource />
      <NewsSection />
      <CommunitySection />
    </>
  );
}
