import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 page</title>
        <meta name="description" content="About Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="h-screen mx-40 text-2xl font-semibold text-purple-800">
        404! Page Not Found!
      </div>
    </>
  );
}
