import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Successful() {
  return (
    <div className="w-full h-screen flex flex-col gap-8 justify-center items-center">
      <Link href="/">
        <a className="hidden lg:flex lg:items-center">
          <Image
            width={45}
            height={71}
            color="black"
            src="/images/Asset2.png"
            alt="Muntaha Foundation"
          />
          <Image
            width={128}
            height={71}
            src="/images/Asset1.png"
            alt="Muntaha Foundation"
          />
        </a>
      </Link>
      <h1 className="font-semibold text-xl">Thanks for your Donation!</h1>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: { noLayout: true },
  };
}
