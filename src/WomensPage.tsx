import React from "react";
import { womensPrograms } from "./programs";

const WomensPage: React.FC = () => {
  return (
    <div className="bg-amber-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Programs for Women
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our core mission is to uplift and empower women by providing them
            with education, vocational skills, and a supportive community to
            help them achieve financial independence and a dignified life.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {womensPrograms.map((program: any) => (
              <div key={program.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                  {program.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {program.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default WomensPage;
