import Head from "next/head"
import Navbar from "../components/Navbar"
import Header from "../components/HomePage/header"
import NewsSection from "../components/newsSection"
import CommunitySection from "../components/HomePage/communitySection"
import WhatWeDo from "../components/WhatWeDo"

export default function Works() {
	return (
		<div className="scroll-smooth">
      <Head>
        <title>Muntaha Foundation - A hunger free Ethiopia</title>
        <meta name="description" content="A hunger free Ethiopia" />
        <meta
          name="keywords"
          content="non-profit, charity, feeding children, feeding mothers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        className=""
        style={{ height: "93vh" }}
      >
        <Navbar transparent />
        <Header />
      </header>
			<WhatWeDo />
      <NewsSection />
      <CommunitySection />
    </div>
	)
}