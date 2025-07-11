import React from "react";
import { Link } from "react-router-dom";
import { childrensPrograms, womensPrograms } from "./programs";
import CommunityMap from "./components/CommunityMap";

const ImpactPage: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Impact
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are dedicated to creating lasting change by empowering the most
            vulnerable members of our community in Jaipur, Rajasthan. Our
            programs are designed to provide not just skills, but also the
            confidence and support system needed to build a self-reliant future.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8 sm:mt-12">
        <CommunityMap backgroundColor="#FEFCE8" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Women's Programs Section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Women for a Brighter Future:
            </h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl italic">
              Kothari Mahila Sahayata Kendra
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our core mission is to uplift and empower women, providing them
              with the skills and confidence to achieve financial independence
              and a dignified life.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {womensPrograms.slice(0, 3).map((program: any) => (
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
          <div className="mt-12 text-center">
            <Link
              to="/impact/women"
              className="text-amber-600 hover:text-amber-800 font-semibold"
            >
              Learn About Our Women's Empowerment Initiatives &rarr;
            </Link>
          </div>
        </div>

        {/* Children's Programs Section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Investing in the Next Generation
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              At BKK Trust, we believe children are the architects of our
              future. We are dedicated to nurturing underprivileged youth,
              providing them with a foundation to thrive. Our support extends to
              boys up to the age of 12, while girls can continue with us for as
              long as they need.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {childrensPrograms.map((program: any) => (
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
          <div className="mt-12 text-center">
            <Link
              to="/impact/children"
              className="text-amber-600 hover:text-amber-800 font-semibold"
            >
              Explore All Children's Courses &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;
