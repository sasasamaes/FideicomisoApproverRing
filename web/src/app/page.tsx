"use client";

import Bounded from "@/components/Bounded";

export default function Home() {
  return (
    <Bounded center={true}>
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-full mt-0 md:mt-20 gap-10">
        <h1 className="text-5xl md:text-6xl font-bold">
          Revolutionary Farmers
        </h1>
        <hr className="hidden md:block bg-gray-200 w-0.5 h-96" />
        <p className="text-xl">
          <strong>Escrows</strong> for the field of <strong>agriculture</strong>, <br />
          and with the objective of <strong>benefiting farmers</strong> <br />
          as well as the buyers of the products grown.
        </p>
      </div>
    </Bounded>
  );
}
