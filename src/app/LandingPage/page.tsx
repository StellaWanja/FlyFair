import Image from "next/image";
import React from "react";

import Form from "./Form";
import About from "./About";

function LandingPage() {
  return (
    <main className="bg-gray-50">
      <section className="relative h-screen w-full rounded-md px-0 sm:px-12 lg:px-24">
        <div className="h-full w-full">
          <Image
            src={"/hero.jpg"}
            alt="Hero image"
            className="rounded-none sm:rounded-4xl object-cover w-full h-full"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
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
      </section>

      <About />
    </main>
  );
}

export default LandingPage;
