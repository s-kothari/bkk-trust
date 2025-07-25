import React from "react";
import { PAGE_BACKGROUND_COLOR } from "../colors";

interface HeroGridProps {
  title: string;
  subtitle?: string;
  images: string[];
}

const HeroGrid: React.FC<HeroGridProps> = ({ title, subtitle, images }) => {
  return (
    <div className="relative h-64 sm:h-[70vh]">
      {images.length > 1 ? (
        <div className="absolute inset-0 h-64 sm:h-[70vh] w-full grid grid-cols-2 sm:grid-cols-3">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} collage ${index + 1}`}
              className="h-64 sm:h-[70vh] w-full object-cover"
            />
          ))}
        </div>
      ) : (
        <img
          src={images[0]}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex h-full items-end justify-left">
        <div>
          <h1 className="text-lg sm:font-light uppercase sm:tracking-wide text-black sm:text-3xl bg-[#fbbf24] sm:p-8 p-4 mb-4 rounded-full">
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

export default HeroGrid;
