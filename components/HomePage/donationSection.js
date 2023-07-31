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
      className="mb-12 flex flex-col items-center justify-center md:flex-row md:justify-between md:bg-brand-yellow md:px-8 md:pt-[72px] md:pb-14 lg:px-28"
      id="donate"
    >
      <div className="mb-8 flex flex-col items-center md:items-start">
        <h3 className="text-5xl font-bold text-brand-blue md:text-7xl">
          Get Involved
        </h3>
        <h3 className="text-5xl font-bold text-brand-blue md:text-7xl">
          Donate Now!
        </h3>
        <span className="mx-14 mt-4 text-center text-xs font-light  text-brand-blue md:mx-0 md:text-left md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          maiores.
        </span>
      </div>
      <div className="mx-14 rounded-3xl bg-white px-4 pt-5 shadow-xl md:mx-0">
        <div className="mb-3 flex justify-center gap-1">
          <button
            className={`w-[132px] rounded-full py-2 text-center text-sm shadow-md xl:w-[200px] xl:text-xl ${
              donationInterval === "once"
                ? "bg-brand-blue text-white"
                : "bg-white text-brand-blue"
            }`}
            onClick={() => setDonationInterval("once")}
          >
            Give Once
          </button>
          <button
            className={`w-[132px] rounded-full py-2 text-center text-sm shadow-md xl:w-[200px] xl:text-xl ${
              donationInterval === "monthly"
                ? "bg-brand-blue text-white"
                : "bg-white text-brand-blue"
            }`}
            onClick={() => setDonationInterval("monthly")}
          >
            Monthly
          </button>
        </div>
        <span className="mb-3 pl-3 text-xs text-brand-blue  xl:text-lg">
          Choose an amount to give per month
        </span>
        <div className="mb-5 rounded-3xl pt-5 shadow-xl">
          <div className="mx-3 mb-4 grid grid-cols-2 items-center gap-x-[7px] gap-y-[10px]">
            {donationAmounts.map((donationAmount) => (
              <button
                className={`h-[38px] rounded-full  text-center  text-xs shadow-md xl:h-16  xl:text-xl ${
                  amount === donationAmount.value
                    ? "bg-brand-blue text-white"
                    : "bg-brand-yellow text-brand-blue"
                }`}
                key={donationAmount.value}
                onClick={() => setAmount(donationAmount.value)}
              >
                {donationAmount.name}
              </button>
            ))}
            <button className="h-[38px] rounded-full bg-brand-yellow text-xs text-brand-blue shadow-md xl:h-16 xl:text-xl">
              Other Amount
            </button>
          </div>
          <button className="-mb-1 w-full rounded-full bg-brand-blue  py-4 text-xl text-white">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
}
