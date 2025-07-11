import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

// interface Params {
//   id: any;
// }

const ContactPage: React.FC = () => {
  //   const { id } = useParams();

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We'd love to hear from you. Whether you have a question, a
            suggestion, or want to learn more about our work, please don't
            hesitate to reach out.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-2">
          {/* Contact Information */}
          <div className="flex flex-col gap-y-10">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-0 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                Email
              </dt>
              <dd className="mt-0 text-base leading-7 text-gray-600">
                <a
                  href="mailto:info@bkkotharitrust.org"
                  className="hover:text-amber-600"
                >
                  info@bkkotharitrust.org
                </a>
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                Phone
              </dt>
              <dd className=" text-base text-gray-600">
                +91-99289-55508
                <br />
                <span className="text-sm text-gray-500">
                  Ms. Indu Sharma, Manager
                </span>
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                Address
              </dt>
              <dd className="text-base text-gray-600">
                Bhimraj Kamlawati Kothari Charitable Trust
                <br />
                118 Narendra Nagar, New Sanganer Road, Sodala
                <br />
                Jaipur 302019, Rajasthan, India
              </dd>
            </div>
          </div>
          {/* Map */}
          <div className="h-96 w-full rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBdkMSVAjgjRMOeQlz1wxPtVaoRXI2417c&q=Bhimraj%20Kamlawati%20Kothari%20Charitable%20Trust%2C%20New%20Sanganer%20Road%2C%20Ward%2027%2C%20Mansarovar%20Sector%208%2C%20Sodala%2C%20Jaipur%2C%20Rajasthan%2C%20India&zoom=15"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
  //   AIzaSyBdkMSVAjgjRMOeQlz1wxPtVaoRXI2417c;
};

export default ContactPage;
