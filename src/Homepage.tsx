import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/footer";

interface HomePageProps {
  isLocked: boolean;
}

const sections = [
  {
    sectionName: "Kothari Mahila Sahayata Kendra",
    description:
      "Women's empowerment through education and mentorshio on-site at our Sanstha",
  },
  {
    sectionName: "Childrens' Program",
    description:
      "Hands-on computer classes, English lessons and after-school support on-site at our Sanstha ",
  },
  {
    sectionName: "Education Sponsorship",
    description:
      "While we're striving to have our on-site programs at Sanstha be as enriching for children as possible, we do not see this as a replacement for school. For families with financial need, we sponsor children to get a primary education.",
  },
  {
    sectionName: "Basic staples distribution center",
    description:
      "We provide basic staples to our students' families, including flour, rice, lentils, gram flour, sugar and porridge. We also provide basic supplies to our students, including notebooks, pens, pencils, and other school supplies.",
  },
];

const HomePage: React.FC<HomePageProps> = ({ isLocked }) => {
  return (
    <div
      className="App"
      style={{
        scrollSnapType: isLocked ? "none" : "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      {/* The Header is now handled globally in App.tsx */}

      {/* Spacer to prevent content overlap with header */}
      {!isLocked && (
        <div className="h-screen" style={{ scrollSnapAlign: "start" }} />
      )}

      {/* Demo content to show scrolling */}
      <div
        className="min-h-screen p-8"
        style={{ scrollSnapAlign: isLocked ? "none" : "start" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-didact">
            Bhimraj Kamlawati Kothari Charitable Trust
          </h2>
          <p className="text-gray-600 mb-8">
            A philanthropic effort to empower women and children in Jaipur,
            Rajasthan.
          </p>

          {/* Demo content blocks */}
          {sections.map((s) => (
            <div key={s.sectionName} className="rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                {s.sectionName}
              </h3>
              <p className="text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <Footer></Footer> */}
    </div>
  );
};

export default HomePage;
