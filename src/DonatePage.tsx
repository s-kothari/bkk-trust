import React from "react";
import { Link } from "react-router-dom";
import DonationInquiryForm from "./components/DonationInquiryForm";

const DonatePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Build Futures with BKK Trust
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your contribution empowers women and children in Jaipur to build
              self-reliant futures. By helping them overcome barriers and
              providing access to education and skills, you create opportunities
              for growth and self-sufficiency.
            </p>
            <div className="mt-10">
              <a
                href="#donate-form"
                className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Overview Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Support Can Change Lives
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Together, we can transform lives by empowering the most vulnerable
            members of our community. Your donation provides not just skills,
            but also the confidence and support system needed to build a
            brighter future.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          {/* Women's Empowerment */}
          <div className="rounded-2xl p-8 ring-1 ring-inset ring-gray-200">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Empower Women to Learn and Thrive
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Our core mission is to uplift women by providing them with
              education, vocational skills, and a supportive community. We help
              them achieve financial independence and lead dignified lives. Your
              support can provide literacy programs, computer classes, and
              training in stitching, mehendi art, and more.
            </p>
            <p className="mt-6 font-semibold text-amber-600">
              Support education for women and girls.
            </p>
          </div>

          {/* Children's Future */}
          <div className="rounded-2xl p-8 ring-1 ring-inset ring-gray-200">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Invest in the Next Generation
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              We believe every child deserves the chance to succeed. We provide
              underprivileged children with academic support, digital literacy,
              and a nurturing environment. Your donation can sponsor a child's
              education or provide them with vocational skills for a brighter
              future.
            </p>
            <p className="mt-6 font-semibold text-amber-600">
              Help a child learn and grow.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/impact"
            className="text-lg font-semibold leading-6 text-amber-600 hover:text-amber-800"
          >
            Your donation enables us to create impact. See what we do with
            donations <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      <DonationInquiryForm />
      {/* Donation Form Section */}
      <div id="donate-form" className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to make a donation?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Your generosity makes our work possible. All donations are tax
              deductible to the extent of 50% under section 80G of the Income
              Tax Act.
            </p>
          </div>

          <div className="mt-16 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
              Bank Transfer Details
            </h3>
            <p className="mt-4 text-gray-600 text-center">
              You can donate directly to our bank account. A receipt will be
              mailed to you upon receiving the funds.
            </p>
            <div className="mt-8 flow-root">
              <dl className="-my-4 divide-y divide-gray-200 text-sm">
                <div className="flex flex-col items-start justify-between py-4 sm:flex-row sm:items-center">
                  <dt className="font-medium text-gray-900">Bank Name</dt>
                  <dd className="font-medium text-gray-700 sm:text-right">
                    IDBI BANK
                  </dd>
                </div>
                <div className="flex flex-col items-start justify-between py-4 sm:flex-row sm:items-center">
                  <dt className="font-medium text-gray-900">Account Name</dt>
                  <dd className="font-medium text-gray-700 sm:text-right">
                    Bhimraj Kamlawati Kothari Charitable Trust
                  </dd>
                </div>
                <div className="flex flex-col items-start justify-between py-4 sm:flex-row sm:items-center">
                  <dt className="font-medium text-gray-900">Account Number</dt>
                  <dd className="font-medium text-gray-700 sm:text-right">
                    0013102000082244
                  </dd>
                </div>
                <div className="flex flex-col items-start justify-between py-4 sm:flex-row sm:items-center">
                  <dt className="font-medium text-gray-900">IFSC Code</dt>
                  <dd className="font-medium text-gray-700 sm:text-right">
                    IBKL0000013
                  </dd>
                </div>
                <div className="flex flex-col items-start justify-between py-4 sm:flex-row sm:items-center">
                  <dt className="font-medium text-gray-900">SWIFT Code</dt>
                  <dd className="font-medium text-gray-700 sm:text-right">
                    IBKLINBB013
                  </dd>
                </div>
                <div className="flex flex-col items-start justify-between py-4 sm:flex-row sm:items-center">
                  <dt className="font-medium text-gray-900">Branch</dt>
                  <dd className="font-medium text-gray-700 sm:text-right">
                    D-24, Durlabh Niwas, C-Scheme, Jaipur 302001
                  </dd>
                </div>
              </dl>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                <strong>Registration Number:</strong> E-33811 (M)
              </p>
              <p className="text-sm text-gray-500 mt-2">
                For any queries, please feel free to{" "}
                <a
                  href="/contact"
                  className="text-amber-600 hover:text-amber-800"
                >
                  contact us
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
