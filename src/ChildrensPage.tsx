import React from "react";
import { childrensPrograms } from "./programs";
import ProgramCard from "./components/ProgramCard";
import Hero from "./components/Hero";

const ChildrensPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="Programs for Children"
        subtitle="Nurturing underprivileged youth to build a brighter future."
        image="/impact/childrens_art_class.png"
      />
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-4 text-lg text-gray-600">
              At BKK Trust, we believe children are the architects of our
              future. We are dedicated to nurturing underprivileged youth,
              providing them with a foundation to thrive.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {childrensPrograms.map((program) => (
              <ProgramCard key={program.title} program={program} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildrensPage;
