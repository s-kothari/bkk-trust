import React from "react";
import Link from "next/link";

interface FounderMessageProps {
  heading?: string;
  message?: string;
  founderName?: string;
  founderTitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

/**
 * A concise, reusable block for the founder's message.
 * Positioned as a feature section on the homepage near hero/about content.
 */
const FounderMessage: React.FC<FounderMessageProps> = ({
  heading = "A note from our founder",
  message = `Bhimraj Kamlawati Kothari Charitable Trust was born from a simple belief:
every child and every woman deserves a safe place to learn, grow, and lead.

What started off as a small centre with just two students has, in ten years, grown to accommodate nearly 175 students, from those who come seeking a basic education to those who develop practical skills like dressmaking and computer literacy.

It brings me immense joy and satisfaction to see all the students, young and old, better equipped with skillsets, and so much more confident, making a better life for themselves and their families.

This progress has been made possible especially by the dedication of everyone at the institute—the manager Indu Sharma, the teachers, and of course, the students themselves.

We aim to continue reaching out to as many families as we can. I am indebted to family and friends who have visited and contributed in cash and kind, and hope you will also join hands with us in our efforts.`,
  founderName = "Smt. Kamlawati Kothari",
  founderTitle = "Founder & Chairperson, Bhimraj Kamlawati Kothari Charitable Trust",
  ctaHref = "/about",
  ctaLabel = "Read our story",
}) => {
  return (
    <section className="bg-white py-16 text-gray-900">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 items-center">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600 font-semibold">
              Founder&apos;s message
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight font-didact">
              {heading}
            </h2>
            <p className="text-lg leading-relaxed whitespace-pre-line">
              {message}
            </p>
            <div className="space-y-1">
              <div className="text-lg font-semibold">{founderName}</div>
              <div className="text-sm text-gray-600">{founderTitle}</div>
            </div>
            <div>
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white font-semibold shadow-lg transition hover:translate-y-[-1px] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                {ctaLabel}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-amber-200 via-amber-100 to-white p-8 shadow-xl border border-amber-100">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.25),_transparent_45%)]" />
              <div className="relative space-y-4">
                <p className="text-lg font-semibold text-amber-800">
                  “Education, dignity, and opportunity should never be out of
                  reach. Together, we can open the doors.”
                </p>
                <div className="text-sm text-amber-900/80">
                  Our programs in education, skill development, and basic needs
                  are built to grow with the community — one learner, one family
                  at a time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
