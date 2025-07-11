import React from "react";
import { Building, Gem, Users, Target, ImageIcon } from "lucide-react";

const benefactors = [
  { name: "Emrusa Ltd.", image: "" },
  { name: "Universal Gems Hong Kong", image: "" },
  { name: "KGK", image: "" },
  { name: "Surana Jewellers", image: "" },
  { name: "Surana Motors", image: "" },
  { name: "Benefactor 6", image: "" },
];

const OurStory: React.FC = () => {
  return (
    <div className="bg-amber-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From a global legacy in gemstone trading to a grassroots movement
            for women's empowerment, the Bhimraj Kamlawati Kothari (BKK) Trust
            is built on a foundation of vision, resilience, and community.
          </p>
        </div>

        {/* Founders' Story */}
        <div className="mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-amber-600">
                A Shared Dream
              </p>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Kothari Legacy
              </h3>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                The story of the BKK Trust begins with the storied K.G. Kothari
                family of Jaipur. A pioneering Marwari businessman, the late
                Bhimraj Kothari spent a lifetime trading gemstones across Hong
                Kong, South America, Bangkok, Bombay, and the USA.
              </p>
              <p className="mt-8 text-lg text-gray-600">
                His global journeys shaped a deep understanding of communities
                and a desire to give back. He and his wife, Kamlawati Kothari,
                shared a profound vision: to uplift and empower women in their
                own community, providing them with the tools for a self-reliant
                and dignified life.
              </p>
            </div>
          </div>
          <div className="h-96 w-full rounded-2xl bg-gray-200 object-cover sm:h-[500px] lg:h-auto flex items-center justify-center">
            <Gem className="h-24 w-24 text-gray-400" />
            <span className="sr-only">Image placeholder for the founders</span>
          </div>
        </div>

        {/* Vision into Reality */}
        <div className="mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="h-96 w-full rounded-2xl bg-gray-200 object-cover sm:h-[500px] lg:h-auto flex items-center justify-center order-last lg:order-first">
            <Users className="h-24 w-24 text-gray-400" />
            <span className="sr-only">
              Image placeholder for the Trust's work
            </span>
          </div>
          <div className="lg:pl-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-amber-600">
                Vision into Action
              </p>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A Promise Fulfilled
              </h3>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Though Bhimraj ji could not see their dream realized due to ill
                health, Kamlawati ji resolved to turn their shared vision into a
                tangible reality. On December 15th, 2010, she founded the BKK
                Trust.
              </p>
              <p className="mt-8 text-lg text-gray-600">
                As Trustee and Director, Kamlawati ji has guided the
                organization to become a beacon of hope, working for the
                betterment of women, girls, and young children. Her unwavering
                commitment and generosity have empowered countless individuals
                to build a better future.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission & Impact */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-4xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission & Impact
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              We empower women and children through education and vocational
              training, fostering confidence and the skills needed to thrive.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                  <Building className="h-6 w-6 text-white" />
                </div>
                From 2 to 175 Students
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                What began with just two students has grown into a thriving
                institute serving nearly 175 individuals, a testament to the
                community's trust and our impactful programs.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                  <Target className="h-6 w-6 text-white" />
                </div>
                Community Transformation
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                The empowerment of the women at our institute has had a ripple
                effect, contributing to the dramatic development and
                modernization of the surrounding area.
              </dd>
            </div>
          </dl>
        </div>

        {/* Benefactors Section */}
        <div className="mx-auto mt-16 max-w-7xl sm:mt-24 lg:mt-32">
          <div className="text-center">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Supporters
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              We are grateful for the generous support of our partners and
              benefactors who make our work possible.
            </p>
          </div>
          <div className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
              {benefactors.map((benefactor, index) => (
                <li key={index}>
                  <div className="flex h-20 w-40 items-center justify-center rounded-md border border-gray-200 bg-white p-4">
                    <ImageIcon className="h-12 w-12 text-gray-300" />
                    <span className="sr-only">{benefactor.name}</span>
                  </div>
                </li>
              ))}
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll"
              aria-hidden="true"
            >
              {benefactors.map((benefactor, index) => (
                <li key={index}>
                  <div className="flex h-20 w-40 items-center justify-center rounded-md border border-ray-200 bg-white p-4">
                    <ImageIcon className="h-12 w-12 text-gray-300" />
                    <span className="sr-only">{benefactor.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
