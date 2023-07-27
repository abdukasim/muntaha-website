import Head from "next/head";
import React from "react";
import Hero from "../components/AboutPage/hero";
import Activities from "../components/ActivityPage/activities";
import ActivityVisuals from "../components/ActivityPage/activityVisuals";
import CommunitySection from "../components/HomePage/communitySection";
import Navbar from "../components/Navbar";
import NewsSection from "../components/newsSection";

export default function Activity() {
  return (
    <>
      <Head>
        <title>What we do</title>
        <meta name="description" content="Activities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar transparent />
      <Hero />
      <Activities />
      <ActivityVisuals />
      <NewsSection />
      <CommunitySection />
    </>
  );
}
