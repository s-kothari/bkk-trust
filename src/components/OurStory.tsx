import React from "react";
import { Building, Target, ImageIcon } from "lucide-react";

const benefactors = [
  {
    name: "Emrusa Ltd.",
    image: "/logos/Emrusa.png",
    link: "https://www.emrusa.net/",
  },
  { name: "Universal Gems Hong Kong", image: "", link: "" },
  { name: "Modern Group", image: "", link: "" },
  { name: "Apex Diamonds", image: "", link: "" },
  // {
  //   name: "KGK",
  //   image: "/logos/KGK_Group_logo.png",
  //   link: "https://www.kgkgroup.com/",
  // },
  {
    name: "Surana Jewellers",
    image: "/logos/surana_jewellers.avif",
    link: "https://www.suranajewellersofjaipur.com/",
  },
  {
    name: "KLJ Group",
    image: "/logos/KJLNEW.png",
    link: "https://kljgroup.com/",
  },
];

const OurStory: React.FC = () => {
  return (
    <div className="bg-amber-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Rooted in decades of family experience in gemstone trading, the
            Bhimraj Kamlawati Kothari (BKK) Trust grew from a simple hope: to
            support local women and children in finding their own strengths and
            opportunities.
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
                Hailing from the K.G. Kothari family of Jaipur, Bhimraj Kothari
                was a pioneering Marwari entrepreneur who spent a lifetime
                trading gemstones across Hong Kong, South America, Bangkok,
                Bombay, and the USA.
              </p>
              <p className="mt-8 text-lg text-gray-600">
                Bhimraj and Kamlawati Kothari believed that business success
                meant little without giving back. Over the years, their work in
                jewelry markets around the world deepened their respect for the
                everyday challenges people face—and their conviction that even
                small efforts can make a real difference.
              </p>
            </div>
          </div>
          <figure>
            <img
              className="h-96 w-full rounded-2xl bg-gray-200 object-cover object-top sm:h-[500px] lg:h-auto"
              src="/daddy_work.jpg"
              alt="Founder Bhimraj Kothari"
            />
            <figcaption className="mt-3 text-sm text-center leading-6 text-gray-500">
              Bhimraj Kothari at his Hong Kong trading office
            </figcaption>
          </figure>
        </div>

        {/* Vision into Reality */}
        <div className="mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <figure className="order-last lg:order-first">
            <img
              className="h-96 w-full rounded-2xl bg-gray-200 object-cover sm:h-[500px] lg:h-auto"
              src="/maa_daddy_kothari_house.jpg"
              alt="The Kothari House"
            />
            <figcaption className="mt-3 text-sm text-center leading-6 text-gray-500">
              Left: Bhimraj Kothari, right: Kamlawati Kothari circa 2001
            </figcaption>
          </figure>
          <div className="lg:pl-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-amber-600">
                Vision into Action
              </p>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A Promise Fulfilled
              </h3>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                When Bhimraj’s health no longer allowed him to continue,
                Kamlawati felt a strong pull to honor their shared wish. In
                December 2010, she founded the Bhimraj Kamlawati Kothari Trust.
              </p>
              <p className="mt-8 text-lg text-gray-600">
                Although their journeys carried them across continents, Bhimraj
                and Kamlawati always felt a special bond with their hometown of
                Jaipur. With Kamlawati’s steady guidance, the BKK Trust has
                returned that love by focusing its efforts right here—listening
                closely to local women and girls, then offering vocational
                workshops, small grants, and mentorship that reflect the needs
                and dreams of our own community.
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
              Donors
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              We are grateful for the generous support of our partners and
              benefactors who make our work possible.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {benefactors.map((benefactor) =>
              benefactor.link ? (
                <a
                  key={benefactor.name}
                  href={benefactor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-24 w-full items-center justify-center border border-gray-200 bg-white p-4 transition-shadow hover:shadow-lg"
                >
                  {benefactor.image ? (
                    <img
                      src={benefactor.image}
                      alt={benefactor.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-center font-semibold text-gray-700">
                      {benefactor.name}
                    </span>
                  )}
                </a>
              ) : (
                <div
                  key={benefactor.name}
                  className="flex h-24 w-full items-center justify-center border border-gray-200 bg-white p-4"
                >
                  {benefactor.image ? (
                    <img
                      src={benefactor.image}
                      alt={benefactor.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-center font-semibold text-gray-700">
                      {benefactor.name}
                    </span>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
