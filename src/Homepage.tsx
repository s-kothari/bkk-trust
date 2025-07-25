import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import Hero from "./components/Hero";

interface HomePageProps {
  isLocked: boolean;
}

const sections = [
  {
    sectionName: "Childrens' Program",
    description:
      "Hands-on computer classes, English lessons and after-school support on-site at our Sanstha, and primary school sponsorship to attend school.",
    image: "/impact/childrens_art_class.png",
  },
  {
    sectionName: "Kothari Mahila Sahayata Kendra",
    description:
      "Women's empowerment through education and mentorshio on-site at our Sanstha",
    image: "/impact/womens_sewing.png",
  },
  {
    sectionName: "Basic staples distribution center",
    description:
      "We provide basic staples to our students' families, including flour, rice, lentils, gram flour, sugar and porridge. We also provide basic supplies to our students, including notebooks, pens, pencils, and other school supplies.",
    image: "/impact/community_handouts.png",
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
      <Hero
        title="Bhimraj Kamlawati Kothari Charitable Trust"
        subtitle="A philanthropic effort to empower women and children in Jaipur, Rajasthan."
        image="/impact/childrens_art_class.png"
      />
      {/* The Header is now handled globally in App.tsx */}

      {/* Demo content to show scrolling */}
      <div
        className="min-h-screen p-8"
        style={{ scrollSnapAlign: isLocked ? "none" : "start" }}
      >
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-didact">
            Bhimraj Kamlawati Kothari Charitable Trust
          </h2>
          <p className="text-gray-600 mb-8">
            A philanthropic effort to empower women and children in Jaipur,
            Rajasthan.
          </p>

          <div className="flex flex-row gap-2">
            {sections.map((s) => (
              <div
                key={s.sectionName}
                className="rounded-lg shadow-md p-6 mb-6 w-1/3"
              >
                {s.image && (
                  <div className="flex-shrink-0">
                    <img
                      className="h-64 w-full object-cover"
                      src={s.image}
                      alt={s.sectionName}
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  {s.sectionName}
                </h3>
                <p className="text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
          {/* Demo content blocks */}
        </div>
      </div>

      {/* <Footer></Footer> */}
    </div>
  );
};

export default HomePage;
