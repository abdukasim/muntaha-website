import React from "react";

export default function DonationButton({ text }) {
  return (
    <button className="py-4 md:py-7 sm:px-7 md:px-8 bg-gray-200 rounded-md">
      <p className="text-center text-xs sm:text-base">{text}</p>
    </button>
  );
}
