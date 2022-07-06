import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <section className="contact-background lg:contact-background-lg bg-no-repeat flex flex-col lg:flex-row lg:justify-center">
        <div className="flex flex-col ml-9 lg:mr-80 mt-16 lg:mt-20 mb-28">
          <h1 className="font-semibold text-5xl lg:text-8xl text-purple-500 mb-6">
            Contact us
          </h1>
          <p className="font-light text-xl mb-7 w-96 lg:w-100">
            Need to get in touch with us? Fill out the form with your inquiry or
            call us on the number provided below.
          </p>
          <small className="font-medium text-base lg:text-xl mb-5 uppercase">
            Phone - +251 11 812 5224
          </small>
          <small className="font-medium text-base lg:text-xl mb-5 uppercase">
            {" "}
            Email - muntahafoundation@gmail.com{" "}
          </small>
          <small className="font-medium text-base lg:text-xl mb-5 uppercase">
            Address - Tero. Traffic Sefer
          </small>
        </div>
        <form action="" className="mb-36 lg:mt-20">
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 ml-9 mr-7">
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="font-medium text-xs uppercase mb-2"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                className=" h-16 rounded bg-[#E4DEEB]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="font-medium text-xs uppercase mb-2"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                className=" h-16 rounded bg-[#E4DEEB]"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label
                htmlFor="email"
                className="font-medium text-xs uppercase mb-2"
              >
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className=" h-16 rounded bg-[#E4DEEB]"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label
                htmlFor="message"
                className="font-medium text-xs uppercase mb-2"
              >
                Write your message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className=" h-36 rounded bg-[#E4DEEB] mb-9"
              ></textarea>
            </div>
            <button type="submit" className="bg-purple-500 rounded">
              <p className="font-bold text-xl text-white mx-4 my-5">Submit</p>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
