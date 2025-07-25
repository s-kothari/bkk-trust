import React from "react";
import { womensPrograms } from "./programs";
import ProgramCard from "./components/ProgramCard";
import Hero from "./components/Hero";
import HeroGrid from "./components/HeroGrid";

const WomensPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="Empowering Women"
        subtitle="Kothari Mahila Sahayata Kendra"
        image="/impact/womens_sewing.png"
      />
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-4 text-lg text-gray-600">
              Our core mission is to uplift and empower women, providing them
              with the skills and confidence to achieve financial independence
              and a dignified life.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {womensPrograms.map((program) => (
              <ProgramCard key={program.title} program={program} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensPage;
