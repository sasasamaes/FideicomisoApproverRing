'use client';

import Bounded from '@/components/Bounded';

export default function Home() {
  return (
    <Bounded center={true}>
      <div className="flex flex-col justify-center items-center w-full h-full mt-0 md:mt-20 gap-4">
        <h1 className="flex flex-col items-center">
          +{' '}
          <span className="text-[40px] md:text-[80px] font-bold text-primary_green">
            Revolutionary{' '}
          </span>
          <span className="text-[40px] md:text-[80px] text-white">Farmers</span>
          +{' '}
        </h1>
        <p className="text-[16px] md:text-[20px] w-full md:max-w-[60%] text-white text-center">
          Escrows for the field of agriculture, and with the objective of
          benefiting farmers as well as the buyers of the products grown.
        </p>
      </div>
    </Bounded>
  );
}
