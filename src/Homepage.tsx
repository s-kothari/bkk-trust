import React from "react";
import Link from "next/link";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import ProgramCard from "./components/ProgramCard";
import { BookOpen, ShoppingBasket, Users } from "lucide-react";

interface HomePageProps {
  isLocked: boolean;
}

interface ProgramCardProps {
  program: {
    icon: React.ElementType;
    title: string;
    description: string;
    image?: string;
  };
}

const sections: ProgramCardProps[] = [
  {
    program: {
      icon: BookOpen,
      title: "Childrens' Program",
      description:
        "Hands-on computer classes, English lessons and after-school support on-site at our Sanstha, and primary school sponsorship to attend school.",
      image: "/impact/childrens_art_class.png",
    },
  },
  {
    program: {
      icon: Users,
      title: "Kothari Mahila Sahayata Kendra",
      description:
        "Women's empowerment through education and mentorship on-site at our Sanstha",
      image: "/impact/womens_sewing.png",
    },
  },
  {
    program: {
      icon: ShoppingBasket,
      title: "Basic staples distribution center",
      description:
        "We provide basic staples to our students' families, including flour, rice, lentils, gram flour, sugar and porridge. We also provide basic supplies to our students, including notebooks, pens, pencils, and other school supplies.",
      image: "/impact/community_handouts.png",
    },
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
        title="" //"Bhimraj Kamlawati Kothari Charitable Trust"
        subtitle="A philanthropic effort to empower women and children in Jaipur, Rajasthan."
        image="/impact/childrens_art_class.png"
      />
      {/* The Header is now handled globally in App.tsx */}

      {/* Demo content to show scrolling */}
      <section className="bg-[#fbbf24] py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold black mb-4 font-didact">
            Bhimraj Kamlawati Kothari Charitable Trust
          </h2>
          <p className="text-gray-800">
            A family-run effort to empower women and children in Jaipur,
            Rajasthan.
          </p>
        </div>
      </section>

      <section
        className="min-h-screen py-12"
        style={{ scrollSnapAlign: isLocked ? "none" : "start" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-2 gap-8 items-stretch">
            {sections.map((s) => (
              <ProgramCard key={s.program.title} program={s.program} />
            ))}
          </div>
          {/* Demo content blocks */}
        </div>
      </section>

      {/* <Footer></Footer> */}
    </div>
  );
};

export default HomePage;
