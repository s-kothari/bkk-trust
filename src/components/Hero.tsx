import React from "react";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative h-64 sm:h-[70vh]">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, 100vw"
        className="object-cover"
        priority
      />
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
      <div className="relative mx-auto max-w-7xl px-2 lg:px-8 flex h-full items-end justify-left">
        <div>
          <h1 className="text-lg sm:font-light uppercase sm:tracking-wide text-black sm:text-3xl bg-[#fbbf24] sm:p-8 px-4 py-2 mb-2 rounded-full">
            {title}
          </h1>
          {/* {subtitle && (
            <p className="mt-4 text-xl bg-page-background p-4">{subtitle}</p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
