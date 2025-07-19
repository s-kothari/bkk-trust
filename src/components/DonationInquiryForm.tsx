import React, { useState } from "react";

const interestOptions = [
  {
    id: "child-sponsorship",
    label: "Sponsor a Child's Schooling",
  },
  {
    id: "child-sponsorship",
    label: "Provide after school adademic support",
  },
  {
    id: "women-literacy",
    label: "Empower Women with Literacy & English Fluency",
  },
  {
    id: "vocational-training",
    label: "Provide Vocational Training (Stitching, Papier-Mâché, etc.)",
  },
  {
    id: "digital-literacy",
    label: "Support Digital Literacy for Women & Children",
  },

  {
    id: "basic-supplies",
    label:
      "Buy basic staples—flour, rice, lentils, gram flour, sugar and porridge—for our students' families.",
  },
  {
    id: "greatest-need",
    label: "Apply my donation to the area of greatest need",
  },
];

const DonationInquiryForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mailtoLink, setMailtoLink] = useState("");

  const handleInterestChange = (interestId: string) => {
    setInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Donation Inquiry from ${name}`;
    const selectedInterests = interestOptions
      .filter((option) => interests.includes(option.id))
      .map((option) => option.label);

    const body = `
Name: ${name}
Email: ${email}
Message: ${message}

Selected areas of interest:
- ${selectedInterests.join("\n- ")}
    `;
    // Replace with your organization's email address
    const generatedMailtoLink = `mailto:suyash.kothari4@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setMailtoLink(generatedMailtoLink);
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Where your money can go
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Let us know what you're passionate about. We'll get back to you with
            information on how your contribution can make a difference in your
            area of interest.
          </p>
        </div>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-16">
            <div className="space-y-6">
              <fieldset>
                <legend className="text-base font-semibold text-gray-900">
                  Areas of impact
                </legend>
                <div className="mt-4 space-y-4">
                  {interestOptions.map((option) => (
                    <div key={option.id} className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id={option.id}
                          name={option.id}
                          type="checkbox"
                          checked={interests.includes(option.id)}
                          onChange={() => handleInterestChange(option.id)}
                          className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor={option.id}
                          className="font-medium text-gray-900"
                        >
                          {option.label}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message (Optional)
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-amber-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Thank you for your inquiry!
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Please click the button below to open your default email client
              and send your message.
            </p>
            <div className="mt-10">
              <a
                href={mailtoLink}
                className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Open Email Client
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              If the button doesn't work, you can manually send an email to{" "}
              <a
                href="mailto:suyash.kothari4@gmail.com"
                className="font-semibold text-amber-600"
              >
                suyash.kothari4@gmail.com
              </a>{" "}
              with your inquiry details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationInquiryForm;
