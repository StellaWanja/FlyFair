import Image from "next/image";
import React from "react";

import Form from "./Form";

function LandingPage() {
  return (
    <section className="px-0 sm:px-12 lg:px-24 h-screen bg-white">
      <div className="relative aspect-square w-full h-4/5 mt-8 rounded-md">
        <Image
          src={"/hero.jpg"}
          alt="Hero image"
          fill
          className="rounded-none sm:rounded-4xl object-cover"
        />
        <div className="absolute top-12 sm:top-1/2 sm:-translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto text-center px-4">
          <div className="text-white">
            <h3 className="font-semibold text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading opacity-90 leading-snug sm:leading-tight">
              Soar To New Heights
            </h3>
            <p className="font-semibold text-xl lg:text-2xl font-heading opacity-90">
              Exclusive flight deals await!
            </p>
          </div>
          <div className="mt-12">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
