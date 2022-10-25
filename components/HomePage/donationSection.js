import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 } from "uuid";

export default function DonationSection() {
  const [amount, setAmount] = useState(0);
  const [donationInterval, setDonationInterval] = useState("once");
  const [message, setMessage] = useState(undefined);
  const donationAmounts = [
    { name: "Br.50", value: 50 },
    { name: "Br.100", value: 100 },
    { name: "Br.500", value: 500 },
    { name: "Br.1000", value: 1000 },
  ];

  const startPayment = () => {
    const tx_ref = v4();
    axios
      .post("/api/chapaPay", { amount, tx_ref })
      .then((res) => {
        location.assign(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    setAmount(Number(event.target.value));
  };

  return (
    <section
      className="donation-section donation-pattern-sm md:donation-pattern-lg bg-no-repeat bg-cover"
      id="donate"
    >
      <div className="flex flex-col xl:flex-row xl:justify-between">
        <div className="px-10 pt-16 pb-10 md:py-28 md:pl-20 xl:pl-44  md:bg-inherit flex items-start flex-col w-full md:w-max">
          <h2 className="font-black text-3xl text-white mb-2">Get Involved.</h2>
          <h2 className="font-black text-3xl text-white mb-6">Donate Now.</h2>
          <p className="mb-6 pb-3 font-light text-base text-white md:text-2xl md:about-p-sm">
            Blandit vel tortor facilisis quam turpis condimentum aliquam. Donec
            molestie suspendisse erat et. Morbi habitant a massa arcu, varius
            facilisis egestas. Facilisis sollicitudin neque amet placerat et
            congue suspendisse. Eget sed arcu ac amet auctor at maecenas.
            Egestas ut purus, dui quis ut. Sed et aenean amet malesuada
          </p>
        </div>
        <div className="xl:mt-20 md:mx-14">
          <div className="flex flex-row items-center justify-center mb-6 mx-10 ">
            <button
              className={`py-3 w-full ${
                donationInterval === "once"
                  ? "bg-purple-500 text-white"
                  : "bg-white"
              }  uppercase rounded-tl-md rounded-bl-md`}
              onClick={() => setDonationInterval("once")}
            >
              give once
            </button>
            <button
              className={`py-3 w-full ${
                donationInterval === "monthly"
                  ? "bg-purple-500 text-white"
                  : "bg-white"
              } uppercase rounded-br-md rounded-tr-md`}
              onClick={() => setDonationInterval("monthly")}
            >
              monthly
            </button>
          </div>
          <div className="flex flex-col mx-10 mb-16">
            <div className="bg-gray-200 rounded-tr-md rounded-tl-md py-5 md:px-18">
              <p className="font-medium text-base sm:text-xl md:text-2xl text-center">
                Choose an amount to give per month
              </p>
            </div>
            <div className="bg-white rounded-br-md rounded-bl-md grid grid-cols-3 gap-4 p-5 md:p-8">
              {donationAmounts.map((amount) => (
                <button
                  className="py-4 md:py-7 sm:px-7 md:px-8 bg-gray-200 hover:bg-gray-400 focus:bg-gray-400 rounded-md"
                  key={amount.value}
                  onClick={() => {
                    setAmount(amount.value);
                    setMessage("");
                  }}
                >
                  <p className="text-center text-xs sm:text-base">
                    {amount.name}
                  </p>
                </button>
              ))}
              <input
                className="py-4 md:py-7 sm:px-7 md:px-8 bg-gray-200 rounded-md col-span-2 placeholder:text-center placeholder:text-xs placeholder:sm:text-base placeholder:text-black"
                placeholder="Other Amount"
                type="text"
                name="message"
                onChange={handleChange}
              />
              <small className="w-max text-red-500">{message && message}</small>
              <button
                className="col-span-3 py-4 px-14 md:px-18 bg-purple-500 text-white uppercase rounded-md"
                onClick={() => {
                  amount ? startPayment() : setMessage("Please select amount");
                }}
              >
                donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
