import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      message,
    };

    //   // console.log(data);
    //   axios
    //     .post("/api/contactApi", data)
    //     .then((res) => console.log(res))
    //     .catch((err) => console.error(err));
    // };
    fetch("/api/contactApi", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response recieved");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <ContactUs />
    </>
  );
}
